// src/app/components/Navbar/page.js
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs"; // Import UserButton
import styles from "./page.module.css";

export default function NavBar() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isToggled, setToggled] = useState(false);

  // If the user switches screen size and has the mobile menu open, it will close that mobile menu down.
  if (screenWidth >= 960 && isToggled) {
    setToggled(false);
  }

  // Function to toggle the class
  const toggleNav = () => {
    if (screenWidth <= 960) {
      setToggled(!isToggled);
    }
  };

  // Function to close the nav
  const closeNav = () => {
    if (isToggled) {
      setToggled(false);
    }
  };

  // Function to update the screen width
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // useEffect hook to add and remove event listeners
  useEffect(() => {
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <div className={isToggled ? `${styles.navHolder} ${styles.active}` : styles.navHolder}>
      <Link name="home" onClick={closeNav} href="/">
        <img src="/LOGO.png" alt="logo" className={styles.logo} />
      </Link>
      <div className={isToggled ? `${styles.bars} ${styles.active}` : styles.bars} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <div className={styles.items}>
        <Link name="home" href="/" onClick={toggleNav}>Home</Link>
        <Link name="about" href="/about" onClick={toggleNav}>About</Link>
        <Link name="events" href="/events" onClick={toggleNav}>Events</Link>
        <Link name="contact" href="/contact" onClick={toggleNav}>Contact</Link>
        <UserButton />
      </div>
    </div>
  );
}