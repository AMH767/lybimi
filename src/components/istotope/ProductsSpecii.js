import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const ProductsSpecii = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".popular-products-active", {
        itemSelector: ".item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  return (
    <Fragment>
      <div className="row align-items-center pb-30">
        <div className="col-lg-6 wow fadeInUp delay-0-2s">
          <div className="section-title mb-20">
            <span className="sub-title mb-20"></span>
            <h2>Специи</h2>
          </div>
        </div>
        <div className="col-lg-6 text-lg-right wow fadeInUp delay-0-4s">
          <ul className="popular-products-filter filter-btns-one mb-20">
            <li
              data-filter="*"
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
            >
              Все
            </li>
            <li
              data-filter=".vegetables"
              className={`c-pointer ${activeBtn("vegetables")}`}
              onClick={handleFilterKeyChange("vegetables")}
            >
              Молотый
            </li>
            <li
              data-filter=".fruits"
              className={`c-pointer ${activeBtn("fruits")}`}
              onClick={handleFilterKeyChange("fruits")}
            >
              Целый
            </li>
            {/* <li
              data-filter=".bread"
              className={`c-pointer ${activeBtn("bread")}`}
              onClick={handleFilterKeyChange("bread")}
            >
              Кофе
            </li> */}
            {/* <li
              data-filter=".seafish"
              className={`c-pointer ${activeBtn("seafish")}`}
              onClick={handleFilterKeyChange("seafish")}
            >
              Sea Fish
            </li> */}
          </ul>
        </div>
      </div>
      <div className="row popular-products-active">
        <div className="col-xl-3 col-lg-4 col-sm-6 item fruits bread">
          <div className="product-item wow fadeInUp delay-0-2s">
            {/* <span className="offer">53 Off</span> */}
            <div className="image">
              <img src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/korica.png" alt="Product" />
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
                <Link href="/product-karica">Карица</Link>
              </h5>
              {/* <span className="price">
                <del>25</del>
                <span>1200 / кг</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item seafish fruits">
          <div className="product-item wow fadeInUp delay-0-3s">
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
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item bread fruits">
          <div className="product-item wow fadeInUp delay-0-4s">
            {/* <span className="offer bg-red">sale</span> */}
            <div className="image">
              <img src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/gvozdika.png" alt="Product" />
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
                <Link href="/product-details">Гвоздика</Link>
              </h5>
              {/* <span className="price">
                <del>25</del>
                <span>220 / 100гр</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item vegetables">
          <div className="product-item wow fadeInUp delay-0-5s">
            {/* <span className="offer">20 Off</span> */}
            <div className="image">
              <img src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/chesnok.png" alt="Product" />
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
                <Link href="/product-details">Чеснок молотый</Link>
              </h5>
              {/* <span className="price">
                <del>55</del>
                <span>45 / 100гр</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item seafish vegetables">
          <div className="product-item wow fadeInUp delay-0-6s">
            <div className="image">
              <img src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/muskatni_orex.png" alt="Product" />
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
                <Link href="/product-details">Мускатный орех</Link>
              </h5>
              {/* <span className="price">
                <span>500 / кг</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item bread seafish vegetables">
          <div className="product-item wow fadeInUp delay-0-7s">
            {/* <span className="offer">53 Off</span> */}
            <div className="image">
              <img src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/imbir.png" alt="Product" />
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
                <Link href="/product-details">Имбирь молотый</Link>
              </h5>
              {/* <span className="price">
                <del>25</del>
                <span>450</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item vegetables">
          <div className="product-item wow fadeInUp delay-0-2s">
            <div className="image">
              <img src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/kardamon.png" alt="Product" />
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
                <Link href="/product-details">Кардамон молотый</Link>
              </h5>
              {/* <span className="price">
                <span>45 / 100гр</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item seafish bread vegetables">
          <div className="product-item wow fadeInUp delay-0-3s">
            {/* <span className="offer">53 Off</span> */}
            <div className="image">
              <img src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/karica_moloti.png" alt="Product" />
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
                <Link href="/product-karica">Карица молотый</Link>
              </h5>
              {/* <span className="price">
                <span>45 / 100гр</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item vegetables">
          <div className="product-item wow fadeInUp delay-0-4s">
            <div className="image">
              <img src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/khmeli-suneli.png" alt="Product" />
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
                <Link href="/product-details">Хмели сунели</Link>
              </h5>
              {/* <span className="price">
                <span>450 / кг</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item seafish vegetables">
          <div className="product-item wow fadeInUp delay-0-5s">
            {/* <span className="offer">20 Off</span> */}
            <div className="image">
              <img src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/kurkuma_moloti.png" alt="Product" />
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
                <Link href="/product-details">Куркума молотый</Link>
              </h5>
              {/* <span className="price">
                <del>55</del>
                <span>50 / 100гр</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item bread vegetables">
          <div className="product-item wow fadeInUp delay-0-6s">
            <div className="image">
              <img src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/shafran.png" alt="Product" />
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
                <Link href="/product-details">Шафран молотый</Link>
              </h5>
              {/* <span className="price">
                <span>45 / 100гр</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item vegetables">
          <div className="product-item wow fadeInUp delay-0-7s">
            <div className="image">
              <img src="https://raw.githubusercontent.com/Alen44141/images/main/Specii/chilli.png" alt="Product" />
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
                <Link href="/product-details">Чили молотый</Link>
              </h5>
              {/* <span className="price">
                <del>25</del>
                <span>60 / 100гр</span>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductsSpecii;
