import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
import Slider from "react-slick";
import { productActiveTwo } from "../src/sliderProps";
import dynamic from 'next/dynamic';
const ProductsSpecii = dynamic(
  () => import("../src/components/istotope/ProductsKonservi"),
  {
    ssr: false,
  }
);
export const ShopSpecii = () => {
  return (
    <Layout>
      <PageBanner pageName={"Соки"} />
      <section className="shop-area-three rel z-1 py-50">
        <div className="container-fluid">
          <ProductsSpecii />
        </div>
      </section>
      <section className="related-product rel z-1 pt-125 rpt-95 pb-130 rpb-100">
        <div className="container">
          <div className="section-title text-center mb-60">
            <h3>Специи
            </h3>
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
                  <Link href="/product-badyan">Бадьян</Link>
                </h5>
                {/* <span className="price">
                  <span>180 / 100гр</span>
                </span> */}
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
                {/* <span className="price">
                  <del>25</del>
                  <span>500 / кг</span>
                </span> */}
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
                {/* <span className="price">
                  <del>55</del>
                  <span>450</span>
                </span> */}
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
                {/* <span className="price">
                  <span>45 / 100гр</span>
                </span> */}
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
                {/* <span className="price">
                  <del>55</del>
                  <span>45 / 100гр</span>
                </span> */}
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </Layout>
      );
};
export default ShopSpecii;
