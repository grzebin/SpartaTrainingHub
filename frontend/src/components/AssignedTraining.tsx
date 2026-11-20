
import { Link } from 'react-router-dom'
import { BookOpen, ChevronRight } from 'lucide-react'

type TrainingModule = {
  id: number
  title: string
  category: string
  progress: number
  status: 'Completed' | 'In Progress' | 'Not Started'
}

const demoModules: TrainingModule[] = [
  {
    id: 1,
    title: 'Core Product Knowledge',
    category: 'Product Knowledge',
    progress: 100,
    status: 'Completed',
  },
  {
    id: 2,
    title: 'The SPARTAN Sales Process',
    category: 'Sales Execution',
    progress: 60,
    status: 'In Progress',
  },
  {
    id: 3,
    title: 'Manifest App Fundamentals',
    category: 'Systems & Tools',
    progress: 0,
    status: 'Not Started',
  },
]

function AssignedTraining() {
  return (
    <section className="assigned-training dashboard-section">
      <div className="dashboard-section-heading">
        <div>
          <h2>My Assigned Training</h2>
          <p>Pick up where you left off or start your next module.</p>
        </div>

        <Link to="/spartan/training">View All Training</Link>
      </div>

      <div className="assigned-training-list">
        {demoModules.map((module) => (
          <div className="assigned-training-item" key={module.id}>
            <div className="assigned-training-icon">
              <BookOpen size={20} aria-hidden="true" />
            </div>

            <div className="assigned-training-details">
              <div className="assigned-training-top">
                <div>
                  <strong>{module.title}</strong>
                  <p>{module.category}</p>
                </div>

                <span className="assigned-training-status">
                  {module.status}
                </span>
              </div>

              <div
                className="assigned-training-progress"
                role="progressbar"
                aria-label={`${module.title} progress`}
                aria-valuenow={module.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="assigned-training-progress-fill"
                  style={{ width: `${module.progress}%` }}
                />
              </div>
            </div>

            <ChevronRight
              size={18}
              className="assigned-training-chevron"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      <p className="dashboard-demo-note">
        Demonstration assignments — live training progress
        will be connected later.
      </p>
    </section>
  )
}

export default AssignedTraining
