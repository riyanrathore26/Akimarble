import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Comments from "./Comments";
import Footer from "./Footer";


export default function Quickpage() {
  const { state } = useLocation();
  const productId = state && state.productId;

  // State to store fetched product data
  const [productData, setProductData] = useState({}); // Initialize with empty object

  useEffect(() => {
    // Function to fetch data from backend
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/fetchone/${productId}`);
        if (response.ok) {
          const data = await response.json();

          setProductData(data); // Assuming data includes product details and images array
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call fetchData on component mount and whenever productId changes
    fetchData();
  }, [productId]);

  // Check if product data is available before rendering
  if (!productData) {
    return <div>Loading product details...</div>;
  }

  // Access product images and other data from productData object (assuming structure)
  const productImages = productData.images || []; // Default to empty array if images not present

  return (
    <div>
        <h1>{productData.name}</h1>
      <div className="gallary">
        {productImages.length > 0 && ( // Only render image gallery if images exist
          <div className="image-grid">
            {productImages.map((image, index) => (
              <div
                key={index}
                className={`image-item ${
                  index === 0 && productImages.length > 1 ? "big-image" : "small-image"
                }`}
              >
                <img src={image} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
        )}
      </div>
      <br />
      <div className="description">
        <h2>All About Product</h2>
        <p style={{
  border: "2px solid black",
  margin: "18px 70px",
  borderRadius: "10px",
  padding: "13px",
}}>{productData?.description || "No description available."}</p>

      </div>
      <Comments productId={productId}/>
      <Footer/>
    </div>
  );
}
