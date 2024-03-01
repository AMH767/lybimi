import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
const BlogStandard = () => {
  return (
    <Layout>
      <PageBanner pageName={"Blog Standard"} />
      <section className="news-standard-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mt-65">
              <div className="news-standard-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="https://raw.githubusercontent.com/AMH767/image/main/stickers/stickrem/46548567.png" alt="News" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    {/* <li>
                      <i className="far fa-calendar-alt" />
                      <a href="#">Mar 25, 2022</a>
                    </li> */}
                    {/* <li>
                      <i className="far fa-comment-dots" />
                      <a href="#">Comments (5k)</a>
                    </li> */}
                  </ul>
                  <h4>
                    <Link href="/blog-details">
                      <a>
Чипцы Lays с луком
                      </a>
                    </Link>
                  </h4>
                  <p>
                    Dolor sit amet consectetur adipiscing sed eiusmods tempor
                    incididunt ut labore et dolore
                  </p>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>


              <div className="news-standard-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/blog-standard8.jpg" alt="News" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />
                      <a href="#">Mar 25, 2022</a>
                    </li>
                    <li>
                      <i className="far fa-comment-dots" />
                      <a href="#">Comments (5k)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link href="/blog-details">
                      Complete Guide To Switching From Newsletter Without Losing
                    </Link>
                  </h4>
                  <p>
                    Dolor sit amet consectetur adipiscing sed eiusmods tempor
                    incididunt ut labore et dolore
                  </p>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
              <ul className="pagination flex-wrap pt-10">
                <Pagination
                  paginationCls={".news-standard-item"}
                  defaultSort={4}
                />
              </ul>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-8">
              <div className="blog-sidebar mt-65">
                <div className="widget widget-news wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    Новости
                  </h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/news/news-widget3.jpg"
                          alt="News"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/blog-details">
                            Design And Buildsc Newsletter Mind
                          </Link>
                        </h6>
                        <span className="name">By Westfield</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/news/news-widget1.jpg"
                          alt="News"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/blog-details">
                            Universal Principles User Experience
                          </Link>
                        </h6>
                        <span className="name">By Braswell</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/news/news-widget2.jpg"
                          alt="News"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <Link href="/blog-details">
                            Roll Out New Featuc Without Hurting
                          </Link>
                        </h6>
                        <span className="name">By Mendonca</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogStandard;
