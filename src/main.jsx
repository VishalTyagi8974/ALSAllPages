import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { Home, ITRFiling, ITRNoticeAppeal, TaxPlanning, TrademarkRegistration, TrademarkRenewal, CopyrightRegistration, FSSAIRegistration, FSSAIRenewal, ISOCertification, GSTRegistration, GSTReturnFiling } from './pages/index.js'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='' element={<Home />} />
    <Route path='services'  >

      <Route path='taxAndCompilance'  >
        <Route path='ITR-Filing' element={<ITRFiling />} />
        <Route path='ITR-Notice-Appeal' element={<ITRNoticeAppeal />} />
        <Route path='Tax-Planning' element={<TaxPlanning />} />
        <Route path='GST-Registration' element={<GSTRegistration />} />
        <Route path='GST-Return-Filing' element={<GSTReturnFiling />} />
      </Route>

      <Route path='trademark' >
        <Route path='Trademark-Registration' element={<TrademarkRegistration />} />
        <Route path='Trademark-Renewal' element={<TrademarkRenewal />} />
        <Route path='Copyright-Registration' element={<CopyrightRegistration />} />
      </Route>
      <Route path='licenses' >
        <Route path='FSSAI-Registration' element={<FSSAIRegistration />} />
        <Route path='FSSAI-Renewal' element={<FSSAIRenewal />} />

      </Route>
      <Route path='others' >
        <Route path='ISO-Certification' element={<ISOCertification />} />

      </Route>

    </Route>

  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
