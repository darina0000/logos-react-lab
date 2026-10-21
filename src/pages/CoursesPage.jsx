import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {  Breadcrumbs, Typography, Button, IconButton, TextField, FormControl,
InputLabel, Select, MenuItem, Chip, Tabs, Tab, Box,} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "../components/Modal";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    subject: "math",
    description: "",
    price: 0,
    format: "offline",
    schedule: "",
  });

  const perPage = 6;
  const [activeTab, setActiveTab] = useState(0); // 0 = Все, 1 = Онлайн, 2 = Офлайн

  const subjects = [
    { id: "math", name: "Математика" },
    { id: "russian", name: "Русский язык" },
    { id: "english", name: "Английский язык" },
    { id: "physics", name: "Физика" },
    { id: "chemistry", name: "Химия" },
    { id: "biology", name: "Биология" },
    { id: "history", name: "История" },
    { id: "social", name: "Обществоведение" },
  ];

  // Загрузка курсов из JSON
  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => setCourses(data.courses))
      .catch((err) => console.error("Ошибка загрузки:", err));
  }, []);

  // Фильтрация курсов
  const filteredCourses = useMemo(() => {
    let result = [...courses];

    if (search) {
      result = result.filter((c) =>
        c.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // ИЗМЕНЕНО: фильтрация по активной вкладке вместо старого format
    if (activeTab === 1) {
      result = result.filter((c) => c.format === "online");
    } else if (activeTab === 2) {
      result = result.filter((c) => c.format === "offline");
    }

    if (selectedSubjects.length > 0) {
      result = result.filter((c) => selectedSubjects.includes(c.subject));
    }

    if (priceMin) {
      result = result.filter((c) => c.price >= Number(priceMin));
    }
    if (priceMax) {
      result = result.filter((c) => c.price <= Number(priceMax));
    }

    return result;
  }, [courses, search, activeTab, selectedSubjects, priceMin, priceMax]);

  // Пагинация
  const paginatedCourses = useMemo(() => {
    return filteredCourses.slice(
      (currentPage - 1) * perPage,
      currentPage * perPage,
    );
  }, [filteredCourses, currentPage, perPage]);

  const totalPages = Math.ceil(filteredCourses.length / perPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Переключение избранного
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  // Переключение предмета (множественный выбор)
  const toggleSubject = (subjectId) => {
    setSelectedSubjects((prev) =>
      prev.includes(subjectId)
        ? prev.filter((s) => s !== subjectId)
        : [...prev, subjectId],
    );
    setCurrentPage(1);
  };

  // Сброс фильтров
  const resetFilters = () => {
    setSearch("");
    setActiveTab(0); // ИЗМЕНЕНО: сбрасываем вкладку на "Все"
    setSelectedSubjects([]);
    setPriceMin("");
    setPriceMax("");
    setCurrentPage(1);
  };

  // Открыть модалку для добавления
  const handleAdd = () => {
    setEditingCourse(null);
    setFormData({
      title: "",
      subject: "math",
      description: "",
      price: 0,
      format: "offline",
      schedule: "",
    });
    setIsModalOpen(true);
  };

  // Открыть модалку для редактирования
  const handleEdit = (course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      subject: course.subject,
      description: course.description,
      price: course.price,
      format: course.format,
      schedule: course.schedule,
    });
    setIsModalOpen(true);
  };

  // Удалить курс
  const handleDelete = (id) => {
    if (confirm("Удалить курс?")) {
      setCourses(courses.filter((c) => c.id !== id));
    }
  };

  // Сохранить курс (добавление или редактирование)
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (editingCourse) {
      setCourses(
        courses.map((c) =>
          c.id === editingCourse.id
            ? { ...c, ...formData, price: Number(formData.price) }
            : c,
        ),
      );
    } else {
      const newCourse = {
        id: Math.max(...courses.map((c) => c.id), 0) + 1,
        ...formData,
        price: Number(formData.price),
        teacherId: 101,
        image:
          "https://images.unsplash.com/photo-1509869175650-a1d97972541a?auto=format&fit=crop&w=900&q=80",
      };
      setCourses([...courses, newCourse]);
    }

    setIsModalOpen(false);
    setEditingCourse(null);
    setFormData({
      title: "",
      subject: "math",
      description: "",
      price: 0,
      format: "offline",
      schedule: "",
    });
  };

  // Изменение полей формы
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="courses-page">
      <div className="ref-container courses-catalog">
        {/* Хлебные крошки MUI */}
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{
            mb: 3,
            fontSize: 14,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <Typography
            component={Link}
            to="/"
            sx={{
              color: "#aaa",
              textDecoration: "none",
              "&:hover": { color: "#35c62f" },
            }}
          >
            Главная
          </Typography>
          <Typography color="text.primary" sx={{ fontWeight: 700 }}>
            Каталог
          </Typography>
        </Breadcrumbs>

        {/* Вкладки MUI Tabs для переключения формата */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => {
              setActiveTab(newValue);
              setCurrentPage(1);
            }}
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 700,
                fontSize: 16,
                minWidth: 120,
              },
            }}
          >
            <Tab label="Все курсы" />
            <Tab label="Онлайн" />
            <Tab label="Офлайн" />
          </Tabs>
        </Box>

        <div className="courses-catalog__head">
          <h1>Каталог курсов</h1>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAdd}
            startIcon={<AddIcon />}
            sx={{
              minWidth: 200,
              minHeight: 46,
              borderRadius: 999,
              fontWeight: 700,
              textTransform: "none",
            }}
          >
            Добавить курс
          </Button>
        </div>

        <div className="courses-catalog__grid">
          <aside className="course-filter-panel">
            <div className="course-filter-panel__head">
              <h2>Фильтры</h2>
              <Button
                variant="text"
                onClick={resetFilters}
                sx={{
                  color: "#a90dff",
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  "&:hover": {
                    backgroundColor: "rgba(169, 13, 255, 0.08)",
                    color: "#7a00b8",
                  },
                }}
              >
                Сбросить
              </Button>
            </div>

            <form>
              <div className="course-search">
                <input
                  type="text"
                  placeholder="Поиск по предмету"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>

              <div className="course-subjects">
                <p>Предмет</p>
                {subjects.map((subject) => (
                  <label key={subject.id}>
                    <span>{subject.name}</span>
                    <input
                      type="checkbox"
                      checked={selectedSubjects.includes(subject.id)}
                      onChange={() => toggleSubject(subject.id)}
                    />
                  </label>
                ))}
              </div>

              <div className="course-price-row">
                <label>
                  <span>Цена от</span>
                  <input
                    type="number"
                    placeholder="0"
                    value={priceMin}
                    onChange={(e) => {
                      setPriceMin(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </label>
                <label>
                  <span>до</span>
                  <input
                    type="number"
                    placeholder="1000"
                    value={priceMax}
                    onChange={(e) => {
                      setPriceMax(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </label>
              </div>
            </form>
          </aside>

          <div className="courses-results">
            <div className="courses-list">
              {paginatedCourses.map((course) => (
                <article key={course.id} className="course-card">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <Chip
                    label={course.format === "online" ? "Онлайн" : "Офлайн"}
                    color={course.format === "online" ? "primary" : "secondary"}
                    size="small"
                    sx={{
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      justifySelf: "start",
                      gridColumn: "1",
                    }}
                  />
                  <strong>{course.price} BYN</strong>

                  <div className="course-card__actions">
                    <IconButton
                      onClick={() => handleEdit(course)}
                      title="Редактировать"
                      sx={{ color: "#666" }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(course.id)}
                      title="Удалить"
                      sx={{ color: "#d62020" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>

                  <button
                    className={`course-card__favorite favorite-btn ${favorites.includes(course.id) ? "is-active" : ""}`}
                    onClick={() => toggleFavorite(course.id)}
                    aria-label="Добавить в избранное"
                  >
                    {favorites.includes(course.id) ? "♥" : "♡"}
                  </button>
                </article>
              ))}
            </div>

            {/* Пагинация */}
            <div className="courses-pagination">
              {pages.map((page) => (
                <Button
                  key={page}
                  variant={page === currentPage ? "contained" : "outlined"}
                  color={page === currentPage ? "secondary" : "inherit"}
                  onClick={() => setCurrentPage(page)}
                  sx={{
                    minWidth: 32,
                    minHeight: 32,
                    borderRadius: 1,
                    border: page === currentPage ? "none" : "1px solid #ddd",
                  }}
                >
                  {page}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={editingCourse ? "Редактировать курс" : "Добавить курс"}
        >
          <form
            onSubmit={handleFormSubmit}
            style={{ display: "grid", gap: "16px", marginTop: "16px" }}
          >
            <TextField
              label="Название курса"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Цена (BYN)"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleInputChange}
              required
              inputProps={{ min: 0 }}
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Расписание"
              name="schedule"
              value={formData.schedule}
              onChange={handleInputChange}
              required
              placeholder="Например: Пн/Ср 18:00"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Описание курса"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />

            <FormControl fullWidth required>
              <InputLabel id="subject-label">Предмет</InputLabel>
              <Select
                labelId="subject-label"
                name="subject"
                value={formData.subject}
                label="Предмет"
                onChange={handleInputChange}
              >
                {subjects.map((subject) => (
                  <MenuItem key={subject.id} value={subject.id}>
                    {subject.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth required>
              <InputLabel id="format-label">Формат обучения</InputLabel>
              <Select
                labelId="format-label"
                name="format"
                value={formData.format}
                label="Формат обучения"
                onChange={handleInputChange}
              >
                <MenuItem value="offline">Офлайн</MenuItem>
                <MenuItem value="online">Онлайн</MenuItem>
              </Select>
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                minHeight: 50,
                borderRadius: 999,
                fontWeight: 700,
                textTransform: "none",
                mt: 1,
              }}
            >
              {editingCourse ? "Сохранить изменения" : "Добавить курс"}
            </Button>
          </form>
        </Modal>
      </div>
    </main>
  );
};

export default CoursesPage;
