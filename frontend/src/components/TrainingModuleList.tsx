
import { Link } from 'react-router-dom'
import { BookOpen, Clock3, ChevronRight } from 'lucide-react'
import {
  trainingModules,
  type TrainingModule,
} from '../data/trainingModules'

type TrainingModuleListProps = {
  category: string
}

function TrainingModuleList({ category }: TrainingModuleListProps) {
  const modules: TrainingModule[] = trainingModules.filter(
    (module) => module.category === category
  )

  return (
    <div className="training-module-list">
      {modules.map((module) => (
        <Link
  to={`/spartan/training/${module.id}`}
  className="training-module-card"
  key={module.id}
>
          <span className="training-module-icon">
            <BookOpen size={21} aria-hidden="true" />
          </span>

          <div className="training-module-details">
            <strong>{module.title}</strong>

            <p>{module.description}</p>

            <div className="training-module-meta">
              <Clock3 size={14} aria-hidden="true" />
              <span>{module.estimatedMinutes} min</span>
              <span aria-hidden="true">·</span>
              <span>{module.status}</span>
            </div>
          </div>

          <ChevronRight
            className="training-module-chevron"
            size={18}
            aria-hidden="true"
          />
        </Link>
      ))}

      {modules.length === 0 && (
        <p className="training-module-empty">
          No modules are available in this category yet.
        </p>
      )}
    </div>
  )
}

export default TrainingModuleList
