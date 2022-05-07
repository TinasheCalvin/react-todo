import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import styled from 'styled-components'
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/">
            <Route index element={<Main background="/images/TV Tower.jpg" />} />
            <Route path="important" element={<Main background="/images/Beach.jpg" />} />
            <Route path="planned" element={<Main background="/images/Sunset.jpg" />} />
            <Route path="assigned" element={<Main background="/images/Desert.jpg" />} />
            <Route path="tasks" element={<Main background="/images/Lighthouse.jpg" />} />
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