import "./App.css";
import eruda from "eruda";
import "@twa-dev/sdk";
import styled from "styled-components";
import { Counter } from "./components/Counter";
eruda.init();
function App() {
  const StyledApp = styled.div`
    background-color: #e8e8e8;
    color: black;

    @media (prefers-color-scheme: dark) {
      background-color: #222;
      color: white;
    }
    min-height: 100vh;
    padding: 20px 20px;
  `;

  const AppContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
  `;

  return (
    <StyledApp>
      <AppContainer>
        <Counter />
      </AppContainer>
    </StyledApp>
  );
}

export default App;
