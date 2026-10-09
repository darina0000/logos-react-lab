import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Parents from '../components/Parents'
import Courses from '../components/Courses'
import Useful from '../components/Useful'
import Teachers from '../components/Teachers'
import Reviews from '../components/Reviews'
import Callout from '../components/Callout'
import { pageTitle, courses, stats, reviews } from '../data'

const HomePage = () => {
  return (
    <main>
      <Hero title={pageTitle} />
      <Stats orgName="Логос" stats={stats} />
      <Parents />
      <Courses courses={courses} />
      <Useful />
      <Teachers />
      <Reviews reviews={reviews} />
      <Callout />
    </main>
  )
}

export default HomePage