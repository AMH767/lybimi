import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import { productActiveTwo } from "../src/sliderProps";
const ProductDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Сделать Заказ"} />
      <section className="contact-form-area rel z-1 pt-100 rpt-70 pb-130 rpb-100">
        <div className="container">
          <div className="row align-items-center">
          <div className="col-lg-6">
              <div className="contact-right-image wow fadeInRight delay-0-4s">
                <img
                  src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/korica.png"
                  alt="Contact From"
                />
                {/* <img
                  className="bg"
                  src="assets/images/contact/contact-right-bg.png"
                  alt="Contact From BG"
                /> */}
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="product-details-content mb-30 wow fadeInRight delay-0-2s">
                <div className="off-ratting mb-15">
                  {/* <span className="off">20 Off</span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div> */}
                </div>
                <div className="section-title mb-20">
                  <h2>Карица</h2>
                </div>
                <p>
                Карица - это ароматная специя, получаемая из коры каричного дерева. Она популярна в магазинах специй благодаря своему уникальному вкусу и аромату.
                Карица обладает терпким и теплым вкусом с легкой сладостью, и широко используется в кулинарии для добавления неповторимого оттенка в различные блюда,
                напитки и выпечку. Ее также ценят за ее полезные свойства, такие как антиоксидантное и противовоспалительное действие.
                </p>
                <span className="price mb-20">1200 / кг</span>
                <hr />
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="add-to-cart mt-40 mb-40"
                >
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    max={20}
                    required=""
                  />
                  <button type="submit" className="theme-btn">
                  Добавить в карзину <i className="fas fa-angle-double-right" />
                  </button>
                </form>
                <hr />
                <ul className="category-tags pt-10">
                  <li>
                    <b>Категория</b>
                    <span>:</span>
                    <a href="#">Specii</a>
                  </li>
                  <li>
                    <b>Тег</b>
                    <span>:</span>
                    <a href="#">Specii</a>
                  </li>
                </ul>
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
          {/* <img
            className="shape"
            src="assets/images/shapes/contact-shape.png"
            alt="Shape"
          /> */}
          <img
            className="two-leaf"
            src="assets/images/shapes/two-lear.png"
            alt="Leaf"
          />
        </div>
      </section>
      <section className="product-details-area ">
        <div className="container">
          {/* <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="product-preview-images rmb-55 wow fadeInLeft delay-0-2s">
                <a href="assets/images/products/preview1.png">
                  <img
                    src="assets/images/products/preview1.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview2.png">
                  <img
                    src="assets/images/products/preview2.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview3.png">
                  <img
                    src="assets/images/products/preview3.png"
                    alt="Preview"
                  />
                </a>
                <a href="assets/images/products/preview4.png">
                  <img
                    src="assets/images/products/preview4.png"
                    alt="Preview"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="product-details-content mb-30 wow fadeInRight delay-0-2s">
                <div className="off-ratting mb-15">
                  <span className="off">20 Off</span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <div className="section-title mb-20">
                  <h2>Organic Vegetable</h2>
                </div>
                <p>
                  Sorem ipsum dolor sit amet consectetur adipiscing elit do
                  eiusmod tempor incididunt ut labore et dolore magna aliquauis
                  ipsum suspendisse ultrices gravida
                </p>
                <span className="price mb-20">55.96</span>
                <hr />
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="add-to-cart mt-40 mb-40"
                >
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    max={20}
                    required=""
                  />
                  <button type="submit" className="theme-btn">
                    Добавить в карзину <i className="fas fa-angle-double-right" />
                  </button>
                </form>
                <hr />
                <ul className="category-tags pt-10">
                  <li>
                    <b>Category</b>
                    <span>:</span>
                    <a href="#">Green</a>
                    <a href="#">Vegetables</a>
                  </li>
                  <li>
                    <b>Tags</b>
                    <span>:</span>
                    <a href="#">Organic</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <Tab.Container defaultActiveKey={"details"}>
            <Nav className="nav nav-tabs product-information-tab pt-35 mb-25">
              <li>
                <Nav.Link
                  eventKey={"details"}
                  href="#details"
                  data-toggle="tab"
                >
                  Описание
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  eventKey={"information"}
                  href="#information"
                  data-toggle="tab"
                >
                  С чем едят
                </Nav.Link>
              </li>
              {/* <li>
                <Nav.Link eventKey={"review"} href="#review" data-toggle="tab">
                  Review (05)
                </Nav.Link>
              </li> */}
            </Nav>
            <Tab.Content className="tab-content wow fadeInUp delay-0-2s">
              <Tab.Pane className="tab-pane" eventKey="details">
                <p>
                Карица - удивительный товар, который сразу привлекает внимание своей элегантностью и прекрасным дизайном.
                 Изготовленная из высококачественных материалов, она обещает долговечность и надежность в использовании.
                  Уникальная функция регулировки высоты и угла наклона позволяет настроить ее по своим потребностям,
                   обеспечивая комфорт во время работы или отдыха. Удобные подлокотники и мягкий, эргономичный сиденье
                    сделают ваше время сидя приятным и безопасным. Быстрая и простая сборка, а также компактные размеры
                     делают карицу идеальным выбором для дома, офиса или любого другого пространства.
                </p>
                {/* <ul className="list-style-one">
                  <li>The Complete Guide To Switching From HTTP To HTTPS</li>
                  <li>
                    Ultimate Digital Clean-Up Checklist: Are You Prepared For
                    The New Year?
                  </li>
                  <li>
                    How To Roll Out New Features Without Hurting Loyal Users
                  </li>
                </ul> */}
              </Tab.Pane>
              <Tab.Pane className="tab-pane" eventKey="information">
                <p>
                Карица - универсальный ингредиент, который прекрасно сочетается с различными блюдами.
                Вот 5 вариантов, где карица выступает великолепным дополнением:
                </p>
                <ul className="list-style-one mt-25 mb-25">
                  <li>Салат Карица с авокадо и манго - сочная и ароматная карица в сочетании с сладким манго и кремовым авокадо создают яркий и свежий вкус.</li>
                  <li>Карица с инжиром и грушей - сочное мясо карицы в сочетании с сладким инжиром и сочной грушей создает интересный пикантный вкус.</li>
                  <li>Карица в ореховой корочке - хрустящая корочка из орехов и зеленых трав прекрасно сочетается сочной карицей, создавая богатый и насыщенный вкус.</li>
                  <li>Карица с тыквой и клюквой - сочное мясо карицы в сочетании с нежной тыквой и кисло-сладкой клюквой создает гармоничный сочный вкус.</li>
                  <li>Карица на гриле с цитрусовым маринадом - свежий и ароматный цитрусовый маринад придает сочной карице яркий и освежающий вкус.</li>
                  {/* <li>Smart Alarming System</li>
                  <li>Power system 12 volts (without adapter)</li> */}
                </ul>
              </Tab.Pane>
              {/* <Tab.Pane className="tab-pane" eventKey="review">
                <ul className="comment-list">
                  <li>
                    <div className="comment-body">
                      <div className="author-thumb">
                        <img
                          src="assets/images/products/review-author1.jpg"
                          alt="Author"
                        />
                      </div>
                      <div className="comment-content">
                        <div className="name-date">
                          <h6>John F. Medina</h6>
                          <span className="comment-date">25 Feb 2022</span>
                          <div className="ratting">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <p>
                          Quis autem vel eum iure reprehenderit quin voluptate
                          velit esseeso quam nihile molestiae consequatur
                          veillum quolore
                        </p>
                        <a href="#" className="reply-link">
                          Reply <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    <ul className="children">
                      <li>
                        <div className="comment-body">
                          <div className="author-thumb">
                            <img
                              src="assets/images/products/review-author2.jpg"
                              alt="Author"
                            />
                          </div>
                          <div className="comment-content">
                            <div className="name-date">
                              <h6>Somalia D. Silva</h6>
                              <span className="comment-date">25 Feb 2022</span>
                              <div className="ratting">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                            </div>
                            <p>
                              Quis autem vel eum iure reprehenderit quin
                              voluptate velit esseeso quam nihile molestiae
                              consequatur veillum quolore
                            </p>
                            <a href="#" className="reply-link">
                              Reply{" "}
                              <i className="fas fa-long-arrow-alt-right" />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="comment-body">
                      <div className="author-thumb">
                        <img
                          src="assets/images/products/review-author3.jpg"
                          alt="Author"
                        />
                      </div>
                      <div className="comment-content">
                        <div className="name-date">
                          <h6>Roger A. Torrence</h6>
                          <span className="comment-date">25 Feb 2022</span>
                          <div className="ratting">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <p>
                          Quis autem vel eum iure reprehenderit quin voluptate
                          velit esseeso quam nihile molestiae consequatur
                          veillum quolore
                        </p>
                        <a href="#" className="reply-link">
                          Reply <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </Tab.Pane> */}
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/* Product Details End */}
      {/* Revidew Form Area Start */}
      {/* <div className="review-form-area pt-65">
        <div className="container">
          <form
            onSubmit={(e) => e.preventDefault()}
            id="review-form"
            className="review-form wow fadeInUp delay-0-2s"
            name="comment-form"
            action="#"
            method="post"
          >
            <div className="section-title mb-15">
              <h3>Leave a Comments</h3>
            </div>
            <div className="ratting mb-40">
              <span>Your Rating</span>
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Full Name"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="number"
                    name="number"
                    className="form-control"
                    defaultValue=""
                    placeholder="Phone Number"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    defaultValue=""
                    placeholder="Email Address"
                    required=""
                  />
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
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn">
                    Send Reviews
                    <i className="fas fa-angle-double-right" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div> */}
      {/* Revidew Form Area End */}
      {/* Related Products Start */}
      <section className="related-product rel z-1 pt-125 rpt-95 pb-130 rpb-100">
        <div className="container">
          <div className="section-title text-center mb-60">
            <h3>Специи</h3>
          </div>
          <Slider {...productActiveTwo} className="product-active-two">
            <div className="product-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/badyan.png" alt="Product" />
              </div>
              <div className="content">
                {/* <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div> */}
                <h5>
                  <Link href="/product-details">Бадьян</Link>
                </h5>
                <span className="price">
                  <span>180 / 100гр</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-4s">
              {/* <span className="offer">20 Off</span> */}
              <div className="image">
                <img src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/muskatni_orex.png" alt="Product" />
              </div>
              <div className="content">

                <h5>
                  <Link href="/product-details">Мускатный орех</Link>
                </h5>
                <span className="price">
                  {/* <del>25</del> */}
                  <span>500 / кг</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/imbir.png" alt="Product" />
              </div>
              <div className="content">

                <h5>
                  <Link href="/product-details">Имбирь молотый</Link>
                </h5>
                <span className="price">
                  {/* <del>55</del> */}
                  <span>450</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-8s">
              <span className="offer bg-red">Распродажа</span>
              <div className="image">
                <img src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/karica_moloti.png" alt="Product" />
              </div>
              <div className="content">

                <h5>
                  <Link href="/product-details">Карица молотый</Link>
                </h5>
                <span className="price">
                  <span>45 / 100гр</span>
                </span>
              </div>
            </div>
            <div className="product-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/shafran.png" alt="Product" />
              </div>
              <div className="content">
                <h5>
                  <Link href="/product-details">Шафран молотый</Link>
                </h5>
                <span className="price">
                  {/* <del>55</del> */}
                  <span>45 / 100гр</span>
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </Layout>
  );
};
export default ProductDetails;
