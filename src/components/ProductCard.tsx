

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { Product } from "../data/Products";

interface ProductCardProps {
  product: Product;
  onDetails: (product: Product) => void;
}

function ProductCard({ product, onDetails }: ProductCardProps) {
  return (
    <Card className="product-card h-100 border-0 shadow-sm">
      <div className="product-image-wrapper">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>

      <Card.Body className="d-flex flex-column p-4">
        <div className="mb-2">
          <Badge className="product-category">
            {product.category}
          </Badge>
        </div>

        <Card.Title className="product-title">
          {product.title}
        </Card.Title>

        <Card.Text className="product-description">
          {product.description}
        </Card.Text>

        <Button
          className="product-details-btn mt-auto align-self-start"
          onClick={() => onDetails(product)}
        >
          View Details
          <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
