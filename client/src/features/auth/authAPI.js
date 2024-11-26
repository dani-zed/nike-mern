export async function createUser(user) {
  try {
    const response = await fetch("/auth/createUser", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    return { data }; // Directly returning the response data
  } catch (err) {
    console.error("Error creating user:", err);
    throw err; // Throwing error to be handled by the calling code
  }
}

export async function loginUser(user) {
  console.log(user);
  try {
    const response = await fetch("/auth/loginUser", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    });

    if (response.ok) {
      const data = await response.json();
      return { data }; // Returning response data
    } else {
      const error = await response.text();
      throw new Error(error); // Throwing error with response text
    }
  } catch (err) {
    console.error("Error logging in:", err);
    throw err; // Throwing error to be handled by the calling code
  }
}

export async function checkUser() {
  try {
    const response = await fetch("/auth/checkUser");
    const data = await response.json();
    return { data }; // Returning response data
  } catch (err) {
    console.error("Error checking user:", err);
    throw err; // Throwing error to be handled by the calling code
  }
}
