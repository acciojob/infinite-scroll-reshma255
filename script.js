const list = document.getElementById("list");
let itemCount = 0;

// Function to add items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add 10 items initially
addItems(10);

// Detect scroll to bottom
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Add 2 more items when bottom is reached
    addItems(2);
  }
});
