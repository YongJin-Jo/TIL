import styled from 'styled-components';
import { BasicSyntax } from './BasicSyntax';
import {Animation} from './Animation'

function App() {
  return (
    <Headers>
      <BasicSyntax/>
      <BR/>
      <Animation/>
    </Headers>
  );
}

// theme의 스타일 정보가 porps로 전달 됩니다.
const Headers = styled.main`
background: ${(porps) =>porps.theme.backgroundColor };
`
const BR = styled.br`

border:1em solid black
`




export default App;
