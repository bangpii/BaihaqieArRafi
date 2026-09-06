import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src="/logo.png" alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Baihaqie Ar Rafi &nbsp;
            <span className='sm:block hidden'> | Full Stack Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <AnimatePresence>
            {toggle && (
              <motion.div
                key='backdrop'
                className='mobile-menu-backdrop'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                onClick={() => setToggle(false)}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {toggle && (
              <motion.aside
                key='drawer'
                className='mobile-menu-drawer'
                initial={{ x: "110%" }}
                animate={{ x: 0 }}
                exit={{ x: "110%" }}
                transition={{ type: "spring", damping: 26, stiffness: 220 }}
              >
                <button
                  type='button'
                  aria-label='Close menu'
                  className='absolute top-7 right-7 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white'
                  onClick={() => setToggle(false)}
                >
                  <img
                    src={close}
                    alt='close'
                    className='w-[18px] h-[18px] object-contain'
                  />
                </button>

                <ul>
                  {navLinks.map((nav, i) => (
                    <motion.li
                      key={nav.id}
                      className={`mobile-menu-link font-poppins ${
                        active === nav.title ? "active" : ""
                      }`}
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 60, opacity: 0 }}
                      transition={{
                        delay: 0.15 + i * 0.08,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.aside>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
