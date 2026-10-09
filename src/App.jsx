import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Parents from './components/Parents'
import Courses from './components/Courses'
import Useful from './components/Useful'
import Teachers from './components/Teachers'
import Reviews from './components/Reviews'
import Callout from './components/Callout'
import Footer from './components/Footer'
import { orgName, pageTitle, courses, stats } from './data'

const App = () => {
  return (
    <div className="reference-home">
      <Header orgName={orgName} />
      <Hero title={pageTitle} />
      <Stats orgName={orgName} stats={stats} />
      <Parents />
      <Courses courses={courses} />
      <Useful />
      <Teachers />
      <Reviews />
      <Callout />
      <Footer orgName={orgName} />
    </div>
  )
}

export default App