import styles from "./styles.module.scss";
import Image from "next/image";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import UserMenu from "./UserMenu";
export default function Top() {
  const [loggedIn, setLoggedIn] = useState<Boolean>(true);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li>
            <Image
              src="https://i.pinimg.com/736x/7b/f3/77/7bf3770372ce6f3300caf50d50d452b4.jpg"
              alt="image"
              width={100}
              height={100}
            />
            <span>Bangladesh /usd</span>
          </li>
          <li>
            <MdSecurity />
            <span>Buyer protection</span>
          </li>
          <li>
            <span>Customer service</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <BsSuitHeart />
            <Link href="/profile/wishlist">
              <span>Wishlist</span>
            </Link>
          </li>
          <li>
            {loggedIn ? (
              <>
                <div className={styles.flex}>
                  <Image
                    src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                    alt="user-image"
                    width={100}
                    height={100}
                  />
                  <span>Rakib</span>
                  <RiArrowDropDownFill />
                </div>
              </>
            ) : (
              <>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </>
            )}
            <UserMenu loggedIn/>
          </li>
        </ul>
      </div>
    </div>
  );
}
