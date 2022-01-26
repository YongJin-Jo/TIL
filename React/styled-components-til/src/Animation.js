import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Animation = () => {
  return (
      <Felx>
          <Box>
          <span>:)</span>
        </Box>
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

// 기본 하위 태그 스타일링 해주는 방법 과 의사 클래스 스타일링 방법
const Box = styled.div`
display: flex;
height: 100px;
width: 100px;
background-color: tomato;
animation: ${roationAnimation} 3s linear infinite;
align-items: center;
justify-content: center;
span{
    font-size: 36px;
    &:hover{
        font-size: 40px;
    }
    &:active{
        opacity: 0;
    }
}

`

