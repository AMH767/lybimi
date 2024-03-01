import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const E404 = () => {
  return (
    <Layout>
      {/* <PageBanner pageName={"404"} pageTitle={"404 Error"} /> */}
      <section className="error-section rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="error-inner text-center wow fadeInUp delay-0-2s">
            <div className="image mb-70">
              <img src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/avocado/photo_3_2024-01-20_17-45-42.png" alt="404 Error" />
            </div>
            <div className="content">
              <div className="section-title mb-20">
                <h2>Ошибка</h2>
              </div>
              <p>
                Страница не существует
              </p>
              <Link href="/">
                <a className="theme-btn style-three mt-15">
                  В Домик <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>

      </section>
    </Layout>
  );
};
export default E404;
