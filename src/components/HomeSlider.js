import Link from "next/link";
import { Fragment } from "react";
import munfirmSlider from "../munfirmSlider";
export const HomeSlider1 = () => {
  const { active, setActive } = munfirmSlider();
  return (
    <Fragment>
      <button
        className="slider-prev slick-arrow"
        onClick={() => setActive(active == 1 ? 2 : 1)}
      >
        <i className="fas fa-chevron-left" />
      </button>

      <div
        className={`slider-single-item slide-one ${
          active == 1 ? "slick-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-content">
                <h1>Продукты</h1>
                <h6>
                Добро пожаловать в наш магазин с огромным выбором продуктов! На нашем сайте вы сможете ознакомиться с нашими продуктами, а также быть в курсе новостей и акций, которые часто проводятся у нас.
</h6>
{/* Магазин, предлагающий богатый ассортимент фруктов, овощей, специй, орехов и многих других продуктов, рад приветствовать вас! На нашем сайте вы сможете ознакомиться с нашими продуктами, а также быть в курсе новостей и акций, которые часто проводятся у нас. */}
                <div className="slider-btns mt-30">
                  <Link href="https://chat.whatsapp.com/LurBKNzROHV4roHEXiWtHF">
                    <a className="theme-btn style-two">
                      Заказать <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  {/* <Link href="/about">
                    <a className="theme-btn style-two">
                      акции <i className="fas fa-angle-double-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-images">
                <img
                  className="image"
                  // src="https://raw.githubusercontent.com/Alen44141/images/main/remove%20back/bigremoveimage/2.png"
                  src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/granat.png"
                  alt="Slider"
                />

              </div>
            </div>
          </div>
        </div>
        <div className="slide-shapes">
          <img
            className="two-leaf"
            // src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/photo_1_2024-01-18_23-15-09.png"
            src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/avocado/photo_3_2024-01-20_17-45-42.png"

            alt="Leaf"
          />
          <img
            className="half-leaf"
            // src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/photo_10_2024-01-18_23-15-09.png"
            src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/avocado/photo_4_2024-01-20_17-45-42.png"
            alt="Leaf"
          />
          {/* <img
            className="leaf-one"
            src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/photo_2_2024-01-18_23-15-09.png"
            alt="Leaf"
          /> */}
          <img
            className="leaf-two"
            // src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/photo_3_2024-01-18_23-15-09.png"
            src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/photo_3_2024-01-18_23-15-09.png"
            alt="Leaf"
          />
        </div>
      </div>
      <div
        className={`slider-single-item slide-two ${
          active == 2 ? "slick-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-images">
                <img
                  className="image"
                  // src="https://raw.githubusercontent.com/Alen44141/images/main/remove%20back/bigremoveimage/3.png"
                  src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/mandarin.png"
                  alt="Slider"
                />

              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-content">
                <h1>Продукты</h1>
                <h6>Добро пожаловать в наш магазин с огромным выбором продуктов! На нашем сайте вы сможете ознакомиться с нашими продуктами, а также быть в курсе новостей и акций, которые часто проводятся у нас.
</h6>
                <div className="slider-btns mt-30">
                  <Link href="https://chat.whatsapp.com/LurBKNzROHV4roHEXiWtHF">
                    <a className="theme-btn style-two">
                      Заказать <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  {/* <Link href="/about">
                    <a className="theme-btn style-two">
                      Акции <i className="fas fa-angle-double-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="news-shapes">
          <img
            className="two-leaf"
            src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/avocado/photo_5_2024-01-20_17-45-42.png"
            alt="Leaf"
          />
          <img
            className="leaf-left1"
            src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/avocado/photo_3_2024-01-20_17-45-42.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/avocado/photo_4_2024-01-20_17-45-42.png"
            alt="Leaf"
          />
          <img
            className="leaf-three"
            src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/avocado/photo_2_2024-01-20_17-45-42.png"
            alt="Leaf"
          />
        </div>
      </div>
      <button
        className="slider-next slick-arrow"
        onClick={() => setActive(active == 2 ? 1 : 2)}
      >
        <i className="fas fa-chevron-right" />
      </button>
    </Fragment>
  );
};
export const HomeSlider2 = () => {
  const { active, setActive } = munfirmSlider();
  return (
    <Fragment>
      <button
        className="slider-prev slick-arrow"
        onClick={() => setActive(active == 1 ? 2 : 1)}
      >
        <i className="fas fa-chevron-left" />
      </button>

      <div
        className={`slider-single-item style-two ${
          active == 1 ? "slick-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-content">
                <h1>Organic Foods &amp; Vegetables</h1>
                <div className="slider-btns mt-30">
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="theme-btn style-two">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-images">
                <img
                  className="image"
                  src="assets/images/slider/slider-two1.png"
                  alt="Slider"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`slider-single-item style-two ${
          active == 2 ? "slick-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-content">
                <h1>Organic Foods &amp; Vegetables</h1>
                <div className="slider-btns mt-30">
                  <Link href="/about">
                    <a className="theme-btn style-two">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-images">
                <img
                  className="image"
                  src="assets/images/slider/slider-two3.png"
                  alt="Slider"
                />
                <img
                  className="offer"
                  src="assets/images/shapes/organic.png"
                  alt="Organic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="slider-next slick-arrow"
        onClick={() => setActive(active == 2 ? 1 : 2)}
      >
        <i className="fas fa-chevron-right" />
      </button>
    </Fragment>
  );
};
export const HomeSlider3 = () => {
  const { active, setActive } = munfirmSlider();
  return (
    <Fragment>
      <button
        className="slider-prev slick-arrow"
        onClick={() => setActive(active == 1 ? 2 : 1)}
      >
        <i className="fas fa-chevron-left" />
      </button>

      <div
        className={`slider-single-item style-three slide-one ${
          active == 1 ? "slick-active" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="slider-content">
                <h1>Organic Food &amp; Vegetables</h1>
                <p>
                  On the other hand we denounce with righteou indignation and
                  dislike men who are so beguiled and demoralized
                </p>
                <div className="slider-btns mt-20">
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="theme-btn style-three">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="slider-images">
                <img
                  className="image"
                  src="assets/images/slider/slider-three-1.png"
                  alt="Slider"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`slider-single-item style-three slide-two ${
          active == 2 ? "slick-active" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-9">
              <div className="slider-images">
                <img
                  className="image"
                  src="assets/images/slider/slider-three-1.png"
                  alt="Slider"
                />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="slider-content">
                <h1>Organic Food &amp; Vegetables</h1>
                <p>
                  On the other hand we denounce with righteou indignation and
                  dislike men who are so beguiled and demoralized
                </p>
                <div className="slider-btns mt-20">
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="theme-btn style-three">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="slider-next slick-arrow"
        onClick={() => setActive(active == 2 ? 1 : 2)}
      >
        <i className="fas fa-chevron-right" />
      </button>
    </Fragment>
  );
};
