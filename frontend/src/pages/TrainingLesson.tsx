
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, BookOpen, Clock3 } from 'lucide-react'
import PortalLayout from '../components/PortalLayout'
import { trainingModules } from '../data/trainingModules'

import LessonSections from '../components/LessonSections'


import ProductSpecsCard from '../components/ProductSpecsCard'
import { coreProducts } from '../data/products'

import { useEffect, useState } from 'react'
import LessonNavigation from '../components/LessonNavigation'
import { lessonContent } from '../data/lessonContent'



function TrainingLesson() {
  const { moduleId } = useParams<{ moduleId: string }>()

  const [currentStep, setCurrentStep] = useState(1)

  const content = lessonContent.find(
    (item) => item.moduleId === moduleId
  )

  const totalSteps = content?.sections.length ?? 0

  useEffect(() => {
    setCurrentStep(1)
  }, [moduleId])

  const goToNextStep = () => {
    setCurrentStep((step) => Math.min(step + 1, totalSteps))
  }

  const goToPreviousStep = () => {
    setCurrentStep((step) => Math.max(step - 1, 1))
  }


  const module = trainingModules.find(
    (item) => item.id === moduleId
  )

  if (!module) {
    return (
      <PortalLayout portal="spartan">
        <h1>Training Module Not Found</h1>
        <p>The requested training module is unavailable.</p>
        <Link to="/spartan/training">
          Return to Training Grounds
        </Link>
      </PortalLayout>
    )
  }

  return (
    <PortalLayout portal="spartan">
      <div className="training-lesson-page">
        <Link
          to="/spartan/training"
          className="training-lesson-back"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Back to Training Grounds
        </Link>

        <div className="training-lesson-heading">
          <span className="training-lesson-category">
            {module.category}
          </span>

          <h1>{module.title}</h1>
          <p>{module.description}</p>

          <div className="training-lesson-meta">
            <Clock3 size={16} aria-hidden="true" />
            <span>{module.estimatedMinutes} minutes</span>
          </div>
        </div>

        <section className="training-lesson-content">
          <div className="training-lesson-content-heading">
            <BookOpen size={21} aria-hidden="true" />
            <h2>Module Overview</h2>
          </div>

          
<p>
  Review each lesson, study the product specifications,
  and use the navigation controls to move through
  the training module.
</p>


          

          
{content && totalSteps > 0 ? (
  <>
    <div className="interactive-lesson-content">
      <LessonSections
        moduleId={module.id}
        activeSectionId={content.sections[currentStep - 1]?.id}
      />
    </div>

    
  </>
) : (
  <p className="lesson-sections-empty">
    Interactive lessons are coming soon for this module.
  </p>
)}


{module.id === 'core-product-knowledge' && (
  <section className="product-specs-section">
    <h2>Core Product Specifications</h2>
    <p>
      Standard product specifications and retailer pricing.
    </p>

    
<div className="product-specs-list">
  {coreProducts
    .filter((product) => {
      const activeProduct = [
        'Energy & Focus',
        'Strong',
        'Stress Relief',
      ][currentStep - 1]

      return product.name === activeProduct
    })
    .map((product) => (
      <ProductSpecsCard
        key={product.name}
        product={product}
      />
    ))}
</div>

  </section>
)}
{content && totalSteps > 0 && (
  <LessonNavigation
    currentStep={currentStep}
    totalSteps={totalSteps}
    onPrevious={goToPreviousStep}
    onNext={goToNextStep}
  />
)}

        </section>
      </div>
    </PortalLayout>
  )
}

export default TrainingLesson
