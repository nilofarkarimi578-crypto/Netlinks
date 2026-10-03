import React from "react";
import "./Netlinks.css";

// Images
import heroImage from "../../assets/home-hero-1280.webp";
import odooImage from "../../assets/home-feature-odoo-1280.webp";
import aiImage from "../../assets/home-feature-ai-1280.webp";

// Data
import {
  heroData,
  servicesData,
  odooData,
  aiData,
  navigationData,
  industriesData,
  architectCtaData,
  footerData
} from "./NetlinksData";


function Netlinks() {

  return (
    <main className="netlinks-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="netlinks-navbar">

        <a href="#top" className="netlinks-logo">

          <div className="netlinks-logo-mark">
            N
          </div>

          <div className="netlinks-logo-text">
            netlinks
          </div>

        </a>


        <nav className="netlinks-navigation">

          {navigationData.map((item, index) => (

            <div
              className="netlinks-nav-item"
              key={index}
            >

              <span>
                {item.name}
              </span>

              {item.dropdown && (
                <i className="fa-solid fa-chevron-down"></i>
              )}

            </div>

          ))}

        </nav>


        <a
          href="#contact"
          className="netlinks-contact-button"
        >

          <span>
            Contact us
          </span>

          <i className="fa-solid fa-arrow-right"></i>

        </a>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="top"
        className="netlinks-hero"
      >

        <div className="netlinks-hero-content">

          <div className="netlinks-hero-badge">

            <span className="netlinks-hero-dot"></span>

            <span>
              {heroData.badge}
            </span>

          </div>


          <h1 className="netlinks-hero-title">

            {heroData.title}

            <br />

            <span>
              {heroData.highlight}
            </span>

          </h1>


          <p className="netlinks-hero-description">
            {heroData.description}
          </p>


          <div className="netlinks-hero-buttons">

            <button
              type="button"
              className="netlinks-primary-button"
            >

              <span>
                {heroData.primaryButton}
              </span>

              <i className="fa-solid fa-arrow-right"></i>

            </button>


            <a
              href="#services"
              className="netlinks-secondary-button"
            >

              <span>
                {heroData.secondaryButton}
              </span>

              <i className="fa-solid fa-arrow-down"></i>

            </a>

          </div>

        </div>


        {/* HERO IMAGE */}

        <div className="netlinks-hero-visual">

          <img
            className="netlinks-hero-image"
            src={heroImage}
            alt="Netlinks technology"
          />

        </div>


        {/* STATISTICS */}

        <div className="netlinks-statistics">

          {heroData.statistics.map((stat, index) => (

            <div
              className="netlinks-stat-item"
              key={index}
            >

              <div className="netlinks-stat-number">

                <span>
                  {stat.number}
                </span>

                {stat.symbol && (
                  <small>
                    {stat.symbol}
                  </small>
                )}

              </div>


              <p className="netlinks-stat-text">
                {stat.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="netlinks-services"
      >

        <div className="netlinks-section-heading">

          <span className="netlinks-small-heading">
            {servicesData.smallTitle}
          </span>

          <h2>
            {servicesData.highlight}
          </h2>

          <p>
            {servicesData.description}
          </p>

        </div>


        <div className="netlinks-services-list">

          {servicesData.services.map((service) => (

            <article
              className="netlinks-service-item"
              key={service.number}
            >

              <div className="netlinks-service-number">
                {service.number}
              </div>


              <div className="netlinks-service-category">
                {service.category}
              </div>


              <div className="netlinks-service-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </div>


              <button
                type="button"
                className="netlinks-service-arrow"
                aria-label={`View ${service.title}`}
              >

                <i className="fa-solid fa-arrow-up-right-from-square"></i>

              </button>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          ODOO
      ===================================================== */}

      <section className="netlinks-feature netlinks-odoo-section">

        <div className="netlinks-feature-image">

          <img
            src={odooImage}
            alt="Odoo ERP"
          />

        </div>


        <div className="netlinks-feature-content">

          <div className="netlinks-feature-label">

            <span>
              {odooData.number}
            </span>

            <span>
              {odooData.category}
            </span>

          </div>


          <h2>

            {odooData.title}

            <br />

            <span>
              {odooData.highlight}
            </span>

          </h2>


          <p>
            {odooData.description}
          </p>


          <ul className="netlinks-feature-list">

            {odooData.points.map((point, index) => (

              <li key={index}>

                <span className="netlinks-check">
                  <i className="fa-solid fa-check"></i>
                </span>

                <span>
                  {point}
                </span>

              </li>

            ))}

          </ul>


          <button
            type="button"
            className="netlinks-feature-button"
          >

            <span>
              {odooData.button}
            </span>

            <i className="fa-solid fa-arrow-right"></i>

          </button>

        </div>

      </section>


      {/* =====================================================
          AI
      ===================================================== */}

      <section className="netlinks-feature netlinks-ai-section">

        <div className="netlinks-feature-content">

          <div className="netlinks-feature-label">

            <span>
              {aiData.number}
            </span>

            <span>
              {aiData.category}
            </span>

          </div>


          <h2>

            {aiData.title}

            <br />

            <span>
              {aiData.highlight}
            </span>

          </h2>


          <p>
            {aiData.description}
          </p>


          <ul className="netlinks-feature-list">

            {aiData.points.map((point, index) => (

              <li key={index}>

                <span className="netlinks-check">
                  <i className="fa-solid fa-check"></i>
                </span>

                <span>
                  {point}
                </span>

              </li>

            ))}

          </ul>


          <button
            type="button"
            className="netlinks-feature-button"
          >

            <span>
              {aiData.button}
            </span>

            <i className="fa-solid fa-arrow-right"></i>

          </button>

        </div>


        <div className="netlinks-feature-image">

          <img
            src={aiImage}
            alt="AI and automation"
          />

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="netlinks-industries">

        <div className="netlinks-section-heading">

          <span className="netlinks-small-heading">
            {industriesData.smallTitle}
          </span>

          <h2>
            {industriesData.highlight}
          </h2>

          <p>
            {industriesData.description}
          </p>

        </div>


        <div className="netlinks-industries-grid">

          {industriesData.industries.map((industry) => (

            <article
              className="netlinks-industry-item"
              key={industry.number}
            >

              <div className="netlinks-industry-top">

                <span>
                  {industry.number}
                </span>

                <i className="fa-solid fa-arrow-up-right-from-square"></i>

              </div>


              <h3>
                {industry.title}
              </h3>


              <p>
                {industry.description}
              </p>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          ARCHITECT CTA
      ===================================================== */}

      <section
        id="contact"
        className="netlinks-architect-cta"
      >

        <div className="netlinks-cta-content">

          <span className="netlinks-small-heading">
            SENIOR-LED DELIVERY
          </span>


          <h2>

            {architectCtaData.title}

            <br />

            <span>
              {architectCtaData.highlight}
            </span>

          </h2>


          <p>
            {architectCtaData.description}
          </p>


          <button
            type="button"
            className="netlinks-cta-button"
          >

            <span>
              {architectCtaData.button}
            </span>

            <i className="fa-solid fa-arrow-right"></i>

          </button>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="netlinks-footer">

        <div className="netlinks-footer-main">


          {/* COMPANY */}

          <div className="netlinks-footer-company">

            <div className="netlinks-footer-logo">

              <div className="netlinks-footer-logo-mark">
                N
              </div>

              <div className="netlinks-footer-logo-text">
                netlinks
              </div>

            </div>


            <p>
              {footerData.companyDescription}
            </p>


            <div className="netlinks-footer-contact">

              <a href={`mailto:${footerData.email}`}>
                {footerData.email}
              </a>

              <a href={`tel:${footerData.phone}`}>
                {footerData.phone}
              </a>


              {footerData.address.map((line, index) => (

                <span key={index}>
                  {line}
                </span>

              ))}

            </div>

          </div>


          {/* SOLUTIONS */}

          <div className="netlinks-footer-column">

            <h4>
              Solutions
            </h4>

            {footerData.solutions.map((item, index) => (

              <a
                href="#"
                key={index}
              >
                {item}
              </a>

            ))}

          </div>


          {/* SERVICES */}

          <div className="netlinks-footer-column">

            <h4>
              Services
            </h4>

            {footerData.services.map((item, index) => (

              <a
                href="#"
                key={index}
              >
                {item}
              </a>

            ))}

          </div>


          {/* INDUSTRIES */}

          <div className="netlinks-footer-column">

            <h4>
              Industries
            </h4>

            {footerData.industries.map((item, index) => (

              <a
                href="#"
                key={index}
              >
                {item}
              </a>

            ))}

          </div>


          {/* COMPANY LINKS */}

          <div className="netlinks-footer-column">

            <h4>
              Company
            </h4>

            {footerData.company.map((item, index) => (

              <a
                href="#"
                key={index}
              >
                {item}
              </a>

            ))}

          </div>

        </div>


        {/* FOOTER BOTTOM */}

        <div className="netlinks-footer-bottom">

          <span>
            © {new Date().getFullYear()} NETLINKS. All rights reserved.
          </span>


          <div className="netlinks-footer-socials">

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href="#"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a
              href="#"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}


export default Netlinks;