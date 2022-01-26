import React from 'react';
import styled from 'styled-components';

export const BasicSyntax = () => {
  return (
    <Column as="header">
      <Box bgColor = "teal"/>
      <Circle bgColor = "tomato"/>
      <Btn >Login</Btn>
      <Btn as="a"  href="/">Login</Btn>
      <Column>
        <Input small placeholder="Small" />
        <Input placeholder="Normal" />
        <Input  padding="2em" placeholder="Padded" />

      </Column>
      
      
    </Column>
    )
};


// styled-components의 기본 선언 방법 입니다.
const  Felx = styled.div`
display: flex;
`;
const Column = styled(Felx)`
 flex-direction: column;
`

// 태그에 있는 props 값을 이용하여 동적 css 스타일링 적용 
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
// styled(arg)를 사용하면 arg에 선언된 css style 값이 상속된다.
const Circle = styled(Box)`
  border-radius: 50px;
  
`;
// as 를 사용하면 선한 태그와 다른 태그로 교체 할 수 있습니다.
const Btn = styled.button`
color:white;
background-color: tomato;
width: 100px;
height: 50px;
border:0;
border-radius: 15px;

`
// attrs() 함수는 tag DOM 객체에 있는 프로퍼티 값에 따라 동적으로 스타일링 할수 있게 해줍니다.
const Input = styled.input.attrs(props => ({
  type: 'text',
  size: props.small ? 5 : undefined,
}))`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};

  ::placeholder {
    color: palevioletred;
  }
`