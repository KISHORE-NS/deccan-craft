
import { useState } from "react";
import "./EnquiryForm.css";
import { useNavigate } from "react-router-dom";

function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Enquiry:", formData);
    alert("Your enquiry has been submitted!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      location: "",
      message: "",
    });

    navigate("/");
  };

  return (
    <div className="enquiry-form-card">
      <h3>Send Us an Enquiry</h3>
      <p>Tell us about your project requirements.</p>

      <form onSubmit={handleSubmit}>
        <div className="row g-3">

          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Select Service</label>
            <select
              name="service"
              className="form-select"
              value={formData.service}
              onChange={handleChange}
              
            >
              <option value="">Choose a service</option>
              <option value="Modular Kitchen">Modular Kitchen</option>
              <option value="TV Unit">TV Unit</option>
              <option value="Wardrobe">Wardrobe</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Living Room">Living Room</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="col-12">
            <label className="form-label">Location</label>
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="Current location or Area"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <label className="form-label">Addiotional Details</label>
            <textarea
              name="message"
              className="form-control"
              rows={5}
              placeholder="Describe your requirements..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn enquiry-submit-btn">
              Submit Enquiry
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default EnquiryForm;
