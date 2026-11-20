
import PortalLayout from '../components/PortalLayout'

import { BookOpen, CircleCheck, Clock3 } from 'lucide-react'
import DashboardCard from '../components/DashboardCard'
import TrainingCategories from '../components/TrainingCategories'
import TrainingModuleList from '../components/TrainingModuleList'


const trainingCategories = [
  'Product Knowledge',
  'Sales Execution',
  'Systems & Tools',
  'Field Operations',
  'Retailer Relationships',
  'Performance & Growth',
  'Compliance & Standards',
]

function TrainingGrounds() {
  return (
    <PortalLayout portal="spartan">
      <div className="dashboard-heading">
        <h1>Training Grounds</h1>
        <p>
          Build your knowledge. Strengthen your execution.
          Own the standard.
        </p>
      </div>

      <section className="dashboard-section">
        <div className="dashboard-section-heading">
          <div>
            <h2>My Training Progress</h2>
            <p>Track your progress through assigned training.</p>
          </div>
        </div>

        <p>
          
        <div className="dashboard-card-grid">
          <DashboardCard
            title="Assigned"
            value={8}
            description="Total training modules assigned"
            icon={<BookOpen size={20} />}
          />

          <DashboardCard
            title="Completed"
            value={5}
            description="Modules successfully completed"
            icon={<CircleCheck size={20} />}
          />

          <DashboardCard
            title="In Progress"
            value={1}
            description="Modules currently underway"
            icon={<Clock3 size={20} />}
          />
        </div>

        </p>
      </section>

      <section className="dashboard-section">
        <div className="dashboard-section-heading">
          <div>
            <h2>Explore Training</h2>
            <p>Browse training by category.</p>
          </div>
        </div>

        <TrainingCategories />
      </section>

      
{trainingCategories.map((category) => (
  <section
    key={category}
    id={category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
    className="dashboard-section"
  >
    <div className="dashboard-section-heading">
      <div>
        <h2>{category}</h2>
        <p>Individual micro-learning modules.</p>
      </div>
    </div>

    <TrainingModuleList category={category} />
  </section>
))}


    </PortalLayout>
  )
}

export default TrainingGrounds
