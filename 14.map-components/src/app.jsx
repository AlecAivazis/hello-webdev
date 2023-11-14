import "./styles.css";

const genres = [
  {
    title: "Only on Netflix",
    shows: [
      {
        title: "Five Star Chef",
        image: "five-star-chef.png",
      },
      {
        title: "The Wonderful Story of Henry Sugar",
        image: "the-wonderful-story-of-henry-sugar.png",
      },
      {
        title: "Life on Our Planet",
        image: "life-on-our-planet.png",
      },
      {
        title: "Blue Eye Samurai",
        image: "blue-eye-samurai.png",
      },
    ],
  },
  {
    title: "Trending Now",
    shows: [
      {
        title: "Bake Off",
        image: "bake-off.png",
      },
      {
        title: "Blue Eye Samurai",
        image: "blue-eye-samurai.png",
      },
      {
        title: "Life on Our Planet",
        image: "life-on-our-planet.png",
      },
      {
        title: "All the Light We Cannot See",
        image: "all-the-light-we-cannot-see.png",
      },
    ],
  },
];

export function App() {
  return (
    <main>
      <section className="hero">
        <header className="fade-reverse">
          <a href="/" id="logo">
            <img src="/assets/logo.png" height={50} />
          </a>
          <nav>
            <a href="/">Home</a>
            <a href="/shows">TV Shows</a>
            <a href="/movies">Movies</a>
          </nav>
        </header>
        <div className="button-container">
          <ButtonLink id="link-play">Play</ButtonLink>
          <ButtonLink id="link-more-info">More Info</ButtonLink>
        </div>
      </section>
      <div id="vignette" className="fade" />
      <section className="grid">
        <GridRow title="Only on Netflix">
          <GridImage image="five-star-chef.png" />
          <GridImage image="the-wonderful-story-of-henry-sugar.png" />
          <GridImage image="life-on-our-planet.png" />
          <GridImage image="blue-eye-samurai.png" />
        </GridRow>
        <GridRow title="Trending Now">
          <GridImage image="bake-off.png" />
          <GridImage image="blue-eye-samurai.png" />
          <GridImage image="life-on-our-planet.png" />
          <GridImage image="all-the-light-we-cannot-see.png" />
        </GridRow>
      </section>
    </main>
  );
}

function GridImage(props) {
  return (
    <img
      src={"/assets/shows/" + props.image}
      height={100}
      style={{ marginRight: 20 }}
    />
  );
}

function ButtonLink(props) {
  return (
    <a
      className="button-link"
      id={props.id}
      style={{
        borderRadius: 5,
        padding: 10,
        height: 20,
        fontSize: 18,
      }}
    >
      {props.children}
    </a>
  );
}

function GridRow(props) {
  return (
    <div className="grid-row">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}
