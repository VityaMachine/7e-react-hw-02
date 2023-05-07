import { useState, useEffect } from "react";

import clsx from "clsx";

import styles from "./MenuBar.module.css";

import UserBox from "../UserBox";
import MenuList from "../MenuList";
import ControlsBox from "../ControlsBox";

import searchIconDark from "../../data/icons/search-dark.svg";
import searchIconLight from "../../data/icons/search-light.svg";
import arrowIcon from "../../data/icons/arrow.svg";

const MenuBar = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const openMenuStatus = localStorage.getItem("manuOpenStatus");
    const darkModeStatus = localStorage.getItem("darkModeStatus");

    openMenuStatus && setIsMenuOpen(JSON.parse(openMenuStatus));
    darkModeStatus && setIsDarkMode(JSON.parse(darkModeStatus));
  }, []);

  const changeOpenClose = () => {
    setIsMenuOpen(!isMenuOpen);
    localStorage.setItem("manuOpenStatus", JSON.stringify(!isMenuOpen));
  };

  const changeModeStatus = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkModeStatus", JSON.stringify(!isDarkMode));
  };

  const navMenuClasses = clsx(
    isMenuOpen ? styles.navOpened : styles.navClosed,
    isDarkMode ? styles.navDark : styles.navLight
  );

  const openCloseClasses = clsx(
    isMenuOpen ? styles.closeMenuBtn : styles.openMenuBtn,
    isDarkMode ? styles.slideBtnDark : styles.slideBtnLight
  );

  const searchBoxClasses = clsx(
    isMenuOpen ? styles.searchBoxOpened : styles.searchBoxClosed,
    isDarkMode ? styles.searchBoxDark : styles.searchBoxLight
  );

  const searchInputClasses = clsx(
    isMenuOpen ? styles.searchInputOpened : styles.searchInputClosed,
    isDarkMode ? styles.searchInputDark : styles.searchInputLight
  );

  return (
    <>
      <nav className={navMenuClasses}>
        <UserBox isDarkMode={isDarkMode} user={user} />

        <div className={searchBoxClasses}>
          <button type="button" className={styles.searchButton}>
            <img
              src={isDarkMode ? searchIconDark : searchIconLight}
              alt="search"
            />
          </button>
          <input
            className={searchInputClasses}
            type="text"
            placeholder="Search..."
          />
        </div>

        <MenuList isDarkMode={isDarkMode} />

        <ControlsBox
          isDarkMode={isDarkMode}
          changeModeHandler={changeModeStatus}
          isOpen={isMenuOpen}
        />
      </nav>

      <button className={openCloseClasses} onClick={changeOpenClose}>
        <img
          className={isMenuOpen ? styles.arrowIconClose : styles.arrowIconOpen}
          src={arrowIcon}
          alt="open-close"
        />
      </button>
    </>
  );
};

export default MenuBar;
