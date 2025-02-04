import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello! I am Wong Dic Xin</h1>
        <p className={styles.description}>
          I'm a Computer Science student who loves building Websites.
          Besides that, I also take my free time walking in the park and playing with my dog.
          <br />
          <br />
          I am currently pursuing my Bachelor Degree in Computer Science at Taylor's University.
          As a 2026 graduate, I am looking for an internship to gain more experience in the field of Web Development and other IT related field.
          I am passionate about learning new things and I am always looking for opportunities to grow and improve my skills.
        </p>
        <a href="mailto:wongdicixn@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="./assets/hero/heroImage.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};