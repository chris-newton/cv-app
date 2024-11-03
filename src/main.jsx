import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import InputContainer from './components/InputContainer.jsx'
import ResumePreview from './components/ResumePreview.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id="content-container">
      <InputContainer />
      <ResumePreview />
    </div>
  </StrictMode>,
)
