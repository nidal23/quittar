import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import Layout from "./Layout"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"


function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />}/>
        </Route>
      </Routes>

  )
}

export default App
