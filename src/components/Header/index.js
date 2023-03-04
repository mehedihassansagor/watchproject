import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import DropdownMenu from "./DropdownMenu";
import Image from "../Image";

const navLinks = [
  {
    title: "Features",
    url: "/features",
  },
  {
    title: "Become Trainers",
    url: "/pricing",
  },
  {
    title: "Download",
    url: "/download",
  },
  
  {
    title: "Programs",
    url: "/programs",
  },
];



const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link
          className={styles.logo}
          to="/"
          onClick={() => setVisibleNav(false)}
        >
          <Image
            className={styles.pic}
            src="/images/logo-dark.svg"
            srcDark="/images/logo-light.svg"
            alt="Fitness Pro"
          />
        </Link>
        <div className={cn(styles.wrap, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {navLinks.map((x, index) =>
              x.content ? (
                <DropdownMenu
                  className={styles.group}
                  item={x}
                  key={index}
                  setValue={setVisibleNav}
                />
              ) : (
                <NavLink
                  className={styles.link}
                  activeClassName={styles.active}
                  to={x.url}
                  key={index}
                  onClick={() => setVisibleNav(false)}
                >
                  {x.title}
                </NavLink>
              )
            )}
          </nav>
          
        </div>
       
      </div>
    </header>
  );
};

export default Headers;
