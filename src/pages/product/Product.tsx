
import './Product.css';
import { useMemo, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

import {
  products,
  type Product,
  type ProductCategory,
} from "../../data/Products";

import ProductCard from "../../components/ProductCard";
import ProductModal from "../../components/ProductModal";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

type CategoryFilter = "All" | ProductCategory;

const categories: CategoryFilter[] = [
  "All",
  "Bedroom",
  "Kitchen",
  "Living Room",
  "Others",
];

function Products() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryFilter>("All");

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  // FILTER PRODUCTS BY CATEGORY
  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    }

    return products.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  // FEATURED PRODUCTS
  const featuredProducts = products.slice(0, 3);

  const handleCategoryChange = (category: CategoryFilter) => {
    setActiveCategory(category);
  };

  const handleDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Navbar />

      <main className="products-page">

        {/* PAGE INTRO */}
        <section className="products-intro">
          <Container className="py-5">
            <Row className="align-items-center">
              <Col lg={8} className="mx-auto text-center">

                <Badge className="products-eyebrow mb-3">
                  <FontAwesomeIcon
                    icon={faLayerGroup}
                    className="me-2"
                  />
                  OUR CRAFTSMANSHIP
                </Badge>

                <h1 className="products-main-title">
                  Furniture Made With <span>Purpose.</span>
                </h1>

                <p className="products-intro-text mx-auto">
                  Explore our collection of custom furniture,
                  thoughtfully designed to bring beauty,
                  functionality, and lasting craftsmanship
                  into your home.
                </p>

              </Col>
            </Row>
          </Container>
        </section>

        

        {/* FEATURED PROJECTS CAROUSEL */}
        <section className="featured-section py-5">
          <Container>

            <div className="section-heading mb-4">
              <div>
                <p className="section-kicker">
                  HANDPICKED FOR YOU
                </p>

                <h2 className="section-title">
                  Featured Projects
                </h2>
              </div>
            </div>

            <Carousel
              className="furniture-carousel"
              indicators
              controls
              interval={5000}
              pause="hover"
            >
              {featuredProducts.map((product) => (
                <Carousel.Item key={product.id}>

                  <div className="featured-slide">

                    <img
                      src={product.image}
                      alt={product.title}
                      className="featured-image"
                    />

                    <div className="featured-overlay" />

                    <div className="featured-content">

                      <Badge className="featured-category mb-3">
                        {product.category}
                      </Badge>

                      <h3>{product.title}</h3>

                      <p>{product.description}</p>

                      <Button
                        className="featured-btn"
                        onClick={() => handleDetails(product)}
                      >
                        Explore Project

                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="ms-2"
                        />
                      </Button>

                    </div>
                  </div>

                </Carousel.Item>
              ))}
            </Carousel>

          </Container>
        </section>

        {/* CATEGORY FILTERS AND PRODUCT CARDS */}
        <section
          className="catalog-section py-5"
          id="all-products"
        >
          <Container>

            <div className="text-center mb-4">

              <p className="section-kicker">
                OUR COLLECTION
              </p>

              <h2 className="section-title">
                Explore Our Furniture
              </h2>

              <p className="catalog-description">
                Find the right design for every corner of your home.
              </p>

            </div>

            {/* CATEGORY FILTER BUTTONS */}
            <div
              className="category-filters mb-5"
              role="group"
              aria-label="Filter products by category"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline-secondary"
                  className={`category-filter ${
                    activeCategory === category ? "active" : ""
                  }`}
                  aria-pressed={activeCategory === category}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* PRODUCT COUNT */}
            <div className="d-flex justify-content-between align-items-center mb-4">

              <p className="product-count mb-0">
                Showing{" "}
                <strong>{filteredProducts.length}</strong>{" "}
                {filteredProducts.length === 1
                  ? "project"
                  : "projects"}
              </p>

              <span className="selected-category">
                {activeCategory === "All"
                  ? "All Categories"
                  : activeCategory}
              </span>

            </div>

            {/* FILTERED PRODUCT GRID */}
            {filteredProducts.length > 0 ? (

              <Row className="g-4">

                {filteredProducts.map((product) => (
                  <Col
                    key={product.id}
                    xs={12}
                    sm={6}
                    lg={4}
                  >
                    <ProductCard
                      product={product}
                      onDetails={handleDetails}
                    />
                  </Col>
                ))}

              </Row>

            ) : (

              <div className="empty-products text-center py-5">

                <h4>No projects found</h4>

                <p>
                  Try selecting another category.
                </p>

                <Button
                  className="product-details-btn"
                  onClick={() => handleCategoryChange("All")}
                >
                  View All Projects
                </Button>

              </div>

            )}

          </Container>
        </section>

        {/* ENQUIRY CALL TO ACTION */}
        <section className="products-cta py-5">
          <Container>

            <Row className="align-items-center g-4">

              <Col md={8}>

                <p className="section-kicker">
                  LET'S BUILD SOMETHING
                </p>

                <h2 className="cta-title">
                  Have a design in mind?
                </h2>

                <p className="cta-text mb-0">
                  Tell us what you need, and let's create
                  furniture that fits your space and style.
                </p>

              </Col>

              <Col md={4} className="text-md-end">

                <Button
                  href="/contact"
                  className="cta-button"
                >
                  Enquire Now

                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ms-2"
                  />
                </Button>

              </Col>

            </Row>

          </Container>
        </section>

        {/* SHARED PRODUCT DETAILS MODAL */}
        <ProductModal
          product={selectedProduct}
          onHide={handleModalClose}
        />

        <Footer/>

      </main>
    </>
  );
}

export default Products;
