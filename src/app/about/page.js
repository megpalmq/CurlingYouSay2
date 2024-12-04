"use client";

import "../scss/pages/about.scss";

export default function About() {
  return (
    <div className="about-container">
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
          <h1>Discover the Thrill of Curling</h1>
          <p>The sport of strategy, precision, and camaraderie.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <section className="section">
          <h2>What is Curling?</h2>
          <p>
            Curling is a team sport played on ice, where players slide stones
            toward a target area known as the "house." It’s often called “chess
            on ice” for its deep strategy and precision.
          </p>
        </section>

        <section className="section">
          <h2>The Curling Experience</h2>
          <p>
            Teams use skillful sweeping and strategic play to position their
            stones while disrupting the opponent’s game plan. It's a blend of
            physics, teamwork, and skill, making it both challenging and
            rewarding.
          </p>
        </section>

        <section className="section">
          <h2>A Rich History</h2>
          <p>
            Originating in 16th-century Scotland, curling has grown into a
            globally celebrated sport, becoming an official Winter Olympic event
            in 1998.
          </p>
        </section>
        <section className="section">
          <h2>How to Play Curling</h2>
          <p>
            Curling is a team sport that involves sliding stones on a sheet of
            ice towards a target area. The goal is to have your stone closest to
            the center of the target when all stones have been thrown.
          </p>
        </section>

        {/* Todd Shelton Section */}
        <section className="todd-shelton-section">
          <div className="todd-shelton-container">
            <div className="todd-shelton-image"></div>
            <div className="todd-shelton-info">
              <h2>Todd Shelton</h2>
              <p>
                Todd Shelton is one of Indiana's most promising up-and-coming
                curlers. With his exceptional skill and dedication to the sport,
                Todd is making waves in the curling community. His passion for
                the game and his continuous improvement on the ice have earned
                him recognition in both local and national curling events.
              </p>
              <p>
                Stay tuned as Todd Shelton continues to dominate the curling
                world and inspires others with his drive, commitment, and
                sportsmanship. 🥌💪
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
