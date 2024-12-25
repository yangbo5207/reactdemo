import Background from './background'
import Banner from './banner'
import SectionCase from './section-case'
import LearnBefore from './learn-before'
import EfficientLearning from './efficient-learning'
import SectionType from './section-type' 
import SectionPrice from './section-price' 
import SectionSponsor from './section-sponsor'
import SectionCourse from './section-course'
import SctionComment from './section-comment'
import SectionFooter from './section-footer'
import './App.css'

function App() {
  return (
    <div className='relative pt-16'>
      <Background />
      <div>
        <Banner />
        <SectionCase />
        <LearnBefore />
        <EfficientLearning />
        <SectionType />
        <SectionPrice />
        <SectionSponsor />
        <SectionCourse />
        <SctionComment />
        <SectionFooter />
      </div>
    </div>
  )
}

export default App
