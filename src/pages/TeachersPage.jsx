import { useState } from "react";
import { Link } from "react-router-dom";
import { teachers } from "../data";
import { Avatar, IconButton } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'


const TeachersPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTeacher = teachers[currentIndex];

  const nextTeacher = () => {
    setCurrentIndex((prev) => (prev + 1) % teachers.length);
  };

  const prevTeacher = () => {
    setCurrentIndex((prev) => (prev - 1 + teachers.length) % teachers.length);
  };

  return (
    <main className="teachers-page">
      <div className="ref-container">
        <div className="teachers-breadcrumb">
          <Link to="/">Главная</Link>
          <span>›</span>
          <strong>Преподаватели</strong>
        </div>

        <div className="teachers-band">
          <h1>Команда центра «Логос»</h1>

          <div className="teachers-layout">
            {/* Миниатюры преподавателей слева */}
            <div className="teacher-thumbs">
              {teachers.map((teacher, index) => (
                <Avatar
                  key={teacher.id}
                  onClick={() => setCurrentIndex(index)}
                  src={teacher.image}
                  alt={teacher.name}
                  sx={{
                    width: 96,
                    height: 128,
                    cursor: "pointer",
                    border:
                      index === currentIndex
                        ? "3px solid #35c62f"
                        : "3px solid transparent",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    },
                  }}
                />
              ))}
            </div>

            {/* Большое фото преподавателя в центре */}
            <div className="teachers-photo-card" style={{ position: 'relative', width: 560, height: 720 }}>
  <Avatar
    src={currentTeacher.image}
    alt={currentTeacher.name}
    sx={{
      width: '100%',
      height: '100%',
      borderRadius: 2,
      border: '5px solid #fff',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
    }}
  />
  <IconButton
    onClick={prevTeacher}
    aria-label="Предыдущий преподаватель"
    sx={{
      position: 'absolute',
      left: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(255,255,255,0.8)',
      '&:hover': { backgroundColor: 'rgba(255,255,255,1)' }
    }}
  >
    <NavigateBeforeIcon sx={{ fontSize: 40 }} />
  </IconButton>
  <IconButton
    onClick={nextTeacher}
    aria-label="Следующий преподаватель"
    sx={{
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(255,255,255,0.8)',
      '&:hover': { backgroundColor: 'rgba(255,255,255,1)' }
    }}
  >
    <NavigateNextIcon sx={{ fontSize: 40 }} />
  </IconButton>
</div>

            {/* Информация о преподавателе справа */}
            <div className="teacher-profile">
              <div className="teacher-profile__head">
                <h2>
                  <span>{currentTeacher.surname}</span>
                  <small>{currentTeacher.name}</small>
                </h2>
                <span className="teacher-subject-pill">
                  {currentTeacher.subject}
                </span>
              </div>

              {/* Блок "Образование" */}
              <div className="teacher-metric-group">
                <h3>Образование</h3>
                <div className="teacher-metrics">
                  <div>
                    <strong>{currentTeacher.educationYears}</strong>
                    <span>{currentTeacher.educationUnit}</span>
                    <span>{currentTeacher.educationText}</span>
                  </div>
                  <div>
                    <strong>{currentTeacher.experience}</strong>
                    <span>лет</span>
                    <span>опыт подготовки к ЦТ</span>
                  </div>
                  <div>
                    <strong>{currentTeacher.center}</strong>
                    <span>лет</span>
                    <span>работает в Центре "Логос"</span>
                  </div>
                </div>
              </div>

              {/* Блок "Достижения" */}
              <div className="teacher-metric-group">
                <h3>Достижения</h3>
                <div className="teacher-achievements">
                  {currentTeacher.achievements.map((achievement, index) => (
                    <div key={index}>
                      <img src={achievement.icon} alt="" aria-hidden="true" />
                      <strong>{achievement.text}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Блок "Результаты учеников" */}
              <div className="teacher-metric-group">
                <h3>Результаты учеников</h3>
                <div className="teacher-results">
                  {currentTeacher.results.map((result, index) => (
                    <div key={index}>
                      <strong>{result.value}</strong>
                      <span>{result.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeachersPage;
