import { List, ListItem } from "./ProductsPage.styled";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getProducts } from "../../services/api";

export default function MoviesPage() {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getDataProducts() {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    }

    getDataProducts();
  }, []);

  return (
    <div>
      <List>
        {products.map((product) => {
          return (
            <ListItem key={product.id}>
              <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/${product.id}`}
                key={product.id}
                state={{ from: location }}
              >
                <img src={`${product.colors[0].images[0]}`} alt="" />

                {product.name}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
