import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

type UserMenuProps = {
  loggedIn: boolean;
};

export default function UserMenu({ loggedIn }: UserMenuProps) {
  return (
    <div className={styles.menu}>
      <h4>Welcome to shoppay !</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <Image
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="user-image"
            width={100}
            height={100}
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>Rakib</h3>
            <span>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined}>Login</button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Message Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/wishlist">Wishlist</Link>
        </li>
      </ul>
    </div>
  );
}
