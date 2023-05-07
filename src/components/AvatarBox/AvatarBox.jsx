import styles from "./AvatarBox.module.css";

const AvatarBox = ({ user, isDarkMode }) => {
  return (
    <div className={styles.avatarBox}>
      {user.avatar ? (
        <img src={user.avatar} alt="avatar" className={styles.avatarImg} />
      ) : (
        <div
          className={
            isDarkMode ? styles.avatarTextDark : styles.avatarTextLight
          }
        >
          {user.name.charAt(0).toUpperCase()}
          {user.surname.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default AvatarBox;
