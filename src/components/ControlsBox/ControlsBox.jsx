import styles from "./ControlsBox.module.css";

import { ReactComponent as LogoutIcon } from "../../data/icons/logout.svg";

import moonIcon from "../../data/icons/moon.svg";
import sunIcon from "../../data/icons/sun.svg";

const ControlsBox = ({ isDarkMode, changeModeHandler, isOpen }) => {
  return (
    <ul className={styles.controlsList}>
      <li className={styles.controlsListItem}>
        <button
          className={isDarkMode ? styles.logoutBtnDark : styles.logoutBtnLight}
        >
          <LogoutIcon
            className={
              isDarkMode ? styles.logoutIconDark : styles.logoutIconLight
            }
          />
          <span
            className={
              isDarkMode ? styles.controlTextDark : styles.controlTextLight
            }
          >
            Logout
          </span>
        </button>
      </li>
      <li className={styles.controlsListItem}>
        {isOpen && (
          <>
            <img src={isDarkMode ? sunIcon : moonIcon} alt="mode-icon" />

            <span
              className={
                isDarkMode ? styles.controlTextDark : styles.controlTextLight
              }
            >
              {isDarkMode ? "Light mode" : "Dark mode"}
            </span>
          </>
        )}

        <label
          className={
            isOpen ? styles.checkboxLabelOpened : styles.checkboxLabelClosed
          }
        >
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={changeModeHandler}
          />
          <span className={styles.checkboxSlider}></span>
        </label>
      </li>
    </ul>
  );
};

export default ControlsBox;
