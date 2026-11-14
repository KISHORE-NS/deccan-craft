
import "./Service.css";
import Navbar from "../../components/navbar/Navbar";
import service1 from "../../assets/images/service1.jpg"
import tvService from "../../assets/images/tv-service.jpg"
import wardrobeService from "../../assets/images/wardrobe-service.jpg"
import livingService from "../../assets/images/living-service.jpg"
import officeService from "../../assets/images/office-service.jpg"
import customService from "../../assets/images/custom-service.jpg"
import S1 from "../../assets/images/S1.jpg"

import {
  faUtensils,
  faBed,
  faTv,
  faCouch,
  faBriefcase,
  faHammer,
  faComments,
  faDraftingCompass,
  faTools,
  faCheckCircle,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Service() {
  const services = [
    {
      icon: faUtensils,
      image: S1,
      title: "Modular Kitchens",
      description:
        "Beautifully designed kitchen cabinets and storage solutions that combine functionality, convenience, and modern style.",
    },
    {
      icon: faBed,
      image: wardrobeService,
      title: "Bedroom Furniture",
      description:
        "Custom-made beds, wardrobes, cupboards, and bedroom storage designed to make your personal space comfortable.",
    },
    {
      icon: faTv,
      image: tvService,
      title: "TV Units",
      description:
        "Modern TV units with integrated storage, stylish finishes, and practical designs to enhance your living room.",
    },
    {
      icon: faCouch,
      image: livingService,
      title: "Living Room Furniture",
      description:
        "Elegant wooden furniture, shelves, partitions, and centre tables that bring character to your living space.",
    },
    {
      icon: faBriefcase,
      image: officeService,
      title: "Office Furniture",
      description:
        "Practical office desks, workstations, storage cabinets, and furniture tailored to your workspace.",
    },
    {
      icon: faHammer,
      image: customService,
      title: "Custom Woodwork",
      description:
        "Personalised carpentry solutions created according to your ideas, measurements, requirements, and available space.",
    },
  ];

  const process = [
    {
      icon: faComments,
      number: "01",
      title: "Consultation",
      description:
        "We discuss your requirements, ideas, preferences, and budget.",
    },
    {
      icon: faDraftingCompass,
      number: "02",
      title: "Design & Planning",
      description:
        "We plan suitable designs, materials, measurements, and project details.",
    },
    {
      icon: faTools,
      number: "03",
      title: "Work Execution",
      description:
        "Our skilled workers complete the project under the owner's supervision.",
    },
    {
      icon: faCheckCircle,
      number: "04",
      title: "Completion",
      description:
        "We inspect the finished work and hand over the completed project.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="service-page">

        {/* Hero Section */}
        <section className="service-hero">
          <div className="container">
            <div className="service-hero-content">
              <span className="service-subtitle">
                WHAT WE OFFER
              </span>

              <h1>
                Crafting Spaces
                <span> That Inspire</span>
              </h1>

              <p>
                From modern kitchens to custom wooden furniture,
                we provide quality carpentry solutions designed
                around your needs and lifestyle.
              </p>

              <Link to="/contact" className="btn service-primary-btn">
                Discuss Your Project
                <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="service-list section-padding">
          <div className="container">

            <div className="section-title text-center">
              <span className="service-subtitle">
                OUR SERVICES
              </span>

              <h2 className="service-heading">
                Solutions for Every Space
              </h2>

              <p>
                Explore our range of carpentry services.
                Every project is planned to suit your space,
                style, and requirements.
              </p>
            </div>

            <div className="row g-4 mt-4">
              {services.map((item, index) => (
                <div className="col-sm-6 col-lg-4" key={index}>
                  <div className="service-card h-100">

                    <div className="service-card-image">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                      />
                    </div>

                    <div className="service-card-content">
                      <div className="service-card-icon">
                        <FontAwesomeIcon icon={item.icon} />
                      </div>

                      <h5>{item.title}</h5>

                      <p>{item.description}</p>

                      <Link
                        to="/contact"
                        className="service-link"
                      >
                        Enquire Now
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="ms-2"
                        />
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Working Process */}
        <section className="service-process section-padding">
          <div className="container">

            <div className="section-title text-center">
              <span className="service-subtitle">
                HOW WE WORK
              </span>

              <h2 className="service-heading">
                From Your Vision to Reality
              </h2>

              <p>
                We make every project simple and organised
                with a clear working process.
              </p>
            </div>

            <div className="row g-4 mt-4">
              {process.map((item) => (
                <div className="col-sm-6 col-lg-3" key={item.number}>
                  <div className="service-process-card h-100">

                    <span className="service-process-number">
                      {item.number}
                    </span>

                    <div className="service-process-icon">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>

                    <h5>{item.title}</h5>

                    <p>{item.description}</p>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Why Choose Us */}
        <section className="service-benefits section-padding">
          <div className="container">
            <div className="row align-items-center g-5">

              <div className="col-lg-6">
                <span className="service-subtitle">
                  OUR COMMITMENT
                </span>

                <h2 className="service-heading">
                  More Than Just Carpentry
                </h2>

                <p>
                  Every project receives personal attention
                  from the owner, from the first conversation
                  to the final handover.
                </p>

                <ul className="service-benefit-list">
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    Direct communication with the owner
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    Skilled workers and guided execution
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    Designs tailored to your requirements
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    Attention to quality and finishing
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    Careful project planning and supervision
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <div className="service-benefit-image">
                  <img
                    src={service1}
                    alt="Custom wooden furniture craftsmanship"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="service-cta section-padding">
          <div className="container text-center">

            <span className="service-subtitle">
              LET'S GET STARTED
            </span>

            <h2>Ready to Transform Your Space?</h2>

            <p>
              Have an idea or a project in mind?
              Get in touch with us and let's discuss how
              we can bring your vision to life.
            </p>

            <Link to="/contact" className="btn service-cta-btn">
              Enquire Now
              <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </Link>

          </div>
        </section>

      </main>

      
    </>
  );
}

export default Service;
