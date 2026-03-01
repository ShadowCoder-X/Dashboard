const decreasseBtn = document.getElementById("decrease");
const increasseBtn = document.getElementById("increase");
const counterDisplay = document.getElementById("counter");
const resetBtn = document.getElementById("reset");

let count = 0;

function updateCounter() {
  counterDisplay.innerText = count;
}

increasseBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

decreasseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

const userGrid = document.getElementById("user-grid");
const loadBtn = document.getElementById("load-users");

loadBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
    displayUsers(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
});

function displayUsers(users) {
  userGrid.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("div");
    card.className = "user-card";

    card.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <P>Company: ${user.company.name}</p>
`;

    userGrid.appendChild(card);
  });
}

const toggleBtn = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
