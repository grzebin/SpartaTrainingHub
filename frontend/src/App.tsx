import { Route, Routes } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import SpartanPortal from './pages/SpartanPortal'
import TrainingGrounds from './pages/TrainingGrounds'
import TrainingLesson from './pages/TrainingLesson'
import CaptainPortal from './pages/CaptainPortal'
import SpartanToolkit from './pages/SpartanToolkit'
import SalesStudio from './pages/SalesStudio'
import PlaceholderPage from './components/PlaceholderPage'

import './App.css'

function App() {
  return (
    <Routes>

      {/* Public Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Spartan Portal */}
      <Route path="/spartan" element={<SpartanPortal />} />

      <Route
        path="/spartan/hub"
        element={
          <PlaceholderPage
            title="The Hub"
            portal="spartan"
          />
        }
      />

      <Route
        path="/spartan/training"
        element={<TrainingGrounds />}
      />

      <Route
        path="/spartan/training/:moduleId"
        element={<TrainingLesson />}
      />

      {/* Spartan Tool Kit */}
      <Route
        path="/spartan/toolkit"
        element={<SpartanToolkit />}
      />

      {/* VIVAZEN Sales Studio */}
      <Route
        path="/spartan/toolkit/sales-studio"
        element={<SalesStudio />}
      />

      {/* Captain / Sales Leadership Portal */}
      <Route path="/captain" element={<CaptainPortal />} />

      <Route
        path="/captain/training"
        element={
          <PlaceholderPage
            title="Training Management"
            portal="captain"
          />
        }
      />

      <Route
        path="/captain/spartans"
        element={
          <PlaceholderPage
            title="Spartan Performance"
            portal="captain"
          />
        }
      />

      <Route
        path="/captain/markets"
        element={
          <PlaceholderPage
            title="Market Performance"
            portal="captain"
          />
        }
      />

      <Route
        path="/captain/requests"
        element={
          <PlaceholderPage
            title="Requests & Forms"
            portal="captain"
          />
        }
      />

      <Route
        path="/captain/resources"
        element={
          <PlaceholderPage
            title="Leadership Resources"
            portal="captain"
          />
        }
      />

    </Routes>
  )
}

export default App