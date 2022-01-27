import styled from 'styled-components';
import { Circel } from './Circel';

function App() {
  return (
    <BackgoundColor>
      <Circel bgColor="teal" />
      <Circel bgColor="tomato" boderColor="teal" />
      <span>Theme Color</span>
    </BackgoundColor>
  );
}

const BackgoundColor = styled.main`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.Color};
  span {
    font-size: 5rem;
  }
`;

export default App;
