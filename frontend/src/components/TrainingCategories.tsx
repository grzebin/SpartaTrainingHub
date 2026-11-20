
import {
  Package,
  Target,
  MonitorSmartphone,
  ClipboardList,
  Handshake,
  ChartNoAxesColumnIncreasing,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react'

const categories = [
  { title: 'Product Knowledge', icon: Package },
  { title: 'Sales Execution', icon: Target },
  { title: 'Systems & Tools', icon: MonitorSmartphone },
  { title: 'Field Operations', icon: ClipboardList },
  { title: 'Retailer Relationships', icon: Handshake },
  { title: 'Performance & Growth', icon: ChartNoAxesColumnIncreasing },
  { title: 'Compliance & Standards', icon: ShieldCheck },
]

function TrainingCategories() {
  return (
    <div className="training-category-grid">
      {categories.map((category) => {
        const Icon = category.icon

        return (
          
<a
  href={`#${category.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
  className="training-category-card"
  key={category.title}
>

            <span className="training-category-icon">
              <Icon size={22} aria-hidden="true" />
            </span>

            <span className="training-category-title">
              {category.title}
            </span>

            <ChevronRight
              className="training-category-chevron"
              size={18}
              aria-hidden="true"
            />
          </a>
        )
      })}
    </div>
  )
}

export default TrainingCategories
