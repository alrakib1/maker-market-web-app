import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Main() {
  //   const { cart } = useSelector((state) => ({ ...state }));

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link legacyBehavior href="/">
          <a className={styles.logo}>
            <Image src="/logo.png" alt="logo" width={100} height={50} />
          </a>
        </Link>
        <div className={styles.search}>
          <input type="text" name="" placeholder="Search..." id="" />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link legacyBehavior href="/cart">
          <a className={styles.cart}>
            <FaOpencart />
            <span>0</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
