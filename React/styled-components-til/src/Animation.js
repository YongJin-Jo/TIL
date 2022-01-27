import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Animation = () => {
  return (
      <Felx>
          <Box>
          <Emoji>:)</Emoji>
        </Box>
        <Emoji>:(</Emoji>
      </Felx>
  );
};


const Felx = styled.div`
display: flex;
`
// 애니메이션 선언 방법
const roationAnimation = keyframes`
    0%{
        transform:rotate(0deg);
        border-radius: 0px;
    }
    50%{
        transform: rotate(360deg);
        border-radius: 100px
    }
    100%{
        transform:rotate(0deg);
        border-radius: 0px;
    }
`
const Emoji = styled.span`
    font-size: 36px;
`

// 기본 하위 태그 스타일링 해주는 방법 과 의사 클래스 스타일링 방법
const Box = styled.div`
display: flex;
height: 100px;
width: 100px;
background-color: tomato;
animation: ${roationAnimation} 3s linear infinite;
align-items: center;
justify-content: center;
//Pseudo Selectors 를 이용하면 하위 태크를 표중 태그가아닌 선언한 태그명으로 해줄수 있디.
${Emoji}{
    &:hover{
        font-size: 92px;
    }
}

`


