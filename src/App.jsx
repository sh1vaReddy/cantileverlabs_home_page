import Banner from './Components/Banner.jsx'
import { Company } from './Components/Company.jsx'
import Header from './Components/Header.jsx'
import Mentors from './Components/Mentors.jsx'
import { Result } from './Components/Result.jsx'
import Reviews from './Components/Reviews.jsx'
import Services from './Components/Services.jsx'

const App = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <Header/>
    <Banner/>
    <Result/>
    <Services/>
    <Mentors/>
    <Reviews/>
    <Company/>
    </div>
  )
}

export default App