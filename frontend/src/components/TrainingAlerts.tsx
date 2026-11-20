
import { Link } from 'react-router-dom'
import { AlertCircle, Clock3, ChevronRight } from 'lucide-react'

type TrainingAlert = {
  id: number
  spartanName: string
  issue: string
  type: 'overdue' | 'assessment'
}

const demoAlerts: TrainingAlert[] = [
  {
    id: 1,
    spartanName: 'Spartan A',
    issue: '2 overdue training assignments',
    type: 'overdue',
  },
  {
    id: 2,
    spartanName: 'Spartan B',
    issue: 'Repeated unsuccessful assessment attempts',
    type: 'assessment',
  },
  {
    id: 3,
    spartanName: 'Spartan C',
    issue: '1 overdue training assignment',
    type: 'overdue',
  },
]

function TrainingAlerts() {
  return (
    <section className="training-alerts">
      <div className="dashboard-section-heading">
        <div>
          <h2>Training Needs Attention</h2>
          <p>Spartans who may need additional coaching.</p>
        </div>

        <Link to="/captain/training">View Team</Link>
      </div>

      <div className="training-alert-list">
        {demoAlerts.map((alert) => (
          <div className="training-alert-item" key={alert.id}>
            <span className="training-alert-icon">
              {alert.type === 'overdue' ? (
                <Clock3 size={19} aria-hidden="true" />
              ) : (
                <AlertCircle size={19} aria-hidden="true" />
              )}
            </span>

            <div className="training-alert-details">
              <strong>{alert.spartanName}</strong>
              <p>{alert.issue}</p>
            </div>

            <ChevronRight
              size={18}
              className="training-alert-chevron"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      <p className="dashboard-demo-note">
        Demonstration alerts — no actual employee records.
      </p>
    </section>
  )
}

export default TrainingAlerts
