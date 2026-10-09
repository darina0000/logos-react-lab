import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage'

import { orgName } from './data'

const App = () => {
  return (
    <BrowserRouter>
      <div className="reference-home">
        <Header orgName={orgName} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Routes>
        
        <Footer orgName={orgName} />
      </div>
    </BrowserRouter>
  )
}

export default App