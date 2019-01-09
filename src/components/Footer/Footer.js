import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <span>© Copyright 2019 </span>
      <a
        href="https://twitter.com/flexdinesh"
        className={styles.link}
        target="blank"
      >
        Dineshkumar Pandiyan
      </a>
    </div>
  </footer>
)

export default Footer
