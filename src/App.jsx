import { BrowserRouter, Routes, Route } from "react-router-dom"
import TasksPage from "./pages/TasksPage/TasksPage"
import All from "./pages/AllPage/All"
import Important from "./pages/Important/Important"
import Completed from "./pages/Completed/Completed"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import "./index.scss"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/all" element={<All />} />
          <Route path="/important" element={<Important />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )

}
export default App
