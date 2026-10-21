import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material"; // ← ДОБАВИТЬ
import Modal from "../components/Modal";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [format, setFormat] = useState("any");
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

    if (format !== "any") {
      result = result.filter((c) => c.format === format);
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
  }, [courses, search, format, selectedSubjects, priceMin, priceMax]);

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
    setFormat("any");
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
      // Редактирование существующего курса
      setCourses(
        courses.map((c) =>
          c.id === editingCourse.id
            ? { ...c, ...formData, price: Number(formData.price) }
            : c,
        ),
      );
    } else {
      // Добавление нового курса
      const newCourse = {
        id: Math.max(...courses.map((c) => c.id)) + 1,
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

        <div className="courses-catalog__head">
          <h1>Каталог курсов</h1>
          <button className="ref-button ref-button--green" onClick={handleAdd}>
            + Добавить курс
          </button>
        </div>

        <div className="courses-catalog__grid">
          <aside className="course-filter-panel">
            <div className="course-filter-panel__head">
              <h2>Фильтры</h2>
              <button onClick={resetFilters}>Сбросить</button>
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

              <div className="course-select">
                <span>Формат обучения</span>
                <select
                  value={format}
                  onChange={(e) => {
                    setFormat(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  <option value="any">Любой</option>
                  <option value="offline">Офлайн</option>
                  <option value="online">Онлайн</option>
                </select>
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
                  <span>
                    {course.format === "online" ? "Онлайн" : "Офлайн"}
                  </span>
                  <strong>{course.price} BYN</strong>

                  <div className="course-card__actions">
                    <button
                      className="course-card__button"
                      onClick={() => handleEdit(course)}
                      title="Редактировать"
                    >
                      ✏️
                    </button>
                    <button
                      className="course-card__button course-card__button--delete"
                      onClick={() => handleDelete(course.id)}
                      title="Удалить"
                    >
                      🗑️
                    </button>
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

            <div className="courses-pagination">
              {pages.map((page) => (
                <button
                  key={page}
                  className={page === currentPage ? "active" : ""}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={editingCourse ? "Редактировать курс" : "Добавить курс"}
        >
          <form onSubmit={handleFormSubmit} className="course-form">
            <label>
              Название:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                placeholder="Введите название курса"
              />
            </label>

            <label>
              Предмет:
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              >
                {subjects.map((subject) => (
                  <option key={subject.id} value={subject.id}>
                    {subject.name}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Описание:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                placeholder="Введите описание курса"
              />
            </label>

            <label>
              Цена (BYN):
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                min="0"
              />
            </label>

            <label>
              Формат:
              <select
                name="format"
                value={formData.format}
                onChange={handleInputChange}
              >
                <option value="offline">Офлайн</option>
                <option value="online">Онлайн</option>
              </select>
            </label>

            <label>
              Расписание:
              <input
                type="text"
                name="schedule"
                value={formData.schedule}
                onChange={handleInputChange}
                required
                placeholder="Например: Пн/Ср 18:00"
              />
            </label>

            <button type="submit" className="ref-button">
              {editingCourse ? "Сохранить изменения" : "Добавить курс"}
            </button>
          </form>
        </Modal>
      </div>
    </main>
  );
};

export default CoursesPage;
