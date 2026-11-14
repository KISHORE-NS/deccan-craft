import './Hero.css'
import { Link } from 'react-router-dom'
import Heroimg from '../../assets/images/hero_img2.jpg'

function Hero() {

  return (

    <section className="hero-section  ">
      <div className="hero-background  container-fluid ">
        <div className="hero-overlay"></div>

        <div className="container hero-container">
          <div className="hero-content">

            {/* Category Badge */}
            <div className="hero-badge">


              <span>Residential Interior Design</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title">
              How can interior design
              <br className="desktop-break" />
              transform the way you 
              <br className="desktop-break" />
              live at
              <br className="desktop-break" />
              home?
            </h1>

            {/* Description */}
            <p className="hero-description">
              We bring European-inspired residential interior design to
              Chennai, combining refined Italian aesthetics with
              German-inspired engineering and precision. The result is a
              sophisticated, functional, and thoughtfully designed home
              tailored to your lifestyle.
            </p>

            {/* CTA Button */}
            <Link to="/contact" className="">
            
              <span className="btn btn-warning  rounded-5">
                Start Your Home Transformation
              </span>
            </Link>

          </div>
        </div>
      </div>

    
      <div className="container py-5">
        <div className="row align-items-center justify-content-between g-4">

          <div className="col-lg-5 mt-4">
            <h1 className="display-5  text-dark lh-1 mb-3">
              Crafted for Comfort, Designed for Life
            </h1>

            <p className="lead text-dark ">
              Transform your Dream House with our exclusive collection of
              premium furniture. From timeless handcrafted dining sets to
              sleek, modern seating, we bring quality and elegance straight
              to your home.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <Link to="/about" className="btn btn-primary  btn-md px-4 rounded-5" >
                About Us
              </Link>

              <Link to="/service" className="btn btn-secondary btn-md px-4 rounded-5">
                Our Service
              </Link>
            </div>
          </div>

          <div className="col-lg-6 ">
            <img
              src={Heroimg}
              alt="Handcrafted wooden furniture"
              className="img-fluid w-100 rounded-4"
            />
          </div>

        </div>
      </div>

    </section>




  )
}

export default Hero