import React from "react";
import ImageShow from "./ImageShow";
import "../css/ImageList.css";

function ImageList({ products }) {
  console.log('ImageList - products:', products)
  const renderedImages = products.map((product) => {
    console.log('ImageList - renderizado:', product);
    return (
      <div key={product.codigo} className="image-list-item">
        <ImageShow product={product} />
      </div>
    );
  });

  return <div className="image-list">{renderedImages}</div>;
}
export default ImageList;