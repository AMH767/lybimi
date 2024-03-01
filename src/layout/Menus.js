import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">Домой</Link>
    </li>
    {/* <li>
      <Link href="/index2">Home Two</Link>
    </li>
    <li>
      <Link href="/index3">Home Three</Link>
    </li> */}
  </Fragment>
);

export const PagesDasktop = () => (
  <Fragment>
    <li>
      <Link href="/about">Новости</Link>
    </li>

  </Fragment>
);
export const PagesMobile = () => (
  <Fragment>
    <li>
      <Link href="/about">Новости</Link>
    </li>
  </Fragment>
);
export const Portfolio = () => (
  <Fragment>
    <li>
      <Link href="/portfolio-grid">Акции</Link>
    </li>

  </Fragment>
);
export const Blog = () => (
  <Fragment>
  </Fragment>
);
export const Shop = () => (
  <Fragment>

  </Fragment>
);
export const Contact = () => (
  <Fragment>
    <li>
      <Link href="/contact">Контакты</Link>
    </li>
  </Fragment>
);
