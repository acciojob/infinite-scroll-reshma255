const list = document.getElementById('list');
let itemCount = 0;

// Function to add items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement('li');
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add 10 items initially
addItems(10);

// Listen for scroll event
list.addEventListener('scroll', () => {
  // Check if user reached the bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); // Add 2 more items
  }
});
