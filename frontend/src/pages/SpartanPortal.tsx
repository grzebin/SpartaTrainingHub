
import { Link } from 'react-router-dom'
import { BookOpen, CircleCheck, Clock3 } from 'lucide-react'
import PortalLayout from '../components/PortalLayout'
import DashboardCard from '../components/DashboardCard'
import AssignedTraining from '../components/AssignedTraining'

function SpartanPortal() {
  return (
    <PortalLayout portal="spartan">
      <div className="dashboard-heading">
        <h1>Welcome to SPARTA</h1>
        <p>Grow People. Protect the Standard. Expand the Territory.</p>
      </div>

      <section className="dashboard-section">
        <div className="dashboard-section-heading">
          <div>
            <h2>My Training Overview</h2>
            <p>Your required training at a glance.</p>
          </div>

          <Link to="/spartan/training">View Training</Link>
        </div>

        <div className="dashboard-card-grid">
          <DashboardCard
            title="Assigned Training"
            value={8}
            description="Required modules assigned"
            icon={<BookOpen size={20} />}
          />

          <DashboardCard
            title="Completed"
            value={5}
            description="Required modules passed"
            icon={<CircleCheck size={20} />}
          />

          <DashboardCard
            title="Outstanding"
            value={3}
            description="Modules remaining"
            icon={<Clock3 size={20} />}
          />
        </div>
            </section>

      <AssignedTraining />

      <p className="dashboard-demo-note">
        Demonstration data — actual training records will be connected later.
      </p>
    </PortalLayout>
  )
}

export default SpartanPortal
