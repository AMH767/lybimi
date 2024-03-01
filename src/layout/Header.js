import Link from "next/link";
import { Fragment, useState } from "react";
import { sidebarToggle } from "../utils";
import { Blog, Contact, Home, PagesDasktop, Portfolio, Shop } from "./Menus";
import MobileMenu from "./MobileMenu";

const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header1 />;
    case 2:
      return <Header2 />;
    case 3:
      return <Header3 />;

    default:
      return <DefaultHeader />;
  }
};
export default Header;

const SearchBtn = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <button className="far fa-search" onClick={() => setToggle(!toggle)} />
      <form
        onSubmit={(e) => e.preventDefault()}
        action="#"
        className={`${toggle ? "" : "hide"}`}
      >
        <input
          type="text"
          placeholder="Search"
          className="searchbox"
          required=""
        />
        <button type="submit" className="searchbutton far fa-search" />
      </form>
    </Fragment>
  );
};
const DaskTopMenu = () => (
  <ul className="navigation clearfix d-none d-lg-flex">
    <li>
      <a href="/">Домой</a>
      <ul>
        <Home />
      </ul>
    </li>
    <li className="dropdown">
      <a href="/blog-news">Новости</a>
      {/* <ul>
        <PagesDasktop />
      </ul> */}
      {/* <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div> */}
    </li>
    <li className="dropdown">
      <a href="/blog-accii">Акции</a>
      {/* <ul>
        <Portfolio />
      </ul> */}
      {/* <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div> */}
    </li>
    {/* <li className="dropdown">
      <a href="#">blog</a>
      <ul>
        <Blog />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li>
    <li className="dropdown">
      <a href="#">shop</a>
      <ul>
        <Shop />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li> */}
    <Contact />
  </ul>
);

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="main-menu navbar-expand-lg mobile-nav">
      <div className="navbar-header">
        <div className="mobile-logo my-15">
          <Link href="/">
            <a>
              <img
                src="assets/images/logos/logo-white.png"
                alt="Logo"
                title="Logo"
              />
            </a>
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          onClick={() => setNav(!nav)}
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className={`navbar-collapse collapse clearfix ${nav ? "show" : ""}`}>
        <DaskTopMenu />
        <MobileMenu />
      </div>
    </nav>
  );
};

