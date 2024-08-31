import React from "react";

import hero from "../../img/hero-bg.jpg";

const Home = () => {
    return <>
<main className="main">
  {/* Hero Section */}
  <section id="hero" className="hero section">
    <img src={hero} alt="" data-aos="fade-in" />
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2 data-aos="fade-up" data-aos-delay={100}>
            Bettter digital experience with Presento
          </h2>
          <p data-aos="fade-up" data-aos-delay={200}>
            We are team of talented designers making websites with Bootstrap
          </p>
          <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay={300}>
            <a href="#about" className="btn-get-started">
              Get Started
            </a>
            <a
              href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
              className="glightbox btn-watch-video d-flex align-items-center"
            >
              <i className="bi bi-play-circle" />
              <span>Watch Video</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Hero Section */}
  {/* Clients Section */}
  <section id="clients" className="clients section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="swiper init-swiper">
        <div className="swiper-wrapper align-items-center">
          <div className="swiper-slide">
            <img
              src="assets/img/clients/client-1.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="assets/img/clients/client-2.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="assets/img/clients/client-3.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="assets/img/clients/client-4.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="assets/img/clients/client-5.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="assets/img/clients/client-6.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="assets/img/clients/client-7.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="swiper-slide">
            <img
              src="assets/img/clients/client-8.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>
  {/* /Clients Section */}
  {/* About Section */}
  <section id="about" className="about section section-bg dark-background">
    <div className="container position-relative">
      <div className="row gy-5">
        <div
          className="content col-xl-5 d-flex flex-column"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <h3>Voluptatem dignissimos provident quasi</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure dolor in reprehenderit
          </p>
          <a
            href="#"
            className="about-btn align-self-center align-self-xl-start"
          >
            <span>About us</span> <i className="bi bi-chevron-right" />
          </a>
        </div>
        <div className="col-xl-7" data-aos="fade-up" data-aos-delay={200}>
          <div className="row gy-4">
            <div className="col-md-6 icon-box position-relative">
              <i className="bi bi-briefcase" />
              <h4>
                <a href="" className="stretched-link">
                  Corporis voluptates sit
                </a>
              </h4>
              <p>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                laboris nisi ut aliquip
              </p>
            </div>
            {/* Icon-Box */}
            <div className="col-md-6 icon-box position-relative">
              <i className="bi bi-gem" />
              <h4>
                <a href="" className="stretched-link">
                  Ullamco laboris nisi
                </a>
              </h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt
              </p>
            </div>
            {/* Icon-Box */}
            <div className="col-md-6 icon-box position-relative">
              <i className="bi bi-broadcast" />
              <h4>
                <a href="" className="stretched-link">
                  Labore consequatur
                </a>
              </h4>
              <p>
                Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                maiores omnis facere
              </p>
            </div>
            {/* Icon-Box */}
            <div className="col-md-6 icon-box position-relative">
              <i className="bi bi-easel" />
              <h4>
                <a href="" className="stretched-link">
                  Beatae veritatis
                </a>
              </h4>
              <p>
                Expedita veritatis consequuntur nihil tempore laudantium vitae
                denat pacta
              </p>
            </div>
            {/* Icon-Box */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /About Section */}
  {/* Stats Section */}
  <section id="stats" className="stats section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4">
        <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
          <i className="bi bi-emoji-smile" />
          <div className="stats-item">
            <span
              data-purecounter-start={0}
              data-purecounter-end={232}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>Happy Clients</p>
          </div>
        </div>
        {/* End Stats Item */}
        <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
          <i className="bi bi-journal-richtext" />
          <div className="stats-item">
            <span
              data-purecounter-start={0}
              data-purecounter-end={521}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>Projects</p>
          </div>
        </div>
        {/* End Stats Item */}
        <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
          <i className="bi bi-headset" />
          <div className="stats-item">
            <span
              data-purecounter-start={0}
              data-purecounter-end={1463}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>Hours Of Support</p>
          </div>
        </div>
        {/* End Stats Item */}
        <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
          <i className="bi bi-people" />
          <div className="stats-item">
            <span
              data-purecounter-start={0}
              data-purecounter-end={15}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>Hard Workers</p>
          </div>
        </div>
        {/* End Stats Item */}
      </div>
    </div>
  </section>
  {/* /Stats Section */}
  {/* Tabs Section */}
  <section id="tabs" className="tabs section">
    <div className="container">
      <ul
        className="nav nav-tabs row  d-flex"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <li className="nav-item col-3">
          <a
            className="nav-link active show"
            data-bs-toggle="tab"
            data-bs-target="#tabs-tab-1"
          >
            <i className="bi bi-binoculars" />
            <h4 className="d-none d-lg-block">Modi sit est dela pireda nest</h4>
          </a>
        </li>
        <li className="nav-item col-3">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#tabs-tab-2"
          >
            <i className="bi bi-box-seam" />
            <h4 className="d-none d-lg-block">Unde praesenti mara setra le</h4>
          </a>
        </li>
        <li className="nav-item col-3">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#tabs-tab-3"
          >
            <i className="bi bi-brightness-high" />
            <h4 className="d-none d-lg-block">Pariatur explica nitro dela</h4>
          </a>
        </li>
        <li className="nav-item col-3">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#tabs-tab-4"
          >
            <i className="bi bi-command" />
            <h4 className="d-none d-lg-block">Nostrum qui dile node</h4>
          </a>
        </li>
      </ul>
      {/* End Tab Nav */}
      <div className="tab-content" data-aos="fade-up" data-aos-delay={200}>
        <div className="tab-pane fade active show" id="tabs-tab-1">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-all" />
                  <spab>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </spab>
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                  </span>
                  .
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </span>
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img
                src="assets/img/working-1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* End Tab Content Item */}
        <div className="tab-pane fade" id="tabs-tab-2">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>
                Neque exercitationem debitis soluta quos debitis quo mollitia
                officia est
              </h3>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Provident mollitia neque rerum asperiores dolores quos qui
                    a. Ipsum neque dolor voluptate nisi sed.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img
                src="assets/img/working-2.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* End Tab Content Item */}
        <div className="tab-pane fade" id="tabs-tab-3">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>
                Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor
                ut assumenda
              </h3>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Provident mollitia neque rerum asperiores dolores quos qui
                    a. Ipsum neque dolor voluptate nisi sed.
                  </span>
                </li>
              </ul>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img
                src="assets/img/working-3.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* End Tab Content Item */}
        <div className="tab-pane fade" id="tabs-tab-4">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>
                Omnis fugiat ea explicabo sunt dolorum asperiores sequi
                inventore rerum
              </h3>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img
                src="assets/img/working-4.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* End Tab Content Item */}
      </div>
    </div>
  </section>
  {/* /Tabs Section */}
  {/* Services Section */}
  <section
    id="services"
    className="services section section-bg dark-background"
  >
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Services</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
          <div className="service-item d-flex position-relative h-100">
            <i className="bi bi-briefcase icon flex-shrink-0" />
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Lorem Ipsum
                </a>
              </h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
          <div className="service-item d-flex position-relative h-100">
            <i className="bi bi-card-checklist icon flex-shrink-0" />
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Dolor Sitema
                </a>
              </h4>
              <p className="description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-md-6" data-aos="fade-up" data-aos-delay={300}>
          <div className="service-item d-flex position-relative h-100">
            <i className="bi bi-bar-chart icon flex-shrink-0" />
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Sed ut perspiciatis
                </a>
              </h4>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-md-6" data-aos="fade-up" data-aos-delay={400}>
          <div className="service-item d-flex position-relative h-100">
            <i className="bi bi-binoculars icon flex-shrink-0" />
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Magni Dolores
                </a>
              </h4>
              <p className="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-md-6" data-aos="fade-up" data-aos-delay={500}>
          <div className="service-item d-flex position-relative h-100">
            <i className="bi bi-brightness-high icon flex-shrink-0" />
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Nemo Enim
                </a>
              </h4>
              <p className="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-md-6" data-aos="fade-up" data-aos-delay={600}>
          <div className="service-item d-flex position-relative h-100">
            <i className="bi bi-calendar4-week icon flex-shrink-0" />
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Eiusmod Tempor
                </a>
              </h4>
              <p className="description">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
      </div>
    </div>
  </section>
  {/* /Services Section */}
  {/* Portfolio Section */}
  <section id="portfolio" className="portfolio section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Portfolio</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div
        className="isotope-layout"
        data-default-filter="*"
        data-layout="masonry"
        data-sort="original-order"
      >
        <ul
          className="portfolio-filters isotope-filters"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <li data-filter="*" className="filter-active">
            All
          </li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-product">Product</li>
          <li data-filter=".filter-branding">Branding</li>
          <li data-filter=".filter-books">Books</li>
        </ul>
        {/* End Portfolio Filters */}
        <div
          className="row gy-4 isotope-container"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div className="portfolio-content h-100">
              <img
                src="assets/img/portfolio/app-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a
                  href="assets/img/portfolio/app-1.jpg"
                  title="App 1"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <div className="portfolio-content h-100">
              <img
                src="assets/img/portfolio/product-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a
                  href="assets/img/portfolio/product-1.jpg"
                  title="Product 1"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content h-100">
              <img
                src="assets/img/portfolio/branding-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Branding 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a
                  href="assets/img/portfolio/branding-1.jpg"
                  title="Branding 1"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div className="portfolio-content h-100">
              <img
                src="assets/img/portfolio/books-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Books 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a
                  href="assets/img/portfolio/books-1.jpg"
                  title="Branding 1"
                  data-gallery="portfolio-gallery-book"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div className="portfolio-content h-100">
              <img
                src="assets/img/portfolio/app-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a
                  href="assets/img/portfolio/app-2.jpg"
                  title="App 2"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <div className="portfolio-content h-100">
              <img
                src="assets/img/portfolio/product-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Product 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a
                  href="assets/img/portfolio/product-2.jpg"
                  title="Product 2"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content h-100">
              <img
                src="assets/img/portfolio/branding-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Branding 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a
                  href="assets/img/portfolio/branding-2.jpg"
                  title="Branding 2"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div className="portfolio-content h-100">
              <img
                src="assets/img/portfolio/books-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Books 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a
                  href="assets/img/portfolio/books-2.jpg"
                  title="Branding 2"
                  data-gallery="portfolio-gallery-book"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div className="portfolio-content h-100">
              <img
                src="assets/img/portfolio/app-3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a
                  href="assets/img/portfolio/app-3.jpg"
                  title="App 3"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <div className="portfolio-content h-100">
              <img
                src="assets/img/portfolio/product-3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Product 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a
                  href="assets/img/portfolio/product-3.jpg"
                  title="Product 3"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content h-100">
              <img
                src="assets/img/portfolio/branding-3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Branding 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a
                  href="assets/img/portfolio/branding-3.jpg"
                  title="Branding 2"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div className="portfolio-content h-100">
              <img
                src="assets/img/portfolio/books-3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Books 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a
                  href="assets/img/portfolio/books-3.jpg"
                  title="Branding 3"
                  data-gallery="portfolio-gallery-book"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg" />
                </a>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
        </div>
        {/* End Portfolio Container */}
      </div>
    </div>
  </section>
  {/* /Portfolio Section */}
  {/* Testimonials Section */}
  <section id="testimonials" className="testimonials section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Testimonials</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="swiper init-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-1.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-2.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-3.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-4.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-5.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>
  {/* /Testimonials Section */}
  {/* Pricing Section */}
  <section id="pricing" className="pricing section section-bg dark-background">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Pricing</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row g-4 g-lg-0">
        <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
          <div className="pricing-item">
            <h3>Free Plan</h3>
            <h4>
              <sup>$</sup>0<span> / month</span>
            </h4>
            <ul>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Quam adipiscing vitae proin</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nec feugiat nisl pretium</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nulla at volutpat diam uteera</span>
              </li>
              <li className="na">
                <i className="bi bi-x" />{" "}
                <span>Pharetra massa massa ultricies</span>
              </li>
              <li className="na">
                <i className="bi bi-x" />{" "}
                <span>Massa ultricies mi quis hendrerit</span>
              </li>
            </ul>
            <div className="text-center">
              <a href="#" className="buy-btn">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        {/* End Pricing Item */}
        <div
          className="col-lg-4 featured"
          data-aos="zoom-in"
          data-aos-delay={200}
        >
          <div className="pricing-item">
            <h3>Business Plan</h3>
            <h4>
              <sup>$</sup>29<span> / month</span>
            </h4>
            <ul>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Quam adipiscing vitae proin</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nec feugiat nisl pretium</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nulla at volutpat diam uteera</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Pharetra massa massa ultricies</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Massa ultricies mi quis hendrerit</span>
              </li>
            </ul>
            <div className="text-center">
              <a href="#" className="buy-btn">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        {/* End Pricing Item */}
        <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
          <div className="pricing-item">
            <h3>Developer Plan</h3>
            <h4>
              <sup>$</sup>49<span> / month</span>
            </h4>
            <ul>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Quam adipiscing vitae proin</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nec feugiat nisl pretium</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nulla at volutpat diam uteera</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Pharetra massa massa ultricies</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Massa ultricies mi quis hendrerit</span>
              </li>
            </ul>
            <div className="text-center">
              <a href="#" className="buy-btn">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        {/* End Pricing Item */}
      </div>
    </div>
  </section>
  {/* /Pricing Section */}
  {/* Faq Section */}
  <section id="faq" className="faq section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Frequently Asked Questions</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10" data-aos="fade-up" data-aos-delay={100}>
          <div className="faq-container">
            <div className="faq-item faq-active">
              <h3>Non consectetur a erat nam at lectus urna duis?</h3>
              <div className="faq-content">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
            <div className="faq-item">
              <h3>Feugiat scelerisque varius morbi enim nunc faucibus?</h3>
              <div className="faq-content">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
            <div className="faq-item">
              <h3>Dolor sit amet consectetur adipiscing elit pellentesque?</h3>
              <div className="faq-content">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
            <div className="faq-item">
              <h3>
                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
              </h3>
              <div className="faq-content">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
            <div className="faq-item">
              <h3>Tempus quam pellentesque nec nam aliquam sem et tortor?</h3>
              <div className="faq-content">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
            <div className="faq-item">
              <h3>Perspiciatis quod quo quos nulla quo illum ullam?</h3>
              <div className="faq-content">
                <p>
                  Enim ea facilis quaerat voluptas quidem et dolorem. Quis et
                  consequatur non sed in suscipit sequi. Distinctio ipsam dolore
                  et.
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
          </div>
        </div>
        {/* End Faq Column*/}
      </div>
    </div>
  </section>
  {/* /Faq Section */}
  {/* Team Section */}
  <section id="team" className="team section section-bg dark-background">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Team</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div
          className="col-lg-3 col-md-6 d-flex align-items-stretch"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="team-member">
            <div className="member-img">
              <img
                src="assets/img/team/team-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
            <div className="member-info">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
            </div>
          </div>
        </div>
        {/* End Team Member */}
        <div
          className="col-lg-3 col-md-6 d-flex align-items-stretch"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="team-member">
            <div className="member-img">
              <img
                src="assets/img/team/team-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
            <div className="member-info">
              <h4>Sarah Jhonson</h4>
              <span>Product Manager</span>
            </div>
          </div>
        </div>
        {/* End Team Member */}
        <div
          className="col-lg-3 col-md-6 d-flex align-items-stretch"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="team-member">
            <div className="member-img">
              <img
                src="assets/img/team/team-3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
            <div className="member-info">
              <h4>William Anderson</h4>
              <span>CTO</span>
            </div>
          </div>
        </div>
        {/* End Team Member */}
        <div
          className="col-lg-3 col-md-6 d-flex align-items-stretch"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="team-member">
            <div className="member-img">
              <img
                src="assets/img/team/team-4.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
            <div className="member-info">
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
            </div>
          </div>
        </div>
        {/* End Team Member */}
      </div>
    </div>
  </section>
  {/* /Team Section */}
  {/* Contact Section */}
  <section id="contact" className="contact section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Contact</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4">
        <div className="col-lg-6 ">
          <div className="row gy-4">
            <div className="col-lg-12">
              <div
                className="info-item d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <i className="bi bi-geo-alt" />
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            {/* End Info Item */}
            <div className="col-md-6">
              <div
                className="info-item d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <i className="bi bi-telephone" />
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            {/* End Info Item */}
            <div className="col-md-6">
              <div
                className="info-item d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <i className="bi bi-envelope" />
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
            {/* End Info Item */}
          </div>
        </div>
        <div className="col-lg-6">
          <form
            action="forms/contact.php"
            method="post"
            className="php-email-form"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <div className="row gy-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div className="col-md-6 ">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="col-md-12">
                <textarea
                  className="form-control"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="col-md-12 text-center">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
        {/* End Contact Form */}
      </div>
    </div>
  </section>
  {/* /Contact Section */}
</main>
</>
}

export default Home;
