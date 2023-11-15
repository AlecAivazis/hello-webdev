import "./styles.css";
import { useState } from "react";

export function Board(prop) {
  const location = [4, 4];

  return (
    <section className="container">
      {Array.from({ length: 8 }).flatMap((_, i) => (
        <BoardRow key={i}>
          {Array.from({ length: 8 }).map((_, j) => (
            <BoardCell key={i + j}>
              {i === location[0] && j === location[1] && "♞"}
            </BoardCell>
          ))}
        </BoardRow>
      ))}
    </section>
  );
}

function BoardCell(props) {
  return <button className="cell">{props.children}</button>;
}

function BoardRow(props) {
  return <div className="row">{props.children}</div>;
}
