import Link from "next/link";
import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
import Slider from "react-slick";
import { HomeSlider1 } from "../src/components/HomeSlider";
import { HomeSlider3 } from "../src/components/HomeSlider";
import { clientLogo } from "../src/sliderProps";
import PhotoGallery from "../src/components/slider/PhotoGallery";
"use strict"
//==========================================
const TELEGRAM_BOT_TOKEN = '6402138997:AAGGhD-hNel-4YvUNTp4fS1_jemODawIJPY';
const TELEGRAM_CHAT_ID = '@zakazi1234';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`


async function sendEmailTelegram(event) {
    event.preventDefault();

    const form = event.target;
    const formBtn = document.querySelector('.form__submit-button button')
    const formSendResult = document.querySelector('.form__send-result')
    formSendResult.textContent = '';


    const { name, email, phone, message } = Object.fromEntries(new FormData(form).entries());

    const text = `Заявка от ${name}!\nEmail: ${email}\nТелефон: ${phone}\nПасспортные данные: ${message}`;


    try {
        formBtn.textContent = 'Loading...';

        const response = await fetch(API, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
            })
        })

        if (response.ok) {
            formSendResult.textContent = 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.';
            form.reset()
        } else {
            throw new Error(response.statusText);
        }

    } catch (error) {
        console.error(error);
        formSendResult.textContent = 'Анкета не отправлена! Попробуйте позже.';
        formSendResult.style.color = 'red';

    } finally {
        formBtn.textContent = 'Отправить';
    }
}
const TrendyProducts = dynamic(
  () => import("../src/components/istotope/TrendyProducts"),
  {
    ssr: false,
  }
);
const PopularProducts = dynamic(
  () => import("../src/components/istotope/PopularProducts"),
  {
    ssr: false,
  }
);
const MunfimCountdown = dynamic(
  () => import("../src/components/MunfimCountdown"),
  {
    ssr: false,
  }
);

const Index3 = () => {
  return (
    <Layout header={3} footer={3}>
      <section className="slider-section bg-lighter">
        <div className="main-slider-active">
          <HomeSlider1 />
        </div>
        <img
          className="bg-shape"
          src="assets/images/slider/slider-bg-shape.png"
          alt="Shape"
        />
      </section>
      {/* Slider Section End */}
      {/* Feature Area Start */}
      <div><br></br><br></br><br></br></div>

      {/* Feature Area End */}
      {/* Offer Banners Start */}
      {/* <section className="offer-banners-two pb-20">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="offer-banner-item style-two wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage:
                    "url(assets/images/offers/offer-banner-bg4.jpg)",
                }}
              >
                <div className="content mb-0 ml-auto">
                  <span className="sub-title">100% Fresh</span>
                  <h3>Vegetables</h3>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-three">
                      Купить <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="offer-banner-item style-two wow fadeInUp delay-0-4s"
                style={{
                  backgroundImage:
                    "url(assets/images/offers/offer-banner-bg5.jpg)",
                }}
              >
                <div className="content mb-0">
                  <span className="sub-title">25% Off</span>
                  <h3>Fast Delivery</h3>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-three">
                      Купить <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="offer-banner-item style-two wow fadeInUp delay-0-4s"
                style={{
                  backgroundImage:
                    "url(assets/images/offers/offer-banner-bg6.jpg)",
                }}
              >
                <div className="content mb-0">
                  <span className="sub-title">100% Fresh</span>
                  <h3>Organic Fruits</h3>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-three">
                      Купить <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Offer Banners End */}
      {/* Product Category Area Start */}
      <section className="product-category-area pb-30">
        <div className="container-fluid">
          <div className="product-category-inner">
            <div className="row justify-content-center">
              {/* <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/PhotoOtdelRemoveBack/ovochi_i_frukti.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Овощи и фрукты</Link>
                    </h4>
                  </div>
                </div>
              </div> */}




              {/* ОТДЕЛ СОКОВ */}




                            {/* <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/AMH767/image/main/rem2.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/shop-soki">Отдел Соков</Link>
                    </h4>
                  </div>
                </div>
              </div> */}



              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-3s">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/PhotoOtdelRemoveBack/pryanosti.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/shop-specii">Специи </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/PhotoOtdelRemoveBack/suxofrukti%20HD.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/shop-orexi">Орешки</Link>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-5s">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/AMH767/image/main/3.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/shop-konservi">Консервы</Link>
                    </h4>
                  </div>
                </div>
              </div>


              {/* МЯСНОЙ ОТДЕЛ */}



              {/* <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-5s">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/PhotoOtdelRemoveBack/kolbas.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Мясной Отдел</Link>
                    </h4>
                  </div>
                </div>
              </div> */}







{/* Рыбный Отдел */}


{/* 
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-6s">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/PhotoOtdelRemoveBack/riba.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Рыбный Отдел</Link>
                    </h4>
                  </div>
                </div>
              </div> */}


{/* Молочный Отдел */}





              {/* <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-6s">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/PhotoOtdelRemoveBack/moloko.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Молочный Отдел</Link>
                    </h4>
                  </div>
                </div>
              </div> */}



{/* Солени Отдел */}




              {/* <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-7s">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/PhotoOtdelRemoveBack/soleni.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/product-details">Солени Отдел</Link>
                    </h4>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="about-section-three rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-three-content rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-50">
                  <h2>Способы получения продуктов</h2>
                </div>
                <div className="row">
                  {/* <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-fruits" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          Доставка
                        </Link>
                      </h4>
                    </div>
                  </div> */}
                  <div className="col-md-6">
                    <div className="about-feature-two">
                      <div className="icon">
                        <i className="flaticon-fruits" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          Самовызов
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
                <p>

                Если вы желаете сделать заказ, у нас есть несколько удобных способов связи. Вы можете написать свой заказ в нашей группе, отправить личное сообщение или позвонить
                 по указанному номеру телефона. Мы сделаем все возможное, чтобы помочь вам с вашим заказом и предоставить качественное обслуживание.
						{" "}
                </p>
                <div className="about-btn-number pt-5">
                  <Link href="https://chat.whatsapp.com/DJqB9s7p3hi8wMPeS8DJdM">
                    <a className="theme-btn style-two">
                      Watsapp <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <a href="callto:+7 (925) 336‑69‑69" class="number">
							<i class="far fa-phone"></i>
							<b>+7 (925) 336‑69‑69</b>
						</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right">
              <div>
                <img
                  className="image"
                  src="https://raw.githubusercontent.com/Alen44141/images/main/Default_With_its_clean_lines_and_transparent_material_this_bag_1_5d55df6f-698a-4dae-8cbd-15d4e31b9d3a_0.png"
                  alt="About"
                />
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Product Category Area End */}
      {/* Shop Area Start */}
{/* 
      <section className="shop-area-three rel z-1 py-50">
        <div className="container-fluid">
          <PopularProducts />
        </div>
      </section> */}
      <section className="feature-section pb-100 rpb-70 rel z-1">
        <div className="container">
        <div className="section-title text-center mb-60">
            {/* <span className="sub-title mb-20">Read Article Tips</span> */}
            <h2>Как сделать заказ</h2>
          </div>

          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/task.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>Шаг 1</h4>
                  <p>
                  <h6>Составьте Список</h6>
                  {/* После получения заявки или звонка от вас, наш менеджер поможет вам сформировать заказ */}
                  Составьте Список продуктов и отправьте нам в группу или в личние сообщения
                  </p>
                </div>
                <Link href="https://chat.whatsapp.com/DJqB9s7p3hi8wMPeS8DJdM">
                  <a className="read-more">
                    Перейти<i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>






            <div className="col-xl-4 col-md-6">
              <div className="feature-item color-two wow fadeInUp delay-0-4s">
                <div className="content">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/phone.png"
                      alt="Feature"
                    />
                  </div>
                  <h4>Шаг 2</h4>
                  <p>
                  <h6>Переходите в группу</h6>
                  {/* Для оформления заказа просто позвоните нам по номеру +7 (925) 336-69-69 или отправьте заявку. */}
                       Переходите в нашу группу в ватсаппе и подпишитесь
                  </p>
                </div>
                <Link href="https://chat.whatsapp.com/DJqB9s7p3hi8wMPeS8DJdM">
                  <a className="read-more">
                    Перейти <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item color-three wow fadeInUp delay-0-6s">
                <div className="content">
                  <div className="image">
                    <img
                      src="https://raw.githubusercontent.com/Alen44141/images/main/3D_Animation_Style_generate_a_cargo_courier_car_that_carries_f_3%20(1).png"
                      alt="Feature"
                    />
                  </div>
                  <h4>Шаг 3</h4>
                  <p>
                  <h6>Ждать доставку</h6>
                  {/* Благодаря нашей скорости работы, вы получите выбранный товар сразу и сможете наслаждаться им. */}
                  Ожидайте пока ваш заказ будет готовиться, мы с вами свяжемся когда ваш заказ будет готов
                  </p>
                </div>
                <Link href="/blog-news">
                  <a className="read-more">
                    Новости <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="news-section pt-130 rpt-100 pb-70 rpb-40">
        <div className="container">
          <div className="section-title text-center mb-60">
            {/* <span className="sub-title mb-20">Read Article Tips</span> */}
            <h2>Новостной блог</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="https://raw.githubusercontent.com/AMH767/image/main/news/zucchiolo_p97029.jpg" alt="News" />
                  <span className="date">
                    <b>23</b> Авг
                  </span>
                </div>
                <div className="content">
                  {/* <span className="sub-title">Vegetable</span> */}
                  <h4>
                    <Link href="/blog-details">
                    На рынок Испании вывели новый вид овоща - Цуккиоло
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Читать Дальше <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="https://fruitnews.ru/images/jch-optimize/ng/images_2022_11___62688__p50349.webp" alt="News" />
                  <span className="date">
                    <b>16</b> Ноя
                  </span>
                </div>
                <div className="content">
                  {/* <span className="sub-title">Vegetable</span> */}
                  <h4>
                    <Link href="/blog-potat">
                    НИИП создал новый сорт картофеля с высоким содержанием цинка и железа
                    </Link>
                  </h4>
                  <Link href="/blog-potat">
                    <a className="read-more">
                      Читать Дальше <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="https://fruitnews.ru/images/2023/08/_65274_p53646.jpg" alt="News" />
                  <span className="date">
                    <b>14</b> Авг
                  </span>
                </div>
                <div className="content">
                  {/* <span className="sub-title">Vegetable</span> */}
                  <h4>
                    <Link href="/blog-temp">
                    Метеорологи ожидают рекордного роста мировой температуры в 2023-2027 гг.
                    </Link>
                  </h4>
                  <Link href="/blog-temp">
                    <a className="read-more">
                    Читать Дальше <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
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
            className="leaf-left"
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
      </section>

      {/* Shop Area End */}
      {/* Special Offer Start */}
      {/* <section className="gallery-area-two pt-130 rpt-60">
        <PhotoGallery />
      </section> */}



      {/* Special Offer End */}
      {/* Shop Area Start */}


{/* 
      <section className="shop-area-four rel z-1 pt-80 pb-50">
        <div className="container-fluid">
          <TrendyProducts />
        </div>
      </section> */}




{/*<section className="shop-area-three rel z-1 py-50">
        <div className="container-fluid">
          <PopularProducts />
        </div>
      </section>*/}

      {/* <section className="contact-form-area rel z-1 pt-100 rpt-70 pb-130 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <form
              onsubmit="sendEmailTelegram(event)"
                // onSubmit={(e) => e.preventDefault()}
                id="contactForm"
                className="contact-form rmb-65 wow fadeInLeft delay-0-2s"
                name="contactForm"
                action="assets/php/form-process.php"
                method="post"
              >
                <div className="section-title contact-title mb-55">
                  {/* <span className="sub-title mb-15">Contact With Us</span> */}
                  {/* <h3>Отправить заказ</h3>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        defaultValue=""
                        placeholder="Full Name"
                        required=""
                        data-error="Please enter your name"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        defaultValue=""
                        placeholder="Phone Number"
                        required=""
                        data-error="Please enter your Phone Number"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        defaultValue=""
                        placeholder="Email Address"
                        required=""
                        data-error="Please enter your Adderss"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Write Message"
                        required=""
                        data-error="Please enter your Message"
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn style-two">
                      Отправить
                        <i className="fas fa-angle-double-right" />
                      </button>
                      <div id="msgSubmit" className="hidden" />
                      <div class="form__send-result"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="contact-right-image wow fadeInRight delay-0-4s">
                <img
                  src="assets/images/contact/contact-right.png"
                  alt="Contact From"
                />
                <img
                  className="bg"
                  src="assets/images/contact/contact-right-bg.png"
                  alt="Contact From BG"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-shapes">
          <img
            className="leaf"
            src="assets/images/shapes/leaf-1.png"
            alt="Leaf"
          />
          <img
            className="shape"
            src="assets/images/shapes/contact-shape.png"
            alt="Shape"
          />
          <img
            className="two-leaf"
            src="assets/images/shapes/two-lear.png"
            alt="Leaf"
          />
        </div>
      </section> */} 

      {/* Shop Area End */}
      {/* Client Logo Area Start */}
      {/* <div className="client-logo-area-two text-center mb-80">
        <div className="container-fluid">
          <div className="bg-lighter-two overflow-hidden rel z-1 px-sm-4 px-2">
            <Slider {...clientLogo} className="client-logo-wrap py-60">
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-1.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-2.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-3.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-4.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-5.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-6.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-1.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-2.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-3.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-4.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-5.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="client-logo-item color-hover">
                <Link href="/contact">
                  <a>
                    <img
                      src="assets/images/client-logo/client-logo-two-6.png"
                      alt="Client Logo"
                    />
                  </a>
                </Link>
              </div>
            </Slider>
            <div className="client-logo-shapes">
              <img
                className="shape-one"
                src="assets/images/shapes/cl-shape-two1.png"
                alt="Shape"
              />
              <img
                className="shape-two"
                src="assets/images/shapes/cl-shape-two2.png"
                alt="Shape"
              />
              <img
                className="shape-three"
                src="assets/images/shapes/cl-shape-two3.png"
                alt="Shape"
              />
              <img
                className="shape-four"
                src="assets/images/shapes/cl-shape-two4.png"
                alt="Shape"
              />
              <img
                className="shape-five"
                src="assets/images/shapes/cl-shape-two5.png"
                alt="Shape"
              />
              <img
                className="shape-six"
                src="assets/images/shapes/cl-shape-two6.png"
                alt="Shape"
              />
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export default Index3;
