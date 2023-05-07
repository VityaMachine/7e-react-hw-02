import styles from "./UserBox.module.css";

import AvatarBox from "../AvatarBox";

const UserBox = ({ isDarkMode, user }) => {
  return (
    <div className={styles.userBox}>
      <AvatarBox user={user} isDarkMode={isDarkMode} />

      <div className={styles.userData}>
        <div
          className={isDarkMode ? styles.userNameDark : styles.userNameLight}
        >
          {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
          {user.surname.charAt(0).toUpperCase() + user.surname.slice(1)}
        </div>
        <div
          className={isDarkMode ? styles.userEmailDark : styles.userEmailLight}
        >
          {user.email}
        </div>
      </div>
    </div>
  );
};

export default UserBox;
