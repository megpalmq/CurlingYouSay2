"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
export default function NavBar() {
  // State to store the screen width
  const [screenWidth, setScreenWidth] = useState(0);
  const [isToggled, setToggled] = useState(false);

  //If the user switches screen size and has the mobile menu open, it will close that mobile menu down.
  if ([screenWidth] >= 960 && isToggled) {
    setToggled(!isToggled);
  }
  // Function to toggle the class
  const toggleNav = () => {
    // This will only toggle the mobile nav if the screen size is equal to or less than 960px, which is the width the mobile navigation activates on.
    if ([screenWidth] <= 960) {
      setToggled(!isToggled);
    }
  };
  // Function to toggle the class
  const closeNav = () => {
    // This will only toggle the mobile nav if the screen size is equal to or less than 960px, which is the width the mobile navigation activates on.
    if (isToggled) {
      setToggled(!isToggled);
    }
  };

  // Function to update the screen width
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // useEffect hook to add and remove event listeners
  useEffect(() => {
    // Set the initial screen width
    updateScreenWidth();

    // Add event listener to update screen width on resize
    window.addEventListener("resize", updateScreenWidth);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount
  return (
    <div
      className={
        isToggled ? `${styles.navHolder} ${styles.active}` : styles.navHolder
      }
    >
      <Link name="home" onClick={closeNav} href="/">
        <img src="/LOGO.png" alt="logo" className={styles.logo} />
      </Link>
      <div
        className={isToggled ? `${styles.bars} ${styles.active}` : styles.bars}
        onClick={toggleNav}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <div className={styles.items}>
        <Link name="about" href="/about" onClick={toggleNav}>
          About
        </Link>
        <Link name="contact" href="/contact" onClick={toggleNav}>
          Contact
        </Link>
      </div>
    </div>
  );
}
