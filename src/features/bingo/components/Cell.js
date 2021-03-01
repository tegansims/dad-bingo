import React from "react";
import styled from "styled-components";

const BaseCell = styled.div`
  flex: 0 0 31%;
  height: 100px;
  margin-bottom: 5px;
  background-color: ${({ called }) => (called ? ` #DDD8CF` : `#C4BEB4`)};
  border-radius: 4px;
  border: solid 2px black;
  clip-path: ${({ called }) =>
    called
      ? `polygon(0 0, 100% 0, 100% 100%, 0 100%)`
      : `polygon( 
    calc(0% + 5px) calc(0% + 5px),
    calc(100% - 5px) calc(0% + 5px), 
    calc(100% - 5px) calc(100% - 5px), 
    calc(0% + 5px) calc(100% - 5px) 
  )`};
  transition: clip-path 1.2s linear;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CellText = styled.p`
  text-align: center;
  transition: opacity 1.2s;
  opacity: ${({ called }) => (called ? "0.3" : "1")};
  margin: 6px;
  font-family: "Montserrat";
`;

const Cell = ({ text, updateCard, called }) => {
  return (
    <BaseCell onClick={updateCard} called={called}>
      <CellText called={called}>{text}</CellText>
    </BaseCell>
  );
};

export default Cell;
