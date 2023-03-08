import { BrowserRouter, Routes, Route } from "react-router-dom"
import Tasks from "./containers/TodoListContainer"
import All from "./pages/AllPage/All"
import Important from "./pages/Important/Important"
import Completed from "./pages/Completed/Completed"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import "./index.scss"
import Aside from "./components/Aside/Aside"

const App = () => {
  return (
    <BrowserRouter>
      <div className="rootContainer">
        <Aside />
        <main className="main">
          <Routes>
            <Route path="/all" element={<All />} />
            <Route path="/" element={<Tasks />} />
            <Route path="/important" element={<Important />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
    </div >
    </BrowserRouter>
  )

}
export default App
