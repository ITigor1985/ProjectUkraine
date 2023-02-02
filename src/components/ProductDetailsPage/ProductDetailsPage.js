import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProduct } from "../../services/api";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

import {
  InfoWrapper,
  DidescriptionWrapper,
  ProductTitle,
} from "./ProductDetailsPage.styled";
import Sizes from "../Sizes";

export default function MovieDetailsPage() {
  let { productId } = useParams();
  const [productData, setProductData] = useState({});
  const [error, setError] = useState("");
  const [colorId, setColorId] = useState("0");

  useEffect(() => {
    async function getProductData() {
      try {
        const product = await getProduct(productId);
        setProductData(product);
      } catch (error) {
        setError(error.message);
      }
    }
    getProductData();
  }, [productId]);

  useEffect(() => {}, [colorId]);

  const handleSubmit = (event) => {
    setColorId(event.target.value - 1);
  };

  return (
    <>
      {error && <h2>Something went wrong, please try again</h2>}
      <InfoWrapper>
        {productData.colors && (
          <Carousel
            images={productData.colors[colorId].images.map((image) => ({
              src: `${image}`,
            }))}
            style={{ height: 400, width: 300 }}
          />
        )}
        <DidescriptionWrapper>
          <ProductTitle>{productData.name}</ProductTitle>

          <h3>Colors:</h3>
          {productData.colors && (
            <ul>
              {productData.colors.map((color) => {
                return (
                  <li key={color.id}>
                    <button
                      type="button"
                      value={color.id}
                      onClick={handleSubmit}
                    >
                      {color.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
          {productData.colors && (
            <ul>
              <li>Price: {productData.colors[colorId].price}</li>
              <li>Description: {productData.colors[colorId].description}</li>
            </ul>
          )}
          <h3>Sizes</h3>
          {productData.colors && (
            <Sizes
              productSizes={productData.colors[colorId].sizes}
              colorId={colorId}
            />
          )}
        </DidescriptionWrapper>
      </InfoWrapper>
    </>
  );
}
