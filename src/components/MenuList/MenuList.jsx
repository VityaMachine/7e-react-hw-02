import styles from "./MenuList.module.css";

// iconsDark
import { ReactComponent as DashboardIcon } from "../../data/icons/dashboard.svg";
import { ReactComponent as RevenueIcon } from "../../data/icons/revenue.svg";
import { ReactComponent as NotificationIcon } from "../../data/icons/notification.svg";
import { ReactComponent as AnalyticsIcon } from "../../data/icons/analytics.svg";
import { ReactComponent as InventoryIcon } from "../../data/icons/inventory.svg";

const MenuList = ({ isDarkMode }) => {
  return (
    <ul className={styles.menuList}>
      <li className={styles.menuListItem}>
        <a
          className={isDarkMode ? styles.menuLinkDark : styles.menuLinkLight}
          href="./#"
        >
          <DashboardIcon
            className={isDarkMode ? styles.svgIconDark : styles.svgIconLight}
          />
          <span className={styles.menuLinkText}>dashboard</span>
        </a>
      </li>
      <li className={styles.menuListItem}>
        <a
          className={isDarkMode ? styles.menuLinkDark : styles.menuLinkLight}
          href="./#"
        >
          <RevenueIcon
            className={isDarkMode ? styles.svgIconDark : styles.svgIconLight}
          />
          <span className={styles.menuLinkText}>revenue</span>
        </a>
      </li>
      <li className={styles.menuListItem}>
        <a
          className={isDarkMode ? styles.menuLinkDark : styles.menuLinkLight}
          href="./#"
        >
          <NotificationIcon
            className={isDarkMode ? styles.svgIconDark : styles.svgIconLight}
          />
          <span className={styles.menuLinkText}>notification</span>
        </a>
      </li>
      <li className={styles.menuListItem}>
        <a
          className={isDarkMode ? styles.menuLinkDark : styles.menuLinkLight}
          href="./#"
        >
          <AnalyticsIcon
            className={isDarkMode ? styles.svgIconDark : styles.svgIconLight}
          />
          <span className={styles.menuLinkText}>analytics</span>
        </a>
      </li>
      <li className={styles.menuListItem}>
        <a
          className={isDarkMode ? styles.menuLinkDark : styles.menuLinkLight}
          href="./#"
        >
          <InventoryIcon
            className={isDarkMode ? styles.svgIconDark : styles.svgIconLight}
          />
          <span className={styles.menuLinkText}>inventory</span>
        </a>
      </li>
    </ul>
  );
};

export default MenuList;
