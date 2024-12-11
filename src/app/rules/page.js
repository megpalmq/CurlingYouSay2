"use client";

import "../scss/pages/rules.scss";

export default function Rules() {
  return (
    <div className="rules-container">
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
          <h1>Rules and Strategies of Curling 🧠</h1>
          <p>
            Master the game with in-depth insights into the rules and
            strategies!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <section className="section">
          <h2>Rules of Curling</h2>
          <div className="rules-list">
            <div className="rule-card">
              <h3>The Basics</h3>
              <p>
                Curling is played between two teams, each taking turns sliding
                stones on an ice sheet to a target area. The goal is to have
                your stones closest to the center.
              </p>
            </div>
            <div className="rule-card">
              <h3>Scoring</h3>
              <p>
                Points are awarded for each stone closer to the center than the
                opponent’s closest stone at the end of an "end" (round).
              </p>
            </div>
            <div className="rule-card">
              <h3>Sweeping</h3>
              <p>
                Sweeping helps control the stone's speed and direction. Sweepers
                use brooms to smooth the ice in front of the stone.
              </p>
            </div>
            <div className="rule-card">
              <h3>Turn Order</h3>
              <p>
                Teams alternate turns, with each player delivering two stones
                per end, starting with the lead and finishing with the skip.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Strategies in Curling</h2>
          <div className="strategy-list">
            <div className="strategy-card">
              <h3>Guarding</h3>
              <p>
                Placing stones in front of the house to protect your scoring
                stones or make it harder for the opponent to score.
              </p>
            </div>
            <div className="strategy-card">
              <h3>Draw Shots</h3>
              <p>
                Sliding the stone gently into a specific position within the
                house to score or gain a tactical advantage.
              </p>
            </div>
            <div className="strategy-card">
              <h3>Takeouts</h3>
              <p>
                Knocking the opponent’s stones out of play to reduce their
                scoring potential.
              </p>
            </div>
            <div className="strategy-card">
              <h3>Freeze</h3>
              <p>
                Placing a stone directly next to or in front of an opponent's
                stone to limit their options.
              </p>
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
