import Users from "./api.js";

// SELECTORS:
const mainContainer = document.querySelector(".mainContainer-js");
const container = document.querySelector(".container-js");
const searchBox = document.querySelector(".search-box-js");

// LOADING STATUS:
const status = document.createElement("div");
status.classList.add("font-bold");
status.innerHTML = "Loading...";
mainContainer.appendChild(status);

// RENDERING USERS:
async function renderUsers() {
  const users = await Users();

  setTimeout(() => {
    if (users) {
      users.forEach((user) => {
        const card = document.createElement("li");

        card.classList.add("bg-sky-500", "rounded-lg", "py-1.5", "px-3");

        card.innerHTML = `
        <h3 class="">name: ${user.name}</h3>
        <p class="">email: ${user.email}</p>
        <p class="">address: ${user.address.city}</p>`;
        container.appendChild(card);
      });
      status.classList.add("hidden");
    } else {
      status.innerHTML = "Error 404";
    }
  }, 3000);

  // LIVE SEARCH:
  searchBox.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const filteredUsers = users.filter((user) => {
      const nameMatch = user.name.toLowerCase().includes(searchTerm);
      const emailMatch = user.email.toLowerCase().includes(searchTerm);
      const cityMatch = user.address.city.toLowerCase().includes(searchTerm);

      return nameMatch || emailMatch || cityMatch;
    });

    container.innerHTML = "";

    if (filteredUsers.length === 0) {
      status.classList.remove("hidden");
      status.innerHTML = "No users found";
    } else {
      filteredUsers.forEach((user) => {
        const card = document.createElement("li");

        card.classList.add("bg-sky-500", "rounded-lg", "py-1.5", "px-3");

        card.innerHTML = `
        <h3 class="">name: ${user.name}</h3>
        <p class="">email: ${user.email}</p>
        <p class="">address: ${user.address.city}</p>`;
        container.appendChild(card);
        status.classList.add("hidden");
      });
    }
  });
}

renderUsers();
