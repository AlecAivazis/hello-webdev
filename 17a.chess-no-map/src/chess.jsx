import "./styles.css";

export function Board() {
  return (
    <section className="container">
      <BoardRow>
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
      </BoardRow>
      <BoardRow>
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
      </BoardRow>
      <BoardRow>
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
      </BoardRow>
      <BoardRow>
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell>♞</BoardCell>
        <BoardCell />
        <BoardCell />
        <BoardCell />
      </BoardRow>
      <BoardRow>
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
      </BoardRow>
      <BoardRow>
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
      </BoardRow>
      <BoardRow>
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
      </BoardRow>
      <BoardRow>
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
      </BoardRow>
    </section>
  );
}

function BoardRow(props) {
  return <div className="row">{props.children}</div>;
}

function BoardCell(props) {
  return <button className="cell">{props.children}</button>;
}
