import Navbar from './Components/Content/Navbar'
import TodoList from './Components/Routes/TodoList'
import HomePage from './Components/Routes/HomePage'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Route path="List" element={<TodoList />} />
      <Route path="Home" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </>
  )
}

export default App
