async function getUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error();
    }
    const users = await res.json();
    return users;
  } catch (err) {
    console.log("Error", err.message);
  }
}

getUser();
