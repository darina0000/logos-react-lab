import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Parents from './components/Parents'
import Courses from './components/Courses'
import Useful from './components/Useful'
import Teachers from './components/Teachers'
import Reviews from './components/Reviews'

const App = () => {
  return (
    <div className="reference-home">
      <Header />
      <Hero />
      <Stats />
      <Parents />
      <Courses />
      <Useful />
      <Teachers />
      <Reviews />
    </div>
  )
}

export default App