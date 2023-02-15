import './App.css'
import HomePage from './pages/HomePage'
import BasketPage from './pages/BasketPage'
import UserPage from './pages/UserPage'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
