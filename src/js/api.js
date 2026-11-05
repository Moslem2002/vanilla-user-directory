export default async function Users() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error();
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Error", err.message);
  }
}
