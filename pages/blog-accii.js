import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
const BlogGrid = () => {
  return (
    <Layout>
      <PageBanner pageName={"Акции"} />
      <section className="news-page-section rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="justify-content-center blog-grid">
          <section className="offer-banners-area">
        <div className="container-fluid">
          <div className="row">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            
                <div className="product-category-item wow fadeInUp delay-0-3s product-item wow  ">
              <span className="offer bg-red">Акция</span>
                  
                  <div className="image1">
                    <img
                      src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/46548567.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="#">100₽ - 140гр</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="product-category-item wow fadeInUp delay-0-4s product-item wow">
              <span className="offer bg-red">Акция</span>

                  <div className="image1">
                    <img
                      src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/46548567.png"
                      alt="Product"
                    />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="#">100₽ - 140гр</Link>
                    </h4>
                  </div>
                </div>
              </div>
              

          </div>
        </div>
      </section>
            {/* <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="https://raw.githubusercontent.com/AMH767/image/main/news/zucchiolo_p97029.jpg" alt="News" />
                  <span className="date">
                  <b>23</b> Авг
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Vegetable</span>
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
            </div> */}
            {/* <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="https://fruitnews.ru/images/jch-optimize/ng/images_2022_11___62688__p50349.webp" alt="News" />
                  <span className="date">
                  <b>16</b> Ноя
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Farming</span>
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
            </div> */}
            {/* <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="https://fruitnews.ru/images/2023/08/_65274_p53646.jpg" alt="News" />
                  <span className="date">
                  <b>14</b> Авг
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Organic Fruits</span>
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
            </div> */}
            {/* <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news4.jpg" alt="News" />
                  <span className="date">
                    <b>06</b> Nov
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Vegetable</span>
                  <h4>
                    <Link href="/blog-details">
                      Unicode UTF8 Character Sets They Sltimate Guide Systems
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/news/news5.jpg" alt="News" />
                  <span className="date">
                    <b>03</b> Sep
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Farming</span>
                  <h4>
                    <Link href="/blog-details">
                      Quality Foods Requirments For Every Human Body’s
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/news/news6.jpg" alt="News" />
                  <span className="date">
                    <b>09</b> Sep
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Organic Fruits</span>
                  <h4>
                    <Link href="/blog-details">
                      Choose Awesome Vegetables For Your Daily Life Routine
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news7.jpg" alt="News" />
                  <span className="date">
                    <b>06</b> Nov
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Vegetable</span>
                  <h4>
                    <Link href="/blog-details">
                      Unicode UTF8 Character Sets They Sltimate Guide Systems
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/news/news8.jpg" alt="News" />
                  <span className="date">
                    <b>03</b> Sep
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Farming</span>
                  <h4>
                    <Link href="/blog-details">
                      Quality Foods Requirments For Every Human Body’s
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/news/news9.jpg" alt="News" />
                  <span className="date">
                    <b>06</b> Sep
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Organic Fruits</span>
                  <h4>
                    <Link href="/blog-details">
                      Choose Awesome Vegetables For Your Daily Life Routine
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
          <ul className="pagination justify-content-center flex-wrap">
            <Pagination
              paginationCls={".blog-grid .col-xl-4"}
              defaultSort={6}
            />
          </ul>
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
    </Layout>
  );
};
export default BlogGrid;
