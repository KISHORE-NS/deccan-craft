
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import EnquiryForm from "../../components/form/EnquiryForm";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="contact-page">

        <section className="contact-hero text-center">
          <span className="contact-tag">GET IN TOUCH</span>

          <h1>Let's Build Something Beautiful</h1>

          <p>
            Have a project in mind? Tell us about it.
            We'd love to bring your ideas to life.
          </p>
        </section>

        <section className="contact-section container py-5">
          <div className="row g-5 align-items-start">

            <div className="col-lg-5">
              <div className="contact-info">
                <h2>Let's Talk About Your Project</h2>

                <p>
                  Whether you're planning a modern kitchen,
                  elegant wardrobe, TV unit, or custom furniture,
                  we're here to help bring your vision to life.
                </p>

                <div className="contact-info-item">
                  <h5>Our Services</h5>
                  <p>Custom Furniture & Woodwork</p>
                </div>

                <div className="contact-info-item">
                  <h5>Working Hours</h5>
                  <p>Monday – Saturday</p>
                  <p>9:00 AM – 6:00 PM</p>
                </div>

                <div className="contact-info-item">
                  <h5>Project Enquiries</h5>
                  <p>
                    Share your requirements and we'll
                    get back to you.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <EnquiryForm />
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Contact;
