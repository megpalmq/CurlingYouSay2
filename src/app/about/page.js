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
          <h1>Discover the Thrill of Curling 🥌</h1>
          <p>The sport of strategy, precision, and camaraderie.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <section className="section">
          <h2>What is Curling?</h2>
          <p>
            Curling is a team sport played on ice where players slide heavy
            stones toward a circular target, known as the "house." The goal is
            to position the stones as close to the center of the target as
            possible, while also using skillful sweeping to influence the
            stone's speed and direction. Often referred to as "chess on ice" due
            to its strategic depth, curling combines precision, teamwork, and
            athleticism, making it a unique and exciting winter sport.
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
            Curling has a rich and fascinating history that dates back to the
            16th century in Scotland. The sport was first played on frozen ponds
            and lochs, where players would slide stones across the ice toward a
            target. Early curling stones were made from flat, heavy stones,
            sometimes with handles carved into them, and the game quickly grew
            in popularity within local Scottish communities. By the 19th
            century, curling spread to other parts of the world, including
            Canada, where it became a national pastime. In 1998, curling was
            officially added to the Winter Olympic Games, further elevating its
            international status. Today, curling is played in over 40 countries,
            with major tournaments such as the World Curling Championships and
            the Winter Olympics drawing global attention. The sport’s
            combination of precision, strategy, and teamwork continues to
            captivate players and fans alike.
          </p>
        </section>
        <section className="section">
          <h2>How to Play Curling</h2>
          <p>
            To play curling, two teams of four players take turns sliding stones
            down a sheet of ice toward a circular target called the "house." The
            goal is to place your team's stones closest to the center of the
            house by the end of the round. Each team has eight stones, and
            players take turns throwing them while teammates use brooms to sweep
            the ice in front of the stone, influencing its speed and direction.
            The team with the stone closest to the center scores points, with
            additional points for each stone closer than the opponent's nearest
            stone. The game combines strategy, precision, and teamwork, with the
            team that scores the most points over several rounds winning.
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
