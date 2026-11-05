import Users from "./api.js";

const container = document.querySelector(".container-js");

async function renderUsers() {
  const users = await Users();

  users.forEach((user) => {
    const card = document.createElement("li");

    card.classList.add("bg-green-700", "rounded-lg", "py-1.5", "px-3");

    card.innerHTML = `
        <h3 class="">name: ${user.name}</h3>
        <p class="">email: ${user.email}</p>
        <p class="">address: ${user.address.city}</p>
    `;
    container.appendChild(card);
  });
}

renderUsers();
