import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './pages/landing/LandingPage.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import PrivacyPage from './pages/privacy/PrivacyPage.tsx'
import TermsPage from './pages/terms/TermsPage.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/privacy-policy" element={<PrivacyPage />} />
				<Route path="/terms-of-service" element={<TermsPage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)
