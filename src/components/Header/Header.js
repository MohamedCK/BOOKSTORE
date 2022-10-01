import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import styles from './Header.module.css';

const Nav = () => (
  <header className={styles.Header}>
    <h1 className={styles.Logo}>Bookstore CMS</h1>
    <nav className={styles.Navigation}>
      <ul className={styles.UnorderedList}>
        <li className={styles.ListItem}>
          <Link to="/" className={({ isActive }) => `${styles.Link} ${(isActive ? styles.Active : '')}`} end>Books</Link>
        </li>
        <li className={styles.ListItem}>
          <Link to="/categories" className={({ isActive }) => `${styles.Link} ${(isActive ? styles.Active : '')}`}>Categories</Link>
        </li>
      </ul>
    </nav>
    <button type="button" className={styles.IconName}>
      <ImUser />
    </button>
  </header>

);

export default Nav;
