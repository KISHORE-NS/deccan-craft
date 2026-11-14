
import "./About.css";
import Navbar from "../../components/navbar/Navbar";
import about1 from "../../assets/images/about1.jpg"

import {
  faAward,
  faUsers,
  faHammer,
  faHandshake,
  faComments,
  faDraftingCompass,
  faTools,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function About() {
  const strengths = [
    {
      icon: faAward,
      title: "Quality Craftsmanship",
      description:
        "We focus on quality materials and careful workmanship in every project.",
    },
    {
      icon: faUsers,
      title: "Skilled Team",
      description:
        "Our experienced workers bring ideas to life under the owner's guidance.",
    },
    {
      icon: faHandshake,
      title: "Customer Commitment",
      description:
        "We understand customer requirements and work towards their satisfaction.",
    },
    {
      icon: faHammer,
      title: "Custom Solutions",
      description:
        "Every project is planned according to the customer's needs and space.",
    },
  ];

  const process = [
    {
      icon: faComments,
      number: "01",
      title: "Consultation",
      description:
        "We discuss your ideas, requirements, and expectations.",
    },
    {
      icon: faDraftingCompass,
      number: "02",
      title: "Planning",
      description:
        "We plan the design, materials, and work according to your needs.",
    },
    {
      icon: faTools,
      number: "03",
      title: "Execution",
      description:
        "Our skilled team completes the work under the owner's supervision.",
    },
    {
      icon: faCheckCircle,
      number: "04",
      title: "Final Handover",
      description:
        "We inspect the completed work and hand over the finished project.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="about-hero-content">
              <span className="about-subtitle">
                ABOUT OUR BUSINESS
              </span>

              <h1>
                Turning Your Ideas Into
                <span> Beautiful Spaces</span>
              </h1>

              <p>
                We create thoughtfully designed wooden interiors
                and custom furniture, bringing your ideas to life
                through skilled craftsmanship and dedicated service.
              </p>

              <Link to="/products" className="btn btn-warning   ">
                Explore Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* About Business Section */}
        <section className="about-story section-padding">
          <div className="container">
            <div className="row align-items-center g-5">

              <div className="col-lg-6">
                <div className="about-story-image">
                  <img
                    src={about1}
                    alt="Carpentry and woodworking"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <span className="about-subtitle">
                  WHO WE ARE
                </span>

                <h2 className="about-heading">
                  Craftsmanship Built on Trust and Experience
                </h2>

                <p>
                  We are a dedicated carpentry business focused on
                  creating functional and beautiful wooden spaces
                  for homes and businesses.
                </p>

                <p>
                  Every project is managed directly by the owner,
                  who communicates with customers, understands
                  their requirements, and guides the team throughout
                  the work.
                </p>

                <p>
                  With a skilled team handling the execution and
                  attention to detail at every stage, we aim to
                  deliver results that meet our customers'
                  expectations.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="about-strengths section-padding">
          <div className="container">

            <div className="section-title text-center">
              <span className="about-subtitle">
                WHY CHOOSE US
              </span>

              <h2 className="about-heading">
                What Makes Our Work Special?
              </h2>

              <p>
                Quality work, reliable service, and a commitment
                to every project we undertake.
              </p>
            </div>

            <div className="row g-4 mt-4">
              {strengths.map((item, index) => (
                <div className="col-sm-6 col-lg-3" key={index}>
                  <div className="strength-card h-100">
                    <div className="strength-icon">
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

        {/* Working Process */}
        <section className="about-process section-padding">
          <div className="container">

            <div className="section-title text-center">
              <span className="about-subtitle">
                OUR WORK PROCESS
              </span>

              <h2 className="about-heading">
                From Your Idea to Completion
              </h2>

              <p>
                We follow a clear process to make every project
                smooth and organised.
              </p>
            </div>

            <div className="row g-4 mt-4">
              {process.map((item) => (
                <div className="col-sm-6 col-lg-3" key={item.number}>
                  <div className="process-card h-100">
                    <span className="process-number">
                      {item.number}
                    </span>

                    <div className="process-icon">
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

        {/* CTA Section */}
        <section className="about-cta section-padding ">
          <div className="container text-center">
            <span className="about-subtitle">
              LET'S WORK TOGETHER
            </span>

            <h2>
              Have a Project in Mind?
            </h2>

            <p>
              Tell us your ideas and let us help you create
              something beautiful for your space.
            </p>

            <Link to="/contact" className="btn about-cta-btn">
              Contact Us
            </Link>
          </div>
        </section>

      </main>

      
    </>
  );
}

export default About;
