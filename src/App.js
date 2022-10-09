import { useContext, useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import TaskInfo from './components/TaskInfo'
import MyDay from './pages/MyDay'
import Important from './pages/Important'
import Planned from './pages/Planned'
import Assigned from './pages/Assigned'
import MyTasks from './pages/MyTasks'
import { TasksContext } from './context/TasksContext'

function App() {
  const { tasks, getAllTasks } = useContext(TasksContext)

  useEffect(() => {
    getAllTasks()
  }, [tasks])

  return (
    <Router>
      <Container>
        <Sidebar />
        <TaskInfo />
        <Routes>
          <Route path="/">
            <Route index element={<MyDay />} />
            <Route path="important" element={<Important />} />
            <Route path="planned" element={<Planned />} />
            <Route path="assigned" element={<Assigned />} />
            <Route path="tasks" element={<MyTasks />} />
          </Route>
        </Routes>
      </Container>
    </Router>
    
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #181818;
  display: flex;
`