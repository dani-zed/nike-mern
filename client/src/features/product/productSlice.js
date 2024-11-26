// import React, { useState, useEffect } from "react";
// import {
//   createProduct,
//   fetchCategories,
//   fetchColors,
//   fetchProduct,
//   fetchProductById,
//   fetchSizes,
// } from "./productAPI";

// const ProductComponent = () => {
//   const [products, setProducts] = useState([]);
//   const [colors, setColors] = useState([]);
//   const [sizes, setSizes] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [newProductName, setNewProductName] = useState("");
//   const [loadingProducts, setLoadingProducts] = useState(false);
//   const [loadingColors, setLoadingColors] = useState(false);
//   const [loadingSizes, setLoadingSizes] = useState(false);
//   const [loadingCategories, setLoadingCategories] = useState(false);

//   const fetchProductsFromAPI = async (filterSet, sort) => {
//     setLoadingProducts(true);
//     try {
//       const response = await fetchProduct(filterSet, sort);
//       setProducts(response);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     } finally {
//       setLoadingProducts(false);
//     }
//   };

//   const fetchAvailableColors = async () => {
//     setLoadingColors(true);
//     try {
//       const response = await fetchColors();
//       setColors(response);
//     } catch (err) {
//       console.error("Error fetching colors:", err);
//     } finally {
//       setLoadingColors(false);
//     }
//   };

//   const fetchAvailableSizes = async () => {
//     setLoadingSizes(true);
//     try {
//       const response = await fetchSizes();
//       setSizes(response);
//     } catch (err) {
//       console.error("Error fetching sizes:", err);
//     } finally {
//       setLoadingSizes(false);
//     }
//   };

//   const fetchAvailableCategories = async () => {
//     setLoadingCategories(true);
//     try {
//       const response = await fetchCategories();
//       setCategories(response);
//     } catch (err) {
//       console.error("Error fetching categories:", err);
//     } finally {
//       setLoadingCategories(false);
//     }
//   };

//   const handleCreateProduct = async () => {
//     const product = { name: newProductName };
//     await createNewProduct(product);
//   };

//   useEffect(() => {
//     fetchAvailableColors();
//     fetchAvailableSizes();
//     fetchAvailableCategories();
//   }, []);

//   return (
//     <div>
//       <h1>Product Management</h1>

//       <div>
//         <h2>Products</h2>
//         {loadingProducts && <p>Loading products...</p>}
//         <ul>
//           {products.map((product) => (
//             <li key={product.id}>{product.name}</li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h2>Colors</h2>
//         {loadingColors && <p>Loading colors...</p>}
//         <ul>
//           {colors.map((color) => (
//             <li key={color.id}>{color.name}</li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h2>Sizes</h2>
//         {loadingSizes && <p>Loading sizes...</p>}
//         <ul>
//           {sizes.map((size) => (
//             <li key={size.id}>{size.name}</li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h2>Categories</h2>
//         {loadingCategories && <p>Loading categories...</p>}
//         <ul>
//           {categories.map((category) => (
//             <li key={category.id}>{category.name}</li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h2>Create New Product</h2>
//         <input
//           type="text"
//           value={newProductName}
//           onChange={(e) => setNewProductName(e.target.value)}
//           placeholder="Enter product name"
//         />
//         <button onClick={handleCreateProduct}>Create Product</button>
//       </div>

//       {selectedProduct && (
//         <div>
//           <h2>Selected Product</h2>
//           <p>{selectedProduct.name}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductComponent;
