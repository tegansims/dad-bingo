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
`;

const CellText = styled.p`
  text-align: center;
  transition: opacity 1.2s;
  opacity: ${({ called }) => (called ? "0.3" : "1")};
  /* margin: 2px 6px 2px 6px; */
  margin: 6px;
`;

const Cell = ({ text, updateCard, called }) => {
  return (
    <BaseCell onClick={updateCard} called={called}>
      <CellText
        called={called}
        style={{ textAlign: "center", fontFamily: "Montserrat" }}
      >
        {text}
      </CellText>
    </BaseCell>
  );
};

export default Cell;
