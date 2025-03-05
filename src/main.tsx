import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './pages/landing/LandingPage.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import PrivacyPage from './pages/privacy/PrivacyPage.tsx'
import TermsPage from './pages/terms/TermsPage.tsx'
import HowPage from './pages/how-it-works/HowPage.tsx'
import ReactLenis from 'lenis/react'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ReactLenis root>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/privacy-policy" element={<PrivacyPage />} />
					<Route path="/terms-of-service" element={<TermsPage />} />
					<Route path="/how-it-works" element={<HowPage />} />
				</Routes>
			</BrowserRouter>
		</ReactLenis>
	</StrictMode>,
)
