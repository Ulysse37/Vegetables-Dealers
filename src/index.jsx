import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
    <Footer />
  </StrictMode>,
)
