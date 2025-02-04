import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experiences</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="./assets/skills/html.png" alt="HTML" />
            </div>
            <p>HTML</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="./assets/skills/css.png" alt="CSS" />
            </div>
            <p>CSS</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="./assets/skills/react.png" alt="React" />
            </div>
            <p>React</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="./assets/skills/node.png" alt="Node" />
            </div>
            <p>Node</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="./assets/skills/graphql.png" alt="GraphQL" />
            </div>
            <p>GraphQL</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="./assets/skills/mongodb.png" alt="MongoDB" />
            </div>
            <p>MongoDB</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src="./assets/skills/figma.png" alt="Figma" />
            </div>
            <p>Figma</p>
          </div>
        </div>
        <ul className={styles.history}>
          <li className={styles.historyItem}>
            <img src="./assets/history/google.png" alt="Google Logo" />
            <div className={styles.historyItemDetails}>
              <h3>Frontend Internship, Google</h3>
              <p>Jan 2025 - Present</p>
              <ul>
                <li>Developed responsive web applications</li>
                <li>Collaborated with design teams</li>
              </ul>
            </div>
          </li>
          <li className={styles.historyItem}>
            <img src="./assets/history/shinetsu.png" alt="ShinEtsu Logo" />
            <div className={styles.historyItemDetails}>
              <h3>Machine Operator, Shin-Etsu</h3>
              <p>September 2021 - November 2021 (2 months)</p>
              <ul>
                <li>Done too much things</li>
                <li>Packaging VCM for hard-disk components</li>
              </ul>
            </div>
          </li>
          <li className={styles.historyItem}>
            <img src="./assets/history/TastyPorridge.png" alt="Tasty Porridge Logo" />
            <div className={styles.historyItemDetails}>
              <h3>Part time Waiter, TastyPorridge</h3>
              <p>March 2021 - March 2021 (2 weeks)</p>
              <ul>
                <li>Deliver hot porridge to customer during peak hours</li>
                <li>Cleaning the table in seconds</li>
                <li>Experience customer fighting and de-escalating it</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};