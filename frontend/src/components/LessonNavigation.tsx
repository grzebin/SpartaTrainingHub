
import { ArrowLeft, ArrowRight } from 'lucide-react'

type LessonNavigationProps = {
  currentStep: number
  totalSteps: number
  onPrevious: () => void
  onNext: () => void
}

function LessonNavigation({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
}: LessonNavigationProps) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="lesson-navigation">
      <div className="lesson-navigation-heading">
        <span>Training Progress</span>
        <span>
          Step {currentStep} of {totalSteps}
        </span>
      </div>

      <div
        className="lesson-navigation-progress"
        role="progressbar"
        aria-label="Lesson progress"
        aria-valuenow={currentStep}
        aria-valuemin={0}
        aria-valuemax={totalSteps}
      >
        <div
          className="lesson-navigation-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="lesson-navigation-actions">
        <button
          type="button"
          className="lesson-navigation-previous"
          onClick={onPrevious}
          disabled={currentStep === 1}
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Previous
        </button>

        <button
          type="button"
          className="lesson-navigation-next"
          onClick={onNext}
          disabled={currentStep === totalSteps}
        >
          Next Lesson
          <ArrowRight size={17} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default LessonNavigation
