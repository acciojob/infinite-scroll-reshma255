//your code here!
const list = document.getElementById("list");
let itemCount = 0;

function addItems(num) { 
	for (let i = 0; i < num; i++) { 
		itemCount++; 
		const li = document.createElement("li");
		li.textContent = `Item ${itemCount}`;
		list.appendChild(li); 
	} 
}
addItems(10);

window.addEventListener("scroll", () => {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
         addItems(2); 
	} 
});


		