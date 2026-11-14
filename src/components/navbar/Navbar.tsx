import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'

function Navbar(){

  const navigate = useNavigate();

    const handleMobileNavigate = (path: string) => {
        navigate(path);

        const closeButton = document.querySelector(
            '#mobileMenu [data-bs-dismiss="offcanvas"]'
        ) as HTMLButtonElement | null;

        closeButton?.click();
    };
    return (
        <nav className="light-bg container-fluid p-4 sticky-top shadow">
            <div className="container p-0">
                <div className="d-flex align-items-center">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="d-flex align-items-center text-white text-decoration-none"
                    >
                      <h1 className="text-dark display-5  ">Deccan Craft</h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="nav m-auto d-none d-lg-flex gap-2 fs-5">
                        <li className="nav-item">
                            <Link to="/" className="nav-link px-2 text-dark">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about" className="nav-link px-2 text-dark">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/service" className="nav-link px-2 text-dark">
                                Service
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/products" className="nav-link px-2 text-dark">
                                Products
                            </Link>
                        </li>
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="text-end d-none d-lg-block">
                        <Link to="/contact" className="btn btn-secondary me-2">
                            Contact us
                        </Link>

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="btn btn-secondary d-lg-none ms-auto"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#mobileMenu"
                        aria-controls="mobileMenu"
                        aria-label="Open navigation menu"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Offcanvas Menu */}
            <div
                className="offcanvas offcanvas-start light-bg"
                tabIndex={-1}
                id="mobileMenu"
                aria-labelledby="mobileMenuLabel"
            >
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id="mobileMenuLabel">
                        Deccan Craft
                    </h3>

                    <button
                        type="button"
                        className="btn-close cancel-btn"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>

                <div className="offcanvas-body">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link text-dark hover-underline"
                                onClick={() => handleMobileNavigate("/")}
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/about"
                                className="nav-link text-dark"
                                onClick={() => handleMobileNavigate("/about")}
                            >
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/service"
                                className="nav-link text-dark"
                                onClick={() => handleMobileNavigate("/service")}
                            >
                                Service
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/products"
                                className="nav-link text-dark"
                                onClick={() => handleMobileNavigate("/products")}
                            >
                                Products
                            </Link>
                        </li>

                        <hr />

                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className="btn btn-secondary w-100 mb-2"
                                onClick={() => handleMobileNavigate("/contact")}
                            >
                                Contact us
                            </Link>
                        </li>

                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar