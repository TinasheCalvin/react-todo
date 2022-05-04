import styled from 'styled-components'
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #181818;
  display: flex;
`