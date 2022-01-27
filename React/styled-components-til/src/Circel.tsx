import React from 'react';
import styled from 'styled-components';

export const Circel = ({ bgColor, boderColor }: CircelProps) => {
  return (
    <Container bgColor={bgColor} boderColor={boderColor ?? bgColor}></Container>
  );
};

interface CircelProps {
  bgColor: string;
  boderColor?: string;
}
type ContainerDefine = CircelProps;
const Container = styled.div<ContainerDefine>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border: 0.5em solid;
  border-color: ${props => props.boderColor};
  border-radius: 10em;
`;
