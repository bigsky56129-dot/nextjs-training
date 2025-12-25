import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Category from './pages/category'
import StyleGuide from './pages/style-guide'
import SingleAudio from './pages/single-audio'
import SingleGallery from './pages/single-gallery'
import SingleVideo from './pages/single-video'
import SingleStandard from './pages/single-standard'

export default function App() {
  return (
    <div id="top">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/style-guide" element={<StyleGuide />} />
        <Route path="/single-audio" element={<SingleAudio />} />
        <Route path="/single-gallery" element={<SingleGallery />} />
        <Route path="/single-video" element={<SingleVideo />} />
        <Route path="/single-standard" element={<SingleStandard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <div id="preloader"><div id="loader"></div></div>
    </div>
  )
}
