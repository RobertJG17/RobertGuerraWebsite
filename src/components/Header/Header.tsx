import type { Component } from 'solid-js';
import headerStyles from './styles.module.css';
import GithubLogo from '../../../src/assets/github-mark-white.png';
import LinkedInLogo from '../../assets/linkedin-logo.png';

const Header: Component = () => {
  // todo:
  // create header
  // create some basic animation

  return (
    <div class={headerStyles.headerDiv}>
      <header class={headerStyles.header}>
        <p>Articles</p>
        <a class={headerStyles.ATagDev} href="https://linkedin.com/RobertJG17">
          <img src={LinkedInLogo} width="40" height="35"/>
        </a>
        <a class={headerStyles.ATagDev} href="https://github.com/RobertJG17">
          <img color="white" src={GithubLogo} width="35" height="35"/>
        </a>
      </header>
    </div>
  );
};

export default Header;