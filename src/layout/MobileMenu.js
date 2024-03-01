import { useState } from "react";
import { Blog, Contact, Home, PagesMobile, Portfolio, Shop } from "./Menus";
const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation clearfix d-block d-lg-none mobile-header">
      <li className="dropdown">
        <a href="/">Домой</a>
        <ul style={activeLi("home")}>
          <Home />
        </ul>

      </li>
      <li className="dropdown">
        <a href="/blog-news">Новости</a>
        <ul style={activeLi("pages")}>
          <PagesMobile />
        </ul>

      </li>
      <li className="dropdown">
        <a href="/blog-accii">Акции</a>
        <ul style={activeLi("portfolio")}>
          <Portfolio />
        </ul>

      </li>
      <Contact />
    </ul>
  );
};
export default MobileMenu;
