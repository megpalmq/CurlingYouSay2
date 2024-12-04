"use client";

import "../scss/pages/events.scss";

export default function Events() {
  return (
    <div className="events-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="ripple-background">
          <div className="circle xxlarge shade1"></div>
          <div className="circle xlarge shade2"></div>
          <div className="circle large shade3"></div>
          <div className="circle medium shade4"></div>
          <div className="circle small shade5"></div>
        </div>
        <div className="heroText">
          <h1>Upcoming Curling Events Around the World 🌎</h1>
          <p>
            Get ready for exciting curling action happening across the globe!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <section className="section">
          <h2>Major Curling Events</h2>
          <div className="event-list">
            <div className="event-card">
              <div className="event-image1" />
              <h3>World Curling Championships</h3>
              <p>
                One of the biggest curling events globally, featuring the top
                teams from various countries.
              </p>
              <a
                href="https://www.worldcurling.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
              >
                Learn More
              </a>
            </div>
            <div className="event-card">
              <div className="event-image2" />
              <h3>Winter Olympics Curling</h3>
              <p>
                Watch the best curlers compete for Olympic gold. It’s the
                ultimate test of skill and strategy.
              </p>
              <a
                href="https://olympics.com/en/beijing-2022/curling"
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
              >
                Learn More
              </a>
            </div>
            <div className="event-card">
              <div className="event-image3" />
              <h3>Continental Cup of Curling</h3>
              <p>
                A thrilling competition where North America takes on Europe.
                High stakes and intense action!
              </p>
              <a
                href="https://www.curling.ca/2024-continental-cup/"
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
              >
                Learn More
              </a>
            </div>
            <div className="event-card">
              <div className="event-image4" />
              <h3>Grand Slam of Curling</h3>
              <p>
                A series of prestigious curling events showcasing the world’s
                top teams battling for glory.
              </p>
              <a
                href="https://www.grandslamofcurling.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Local and Regional Competitions</h2>
          <div className="event-list">
            <div className="event-card">
              <div className="event-image5" />
              <h3>USA Curling Nationals</h3>
              <p>
                The premier curling championship in the United States, where
                teams compete for national honors.
              </p>
              <a
                href="https://www.usacurling.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
              >
                Learn More
              </a>
            </div>
            <div className="event-card">
              <div className="event-image6" />
              <h3>Canadian Curling Trials</h3>
              <p>
                The trials to decide who will represent Canada in the Winter
                Olympics. Intense and exciting.
              </p>
              <a
                href="https://www.curling.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
              >
                Learn More
              </a>
            </div>
            <div className="event-card">
              <div className="event-image7" />
              <h3>European Curling Championships</h3>
              <p>
                The biggest curling competition in Europe, showcasing the top
                teams from across the continent.
              </p>
              <a
                href="https://www.curling-europe.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
              >
                Learn More
              </a>
            </div>
            <div className="event-card">
              <img className="event-image8" />
              <h3>Pacific-Asia Curling Championships</h3>
              <p>
                A key event for teams from Asia and the Pacific, showcasing
                rising curling talent.
              </p>
              <a
                href="https://www.worldcurling.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Curling Enthusiasts</p>
      </footer>
    </div>
  );
}
