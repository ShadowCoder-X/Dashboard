const decreasseBtn = document.getElementById("dercrease-btn");
const increasseBtn = document.getElementById("increase-btn");
const counterDisplay = document.getElementById("counter");
const resetBtn = document.getElementById("reset");
const loadUsersBtn = document.getElementById("load-users");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

let count = 0;
//const counterDisplay = document.getElementById("counter-value");

increasseBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

decreasseBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  updateCounter();
});

function updateCounter() {
  counterDisplay.innerText = count;
}

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
        <h3> Name: ${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <P>Company: ${user.company}</p>
`;

    userGrid.appendChild(card);
  });
}
