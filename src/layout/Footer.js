import Link from "next/link";
import Counter from "../components/Counter";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter />;
    case 3:
      return <Footer3 />;

    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const ScrollTopBtn = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
};

const DefaultFooter = () => (
  <footer className="main-footer bg-image text-white">
    <div className="container">
      <div className=" py-50 mb-45">
      </div>
      <div className="row justify-content-center">
        {/* <div className="col-lg-4 col-md-6 order-md-3">
          <div className="footer-widget about-widget text-center">
            <div className="footer-logo mb-30">
              <Link href="/">
                <a>
                  <img src="assets/images/logos/logo.png" alt="Logo" />
                </a>
              </Link>
            </div>
            <p>
              Sit amet consectetur adipiscing elit sed eiusmod tempor incididunt
              ut labore et dolore magna aliqua. quis ipsum suspendisse ultrices
              gravida.
            </p>
            <div className="social-style-two pt-10">
              <Link href="/contact">
                <a>
                  <i className="fab fa-facebook-f" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-twitter" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-linkedin-in" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-youtube" />
                </a>
              </Link>
            </div>
          </div>
        </div> */}
        <div className="col-lg-4 col-md-6 order-md-1">
          <div className="footer-widget menu-widget two-column">
            <h4 className="footer-title">Данные о сайте</h4>
            <ul>
              <li>
                <Link href="/contact">
                  <a>О нас</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">Наши контакты</Link>
              </li>
              {/* <li>
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/services">Elements</Link>
              </li> */}
              <li>
                <Link href="https://github.com/AMH767/fruiit/blob/main2/LICENSE">
                  <a>Лицензия</a>
                </Link>
              </li>
              <li>
                <Link href="https://chat.whatsapp.com/DJqB9s7p3hi8wMPeS8DJdM">
                  <a>Whtsapp группа</a>
                </Link>
              </li>
              {/* <li>
                <Link href="/farmers">
                  <a>Meet Farmers</a>
                </Link>
              </li>
              <li>
                <Link href="/service-details">
                  <a>Technology</a>
                </Link>
              </li>
              <li>
                <Link href="/blog-grid">
                  <a>Latest News</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/service-details">
                  <a>Vegetables</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">Setting &amp; Privacy</Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-2">
          <div className="footer-widget contact-widget">
            <h4 className="footer-title">Контактные данные</h4>
            <ul>
              <li>
                <i className="far fa-phone" />
                <a href="tel:+7 (925) 336‑69‑69">+7 (925) 336‑69‑69</a>

              </li>
              <li>
                <i className="far fa-phone" />
                <a href="tel:+7 (925) 375‑03‑97">+7 (925) 375‑03‑97</a>

              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-25 pb-10">
        <p>Сайт еще находиться на стадии разработки</p>
        <ul className="footer-menu">
          <li>
            <Link href=" https://wa.me/79255354407">Связь с поддержкой</Link>
          </li>
          <li>
            <Link href="https://wa.me/79255354407">
              <a>Вопросы</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/contact">Оплата</Link>
          </li> */}
        </ul>
        {/* Scroll Top Button */}
        <ScrollTopBtn />
      </div>
    </div>

  </footer>
  // <footer className="main-footer bg-green text-white">
  //   <div className="container">
  //     <div className=" py-50 mb-45">
  //     </div>
  //     <div className="row justify-content-center"> 
  //       {/* <div className="col-lg-4 col-md-6 order-md-3">
  //         <div className="footer-widget about-widget text-center">
  //           <div className="footer-logo mb-30">
  //             <Link href="/">
  //               <a>
  //                 <img src="assets/images/logos/logo.png" alt="Logo" />
  //               </a>
  //             </Link>
  //           </div>
  //           <p>
  //             Sit amet consectetur adipiscing elit sed eiusmod tempor incididunt
  //             ut labore et dolore magna aliqua. quis ipsum suspendisse ultrices
  //             gravida.
  //           </p>
  //           <div className="social-style-two pt-10">
  //             <Link href="/contact">
  //               <a>
  //                 <i className="fab fa-facebook-f" />
  //               </a>
  //             </Link>
  //             <Link href="/contact">
  //               <a>
  //                 <i className="fab fa-twitter" />
  //               </a>
  //             </Link>
  //             <Link href="/contact">
  //               <a>
  //                 <i className="fab fa-linkedin-in" />
  //               </a>
  //             </Link>
  //             <Link href="/contact">
  //               <a>
  //                 <i className="fab fa-youtube" />
  //               </a>
  //             </Link>
  //           </div>
  //         </div>
  //       </div> */}
  //       <div className="col-lg-4 col-md-6 order-md-2">
  //         <div className="footer-widget contact-widget">
  //           <h4 className="footer-title">Contact Us</h4>
  //           <p>
  //             Quis autem vel eum reprehenderit voluptate velit esse quamnue{" "}
  //           </p>
  //           <ul>
  //             <li>
  //               <i className="fal fa-map-marker-alt" />
  //               53 Main Street, 2nd Mountain 3rd Floor, New York
  //             </li>
  //             <li>
  //               <i className="far fa-envelope" />
  //               <a href="calto:+012(345)67899">+012 (345) 678 99</a>
  //             </li>
  //             <li>
  //               <i className="far fa-phone" />
  //               <a href="mailto:support@gmail.com">support@gmail.com</a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="col-lg-4 col-md-6 order-md-1">
  //         <div className="footer-widget menu-widget two-column">
  //           <h4 className="footer-title">Quick Links</h4>
  //           <ul>
  //             <li>
  //               <Link href="/about">
  //                 <a>About Us</a>
  //               </Link>
  //             </li>
  //             <li>
  //               <Link href="/contact">Documentation</Link>
  //             </li>
  //             <li>
  //               <Link href="/services">
  //                 <a>Services</a>
  //               </Link>
  //             </li>
  //             <li>
  //               <Link href="/services">Elements</Link>
  //             </li>
  //             <li>
  //               <Link href="/portfolio-grid">
  //                 <a>Our Projects</a>
  //               </Link>
  //             </li>
  //             <li>
  //               <Link href="/shop-grid">
  //                 <a>Best Products</a>
  //               </Link>
  //             </li>
  //             <li>
  //               <Link href="/farmers">
  //                 <a>Meet Farmers</a>
  //               </Link>
  //             </li>
  //             <li>
  //               <Link href="/service-details">
  //                 <a>Technology</a>
  //               </Link>
  //             </li>
  //             <li>
  //               <Link href="/blog-grid">
  //                 <a>Latest News</a>
  //               </Link>
  //             </li>
  //             <li>
  //               <Link href="/contact">Contact Us</Link>
  //             </li>
  //             <li>
  //               <Link href="/service-details">
  //                 <a>Vegetables</a>
  //               </Link>
  //             </li>
  //             <li>
  //               <Link href="/contact">Setting &amp; Privacy</Link>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>

  //     </div>
  //     <div className="copyright-area pt-25 pb-10">
  //       <p>Сайт находиться на второй стадии разработки</p>
  //       <ul className="footer-menu">
  //         <li>
  //           <Link href="/contact">Setting &amp; Privacy</Link>
  //         </li>
  //         <li>
  //           <Link href="/faqs">
  //             <a>Faqs</a>
  //           </Link>
  //         </li>
  //         <li>
  //           <Link href="/contact">Payments</Link>
  //         </li>
  //       </ul>
  //       {/* Scroll Top Button */}
  //       <ScrollTopBtn />
  //     </div>
  //   </div>
  //   <div className="footer-shapes">
  //     <img
  //       className="footer-bg"
  //       src="assets/images/background/footer-bg-shape.png"
  //       alt="Shape"
  //     />
  //     <img
  //       className="shape-one"
  //       src="assets/images/shapes/footer1.png"
  //       alt="Shape"
  //     />
  //     <img
  //       className="shape-two"
  //       src="assets/images/shapes/footer2.png"
  //       alt="Shape"
  //     />
  //     <img
  //       className="shape-three"
  //       src="assets/images/shapes/footer3.png"
  //       alt="Shape"
  //     />
  //     <img
  //       className="shape-four"
  //       src="assets/images/shapes/footer4.png"
  //       alt="Shape"
  //     />
  //   </div>
  // </footer>
);
const Footer3 = () => (
  <footer className="main-footer bg-image text-white">
    <div className="container">
      <div className=" py-50 mb-45">
      </div>
      <div className="row justify-content-center">
        {/* <div className="col-lg-4 col-md-6 order-md-3">
          <div className="footer-widget about-widget text-center">
            <div className="footer-logo mb-30">
              <Link href="/">
                <a>
                  <img src="assets/images/logos/logo.png" alt="Logo" />
                </a>
              </Link>
            </div>
            <p>
              Sit amet consectetur adipiscing elit sed eiusmod tempor incididunt
              ut labore et dolore magna aliqua. quis ipsum suspendisse ultrices
              gravida.
            </p>
            <div className="social-style-two pt-10">
              <Link href="/contact">
                <a>
                  <i className="fab fa-facebook-f" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-twitter" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-linkedin-in" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-youtube" />
                </a>
              </Link>
            </div>
          </div>
        </div> */}
        <div className="col-lg-4 col-md-6 order-md-1">
          <div className="footer-widget menu-widget two-column">
            <h4 className="footer-title">Данные о сайте</h4>
            <ul>
              <li>
                <Link href="/contact">
                  <a>О нас</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">Наши контакты</Link>
              </li>
              {/* <li>
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/services">Elements</Link>
              </li> */}
              <li>
                <Link href="https://github.com/AMH767/fruiit/blob/main2/LICENSE">
                  <a>Лицензия</a>
                </Link>
              </li>
              <li>
                <Link href="https://chat.whatsapp.com/DJqB9s7p3hi8wMPeS8DJdM">
                  <a>Whtsapp группа</a>
                </Link>
              </li>
              {/* <li>
                <Link href="/farmers">
                  <a>Meet Farmers</a>
                </Link>
              </li>
              <li>
                <Link href="/service-details">
                  <a>Technology</a>
                </Link>
              </li>
              <li>
                <Link href="/blog-grid">
                  <a>Latest News</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/service-details">
                  <a>Vegetables</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">Setting &amp; Privacy</Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-2">
          <div className="footer-widget contact-widget">
            <h4 className="footer-title">Контактные данные</h4>
            <ul>
              <li>
                <i className="far fa-phone" />
                <a href="tel:+7 (925) 336‑69‑69">+7 (925) 336‑69‑69</a>

              </li>
              <li>
                <i className="far fa-phone" />
                <a href="tel:+7 (925) 375‑03‑97">+7 (925) 375‑03‑97</a>

              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-25 pb-10">
        <p>Сайт еще находиться на стадии разработки</p>
        <ul className="footer-menu">
          <li>
            <Link href=" https://wa.me/79255354407">Связь с поддержкой</Link>
          </li>
          <li>
            <Link href="https://wa.me/79255354407">
              <a>Вопросы</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/contact">Оплата</Link>
          </li> */}
        </ul>
        {/* Scroll Top Button */}
        <ScrollTopBtn />
      </div>
    </div>

  </footer>
);
