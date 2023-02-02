import { useEffect, useState } from "react";
import { getSizes } from "../../services/api";
import { List } from "../ProductDetailsPage/ProductDetailsPage.styled";
import "./style.css";

export default function Sizes({ productSizes, colorId }) {
  const [sizes, setSizes] = useState([]);
  const [activColorIndex, setActivColorIndex] = useState(-1);

  function activStyleColorButton(index) {
    const styleOption = ["Color__button"];
    if (activColorIndex === index) {
      styleOption.push("Color__button--active");
    }
    return styleOption.join(" ");
  }

  useEffect(() => {
    setActivColorIndex(-1);
  }, [colorId]);

  function setActiveButon(index) {
    setActivColorIndex(index);
  }

  useEffect(() => {
    async function getDataSizes() {
      try {
        const sizes = await getSizes();

        setSizes(sizes);
      } catch (error) {
        console.log(error);
      }
    }

    getDataSizes();
  }, []);

  return (
    <div>
      {sizes && (
        <List>
          {sizes.map((size, index) => {
            return (
              <li key={size.id}>
                <button
                  disabled={!(productSizes.indexOf(size.id) !== -1)}
                  onClick={() => setActiveButon(index)}
                  className={activStyleColorButton(index)}
                >
                  {size.number}
                </button>
              </li>
            );
          })}
        </List>
      )}
    </div>
  );
}
