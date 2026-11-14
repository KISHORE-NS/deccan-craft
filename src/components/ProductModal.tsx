

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import type { Product } from "../data/Products";

interface ProductModalProps {
  product: Product | null;
  onHide: () => void;
}

function ProductModal({ product, onHide }: ProductModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Modal
      show={product !== null}
      onHide={onHide}
      centered
      size="lg"
      scrollable
      onExited={() => setImageLoaded(false)}
    >
      {product && (
        <>
          <Modal.Header closeButton className="product-modal-header">
            <div>
              <Badge className="product-category mb-2">
                {product.category}
              </Badge>
              <Modal.Title>{product.title}</Modal.Title>
            </div>
          </Modal.Header>

          <Modal.Body className="p-4">
            <img
              src={product.image}
              alt={product.title}
              className={`product-modal-image rounded mb-4 ${
                imageLoaded ? "image-loaded" : ""
              }`}
              onLoad={() => setImageLoaded(true)}
            />

            <h5 className="product-modal-heading">
              About This Project
            </h5>
            <p className="product-modal-text">
              {product.description}
            </p>

            <h6 className="product-modal-heading mt-4">
              <FontAwesomeIcon icon={faLayerGroup} className="me-2" />
              Materials
            </h6>

            <div className="d-flex flex-wrap gap-2 mb-4">
              {product.materials.map((material) => (
                <Badge
                  key={material}
                  className="material-badge"
                >
                  {material}
                </Badge>
              ))}
            </div>

            <h6 className="product-modal-heading">
              Project Highlights
            </h6>

            <ul className="product-feature-list">
              {product.features.map((feature) => (
                <li key={feature}>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="me-2"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="outline-secondary" onClick={onHide}>
              Close
            </Button>

            <Link
              
              to="/contact"
              className="btn btn-secondary"
            >
              Enquire Now
            </Link>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}

export default ProductModal;
