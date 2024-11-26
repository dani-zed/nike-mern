import axios from "axios";

// Create product function
export async function createProduct(product) {
  try {
    const response = await axios.post("products/createProduct", product, {
      headers: { "Content-Type": "application/json" },
    });
    return { data: response.data }; // Returning the response data directly
  } catch (err) {
    console.error("Error creating product:", err);
    throw err; // Throwing error to be handled by the calling code
  }
}

// Fetch products function with filter and sort
export async function fetchProduct(filter, sort) {
  try {
    let queryString = "";

    // Query building for the filter
    for (let key in filter) {
      if (filter[key].length) {
        queryString += `${key}=${filter[key]}&`;
      }
    }

    // Query building for the sort
    for (let key in sort) {
      queryString += `${key}=${sort[key]}&`;
    }

    const response = await axios.get("products/fetchProducts", {
      params: { query: queryString },
    });
    return { data: response.data }; // Returning the response data directly
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err; // Throwing error to be handled by the calling code
  }
}

// Fetch product by ID
export async function fetchProductById(id) {
  try {
    const response = await axios.get(`/products/fetchProductById/${id}`);
    return { data: response.data }; // Returning the response data directly
  } catch (err) {
    console.error("Error fetching product by ID:", err);
    throw err; // Throwing error to be handled by the calling code
  }
}

// Fetch colors
export async function fetchColors() {
  try {
    const response = await axios.get("/colors");
    return { data: response.data }; // Returning the response data directly
  } catch (err) {
    console.error("Error fetching colors:", err);
    throw err; // Throwing error to be handled by the calling code
  }
}

// Fetch sizes
export async function fetchSizes() {
  try {
    const response = await axios.get("/sizes");
    return { data: response.data }; // Returning the response data directly
  } catch (err) {
    console.error("Error fetching sizes:", err);
    throw err; // Throwing error to be handled by the calling code
  }
}

// Fetch categories
export async function fetchCategories() {
  try {
    const response = await axios.get("/categories");
    return { data: response.data }; // Returning the response data directly
  } catch (err) {
    console.error("Error fetching categories:", err);
    throw err; // Throwing error to be handled by the calling code
  }
}
