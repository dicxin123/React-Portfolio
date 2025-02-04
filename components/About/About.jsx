import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src="/assets/about/aboutImage.png"
          alt="Me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="./assets/about/cursorIcon.png" 
            alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="./assets/about/serverIcon.png" 
            alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimized back-end systems
                and APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="./assets/about/cursorIcon.png" 
            alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Developer</h3>
              <p>
                I focus on creating intuitive and engaging user interfaces.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};