import type { Component } from 'solid-js';
import landingStyles from './styles.module.css';

const Landing: Component = () => {
  // todo:
  // create header
  // create some basic animation

  return (
    <div>
      <div class={landingStyles.spacer}></div>
      <div class={landingStyles.firstBlock}>
        <h1 class={landingStyles.firstBlockH1}>
          My name is Robert Guerra and I'm a 
          <code class={landingStyles.firstBlockCodeColor}>full stack</code> developer based in SoCal.
        </h1>
      </div>
      <div class={landingStyles.secondBlock}>
        <h1 class={landingStyles.secondBlockH1}>
          I graduated from California State University - Fullerton with a degree in 
          <code class={landingStyles.secondaryCodeColor}>Computational Applied Mathematics</code>.
        </h1>
      </div>
      <div>
        <section>My coding journey</section>
        <p>
          I began my programming journey with C++ at Santiago Community College. Following my transition to University,
          I began exploring Python for Data Science and Swift for iOS development. Ultimately, I
          ended up settling on Python as I became intrigued with Data Engineering. However, during my
          tenure at my most recent company, I was recruited as a web developer for a consulting project.
          Despite this jarring transition, I grew to enjoy web development and learned an incredible 
          amount about functional React. Since leaving this company, I've been building personal projects
          to hone my skills in full stack and mobile development.
        </p>
      </div>
    </div>
  );
};

export default Landing;