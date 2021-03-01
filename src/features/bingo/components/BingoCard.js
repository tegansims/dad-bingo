import React, { useState } from "react";
import styled from "styled-components";
import BaseLayout from "../../../layouts/BaseLayout";
import dadisms from "../../../lib/dadisms";
import Cell from "./Cell";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 40px;
  padding-bottom: 18px;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #f70;
  border-radius: 6px;
  color: white;
  padding: 8px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 8px 2px;
  cursor: pointer;
`;

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const BingoCard = () => {
  const generateCards = () => {
    const selectedCards = shuffle(dadisms).slice(0, 9);
    const formattedCards = selectedCards.map((ism) => {
      return {
        id: ism.id,
        text: ism.text,
        called: false,
      };
    });
    return formattedCards;
  };
  const [cardsToPlay, setCardsToPlay] = useState(generateCards());
  const [hasWonLine, setHasWonLine] = useState(false);

  const winningLines = (cards) => {
    const isCalled = (currentValue) => !!currentValue.called;
    if (cards.every(isCalled)) {
      setTimeout(() => alert("FULL DAD BINGO HOUSE!"), 300);
      return;
    }
    if (hasWonLine) return;
    if (
      (cards[0].called && cards[1].called && cards[2].called) ||
      (cards[3].called && cards[4].called && cards[5].called) ||
      (cards[6].called && cards[7].called && cards[8].called) ||
      (cards[0].called && cards[3].called && cards[6].called) ||
      (cards[1].called && cards[4].called && cards[7].called) ||
      (cards[2].called && cards[5].called && cards[8].called) ||
      (cards[0].called && cards[4].called && cards[8].called) ||
      (cards[2].called && cards[4].called && cards[6].called)
    ) {
      setHasWonLine(true);
      setTimeout(() => alert("DAD BINGO!"), 400);
    }
  };

  const updateCard = (id) => {
    setCardsToPlay(
      cardsToPlay.map((card) => {
        if (card.id === id) card.called = !card.called;
        return card;
      })
    );
    winningLines(cardsToPlay);
  };

  return (
    <BaseLayout bg={"#f70"} >
      <h1 style={{ textAlign: "center", fontFamily: "Montserrat" }}>
        DAD BINGO
      </h1>
      <Grid>
        {cardsToPlay.slice(0, 9).map((card) => (
          <Cell
            key={card.id}
            {...card}
            updateCard={() => updateCard(card.id)}
          />
        ))}
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#3D4E57",
          border: "1px solid #3D4E57",
        }}
      >
        <Button
          onClick={() => setCardsToPlay(generateCards())}
          style={{ fontFamily: "Montserrat" }}
        >
          Generate another card
        </Button>
      </div>
    </BaseLayout>
  );
};

export default BingoCard;
