
import { Link } from 'react-router-dom'
import {
  Users,
  GraduationCap,
  ClockAlert,
  ClipboardList,
} from 'lucide-react'

import PortalLayout from '../components/PortalLayout'
import DashboardCard from '../components/DashboardCard'
import TrainingAlerts from '../components/TrainingAlerts'
import MarketSnapshot from '../components/MarketSnapshot'

function CaptainPortal() {
  return (
    <PortalLayout portal="captain">
      <div className="dashboard-heading">
        <h1>Captain Dashboard</h1>
        <p>Grow People. Protect the Standard. Expand the Territory.</p>
      </div>

      <section className="dashboard-section">
        <div className="dashboard-section-heading">
          <div>
            <h2>Team Overview</h2>
            <p>Training and operational activity at a glance.</p>
          </div>

          <Link to="/captain/training">Manage Training</Link>
        </div>

        <div className="dashboard-card-grid">
          <DashboardCard
            title="Assigned Spartans"
            value={12}
            description="Members of your team"
            icon={<Users size={20} />}
          />

          <DashboardCard
            title="Training Completion"
            value="84%"
            description="Required training completed"
            icon={<GraduationCap size={20} />}
          />

          <DashboardCard
            title="Overdue Training"
            value={3}
            description="Assignments needing attention"
            icon={<ClockAlert size={20} />}
          />

          <DashboardCard
            title="Open Requests"
            value={4}
            description="Requests awaiting resolution"
            icon={<ClipboardList size={20} />}
          />
        </div>
     </section>

     <TrainingAlerts />

      <MarketSnapshot />

      <p className="dashboard-demo-note">
        Demonstration data — team records and performance
        metrics will be connected later.
      </p>
    </PortalLayout>
  )
}

export default CaptainPortal