const DefaultHeader = () => (
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  <header className="main-header fixed-header">
  {/*Header-Upper*/}
  <div className="header-upper">
    <div className="container-fluid clearfix">
      <div className="header-inner d-flex align-items-center">
        <div>
          <div>
            <Link href="/">
              <a>
                <img
                  src="https://raw.githubusercontent.com/Alen44141/images/main/remove%20back/bigremoveimage/footer/RemoveBackLogo0.png"
                  alt="Logo"
                  title="Logo"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="nav-outer clearfix">
          {/* Main Menu */}
          <Nav />
          {/* Main Menu End*/}
        </div>
        {/* Menu Button */}
        <div class="col-xl-5 col-lg-6">
          <div class="top-right text-lg-right">
            <ul>
              <li>
                <i class="far fa-phone">
                  </i> <b>Call :</b> 
                  <a href="tel:+7 (925) 336‑69‑69">+7 (925) 336‑69‑69</a>
                  </li>
                  <li>
                    <div class="social-style-one">
<a href="https://chat.whatsapp.com/DJqB9s7p3hi8wMPeS8DJdM"><i class="fab fa-whatsapp"></i></a></div></li></ul></div></div>
      </div>
    </div>
  </div>
  {/*End Header Upper*/}
</header>
  
  // <header className="main-header">

  //   {/*Header-Upper*/}
  //   <div className="header-upper">
  //     <div className="container-fluid clearfix">
  //       <div className="header-inner d-flex align-items-center">
  //         <div >
  //           <div>
  //             <Link href="/">
  //               <a>
  //                 <img
  //                   src="https://raw.githubusercontent.com/Alen44141/images/main/remove%20back/bigremoveimage/footer/RemoveBackLogo0.png"
  //                   alt="Logo"
  //                   title="Logo"
  //                 />
  //               </a>
  //             </Link>
  //           </div>
  //         </div>
  //         <div className="nav-outer clearfix">
  //           {/* Main Menu */}
  //           <Nav />
  //           {/* Main Menu End*/}
  //         </div>
  //         {/* Menu Button */}
  //         <div className="menu-icons">
  //           {/* Nav Search */}
  //           <div className="nav-search py-15">
  //             <SearchBtn />
  //           </div>
  //           <button className="cart">
  //             <i className="far fa-shopping-basket" />
  //             <span>5</span>
  //           </button>
  //           <button className="user">
  //             <i className="far fa-user-circle" />
  //           </button>
  //           <Link href="/contact">
  //             <a className="theme-btn">
  //               Consultations <i className="fas fa-angle-double-right" />
  //             </a>
  //           </Link>
  //           {/* menu sidbar */}
  //           <div className="menu-sidebar" onClick={() => sidebarToggle()}>
  //             <button>
  //               <i className="far fa-ellipsis-h" />
  //               <i className="far fa-ellipsis-h" />
  //               <i className="far fa-ellipsis-h" />
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   {/*End Header Upper*/}
  // </header>
);
const Header1 = () => (
  <header className="main-header menu-absolute">
    <div className="header-top-wrap bg-light-green text-white py-10">
      <div className="container-fluid">
        <div className="header-top">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="top-left">
                <ul>
                  <li>
                    <i className="far fa-envelope" /> <b>Email Us :</b>{" "}
                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                  </li>
                  <li>
                    <i className="far fa-clock" /> <b>Working Hours :</b> Monday
                    - Friday, 08 am - 05 pm
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="top-right text-lg-right">
                <ul>
                  <li>
                    <i className="far fa-phone" /> <b>Call :</b>{" "}
                    <a href="tel:+7 (925) 336‑69‑69">+7 (925) 336‑69‑69</a>
                  </li>
                  <li>
                    <div className="social-style-one">
                      {/* <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a> */}
                      <a href="https://chat.whatsapp.com/DJqB9s7p3hi8wMPeS8DJdM">
                        <i className="fab fa-whatsapp" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Header-Upper*/}
    <div className="header-upper">
      <div className="container-fluid clearfix">
        <div className="header-inner d-flex align-items-center">
          <div className="logo-outer">
            <div className="logo">
              <Link href="/">
                <a>
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            {/* Main Menu */}
            <Nav />
            {/* Main Menu End*/}
          </div>
          {/* Menu Button */}
          <div className="menu-icons">
            {/* Nav Search */}
            <div className="nav-search py-15">
              <SearchBtn />
            </div>
            <button className="cart">
              <i className="far fa-shopping-basket" />
              <span>5</span>
            </button>
            <button className="user">
              <i className="far fa-user-circle" />
            </button>
            <Link href="/contact">
              <a className="theme-btn">
                Consultations <i className="fas fa-angle-double-right" />
              </a>
            </Link>
            {/* menu sidbar */}
            <div className="menu-sidebar" onClick={() => sidebarToggle()}>
              <button>
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Header Upper*/}
  </header>
);
const Header2 = () => (
  <header className="main-header header-two">
    <div className="header-top-wrap">
      <div className="container">
        <div className="header-top bg-light-green text-white py-10">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="top-left">
                <ul>
                  <li>
                    <i className="far fa-envelope" /> <b>Email Us :</b>{" "}
                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="top-right text-lg-right">
                <ul>
                  <li>
                    <i className="far fa-phone" /> <b>Call :</b>{" "}
                    <a href="tel:+7 (925) 336‑69‑69">+7 (925) 336‑69‑69</a>
                  </li>
                  <li>
                    <div className="social-style-one">
                      <a href="https://chat.whatsapp.com/DJqB9s7p3hi8wMPeS8DJdM">
                        <i className="fab fa-whatsapp" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Header-Upper*/}
    <div className="header-upper">
      <div className="container rel clearfix">
        <div className="header-inner d-flex align-items-center">
          <div className="logo-outer">
            <div className="logo">
              <Link href="/">
                <a>
                  <img
                    src="https://raw.githubusercontent.com/Alen44141/images/main/remove%20back/bigremoveimage/footer/RemoveBackLogo0.png"
                    alt="Logo"
                    title="Logo"
                  />
                  <img
                    src="https://raw.githubusercontent.com/Alen44141/images/main/remove%20back/bigremoveimage/footer/RemoveBackLogo0.png"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            {/* Main Menu */}
            <Nav />
            {/* Main Menu End*/}
          </div>
          {/* Menu Button */}
          <div className="menu-icons">
            {/* Nav Search */}
            <div className="nav-search py-15">
              <button className="far fa-search" />
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                className="hide"
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="searchbox"
                  required=""
                />
                <button type="submit" className="searchbutton far fa-search" />
              </form>
            </div>
            <button className="cart">
              <i className="far fa-shopping-basket" />
            </button>
            {/* menu sidbar */}
            <div className="menu-sidebar" onClick={() => sidebarToggle()}>
              <button>
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Header Upper*/}
  </header>
);
const Header3 = () => (
  // <header className="main-header header-three menu-absolute">
  //   <div >

  //   </div>

  //   {/*Header-Upper*/}
  //   <div className="header-upper px-0">
  //     <div className="container-fluid clearfix">
  //       <div className="header-inner d-flex align-items-center">
  //         <div className="nav-outer clearfix">
  //           {/* Main Menu */}
  //           <Nav />
  //           {/* Main Menu End*/}
  //         </div>
  //         {/* menu sidbar */}
  //         <div className="menu-sidebar" onClick={() => sidebarToggle()}>
  //           <button>
  //             <i className="far fa-ellipsis-h" />
  //             <i className="far fa-ellipsis-h" />
  //             <i className="far fa-ellipsis-h" />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   {/*End Header Upper*/}
  // </header>
    <header className="main-header menu-absolute">
    {/*Header-Upper*/}
    <div className="header-upper">
      <div className="container-fluid clearfix">
        <div className="header-inner d-flex align-items-center">
          <div>
            <div>
              <Link href="/">
                <a>
                  <img
                    src="https://raw.githubusercontent.com/Alen44141/images/main/remove%20back/bigremoveimage/footer/RemoveBackLogo0.png"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            {/* Main Menu */}
            <Nav />
            {/* Main Menu End*/}
          </div>
          {/* Menu Button */}
          <div class="col-xl-5 col-lg-6"><div class="top-right text-lg-right"><ul><li><i class="far fa-phone"></i> <b>Call :</b> <a href="tel:+7 (925) 336‑69‑69">+7 (925) 336‑69‑69</a></li><li><div class="social-style-one"><a href="https://chat.whatsapp.com/DJqB9s7p3hi8wMPeS8DJdM"><i class="fab fa-whatsapp"></i></a></div></li></ul></div></div>
        </div>
      </div>
    </div> 
    {/*End Header Upper*/}
  </header>
);
