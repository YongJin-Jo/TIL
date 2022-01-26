import styled from 'styled-components';
import { BasicSyntax } from './BasicSyntax';
import {Animation} from './Animation'

function App() {
  return (
    <>
      <BasicSyntax/>
      <BR/>
      <Animation/>
    </>
  );
}

const BR = styled.br`

border:1em solid black
`




export default App;
