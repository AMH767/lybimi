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
            <h2>Консервы и масло</h2>
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
              Консервы
            </li>
            <li
              data-filter=".fruits"
              className={`c-pointer ${activeBtn("fruits")}`}
              onClick={handleFilterKeyChange("fruits")}
            >
              Масло
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
            <div className="image1">
              <img  style={{ height: '250px' }} src="https://raw.githubusercontent.com/AMH767/image/main/sokiremov/kons/doshab.png" alt="Product" />
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
                <Link href="/product-keshy">Дошаб (из щелковицы)</Link>
              </h5>
              {/* <span className="price">
                <del>25</del>
                <span>1200 / кг</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item seafish ">
          <div className="product-item wow fadeInUp delay-0-3s">
            <div className="image1">
              <img style={{ height: '250px' }} src="https://raw.githubusercontent.com/AMH767/image/main/sokiremov/kons/soy.png" alt="Product" />
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
                <Link href="/product-fyndykjar">Соевый соус</Link>
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
            <div className="image1">
              <img style={{ height: '250px' }} src="https://raw.githubusercontent.com/AMH767/image/main/sokiremov/kons/oblepix.png" alt="Product" />
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
                <Link href="/product-mixorex">Масло облепиховое</Link>
              </h5>
              {/* <span className="price">
                <del>25</del>
                <span>220 / 100гр</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 img99 col-lg-4 col-sm-6 item fruits">
          <div className="product-item wow fadeInUp delay-0-5s">
            {/* <span className="offer">20 Off</span> */}
            <div className="image1"  >
              <img style={{ height: '250px' }} src="https://raw.githubusercontent.com/AMH767/image/main/sokiremov/kons/Ln.png" alt="Product" />
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
                <Link href="/product-details">Масло льняное</Link>
              </h5>
              {/* <span className="price">
                <del>55</del>
                <span>45 / 100гр</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item seafish  fruits">
          <div className="product-item wow fadeInUp delay-0-6s">
            <div className="image1">
              <img style={{ height: '250px' }} src="https://raw.githubusercontent.com/AMH767/image/main/sokiremov/kons/grec.png" alt="Product" />
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
                <Link href="/product-details">Масло Грецкого ореха</Link>
              </h5>
              {/* <span className="price">
                <span>500 / кг</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item bread seafish fruits">
          <div className="product-item wow fadeInUp delay-0-7s">
            {/* <span className="offer">53 Off</span> */}
            <div className="image1">
              <img style={{ height: '250px' }} src="https://raw.githubusercontent.com/AMH767/image/main/sokiremov/kons/Konop.png" alt="Product" />
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
                <Link href="/product-details">Масло конаплянное</Link>
              </h5>
              {/* <span className="price">
                <del>25</del>
                <span>450</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item fruits">
          <div className="product-item wow fadeInUp delay-0-2s">
            <div className="image">
              <img style={{ height: '250px' }} src="https://raw.githubusercontent.com/AMH767/image/main/sokiremov/kons/tikva.png" alt="Product" />
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
                <Link href="/product-details">Масло тыквенное</Link>
              </h5>
              {/* <span className="price">
                <span>45 / 100гр</span>
              </span> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item seafish bread fruits">
          <div className="product-item wow fadeInUp delay-0-3s">
            {/* <span className="offer">53 Off</span> */}
            <div className="image">
              <img style={{ height: '250px' }} src="https://raw.githubusercontent.com/AMH767/image/main/sokiremov/kons/Rast.png" alt="Product" />
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
                <Link href="/product-karica">Масло Расторопши</Link>
              </h5>
              {/* <span className="price">
                <span>45 / 100гр</span>
              </span> */}
            </div>
          </div>
        </div>









        <div className="col-xl-3 col-lg-4 col-sm-6 item seafish bread fruits">
          <div className="product-item wow fadeInUp delay-0-3s">
            <div className="image">
              <img style={{ height: '250px' }} src="https://raw.githubusercontent.com/AMH767/image/main/sokiremov/kons/olivOL.png" alt="Product" />
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
                <Link href="/product-details">Масло КАLАМАТА EXTRA VIRGIN </Link>
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
              <img style={{ height: '250px' }} src="https://raw.githubusercontent.com/AMH767/image/main/sokiremov/kons/fredericKap.png" alt="Product" />
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
                <Link href="/product-details">Каперсы Frederic</Link>
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
              <img style={{ height: '250px' }} src="https://raw.githubusercontent.com/AMH767/image/main/sokiremov/kons/ItalKap.png" alt="Product" />
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
                <Link href="/product-details">Каперсы в уксусе</Link>
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
              <img style={{ height: '250px' }} src="https://raw.githubusercontent.com/AMH767/image/main/sokiremov/kons/xren.png" alt="Product" />
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
                <Link href="/product-details">Хрен</Link>
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
              <img style={{ height: '250px' }} src="https://raw.githubusercontent.com/AMH767/image/main/sokiremov/kons/perecK.png" alt="Product" />
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
                <Link href="/product-details">Красный перец острый</Link>
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
