
import { Check } from 'lucide-react'
import {
  lessonContent,
  type ModuleContent,
} from '../data/lessonContent'

type LessonSectionsProps = {
  moduleId: string
  activeSectionId?: string
}

function LessonSections({
  moduleId,
  activeSectionId,
}: LessonSectionsProps) {
  const moduleContent: ModuleContent | undefined =
    lessonContent.find((item) => item.moduleId === moduleId)

  if (!moduleContent) {
    return (
      <p className="lesson-sections-empty">
        Lesson content is not available for this module yet.
      </p>
    )
  }

  return (
    <div className="lesson-sections">
      

      
{moduleContent.sections
  .filter(
    (section) =>
      !activeSectionId || section.id === activeSectionId
  )
  .map((section) => {
    const index = moduleContent.sections.findIndex(
      (item) => item.id === section.id
    )

    return (

        <section className="lesson-section-card" key={section.id}>
          <div className="lesson-section-header">
            <span className="lesson-section-number">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          </div>

          <div className="lesson-section-content">
            {section.content.map((paragraph, paragraphIndex) => (
              <div
                className="lesson-section-point"
                key={`${section.id}-${paragraphIndex}`}
              >
                <Check size={17} aria-hidden="true" />
                <p>{paragraph}</p>
              </div>
            ))}
          </div>
        </section>
      )
})}
    </div>
  )
}

export default LessonSections
