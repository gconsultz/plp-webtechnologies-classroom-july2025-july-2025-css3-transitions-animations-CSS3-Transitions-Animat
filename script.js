/*
   📚 Part 2: Functions, Scope, Parameters & Return Values
*/

// 🌍 Global variable (accessible anywhere)
let globalMessage = "Hello from the GLOBAL scope!";

/*
   Function Demo 1: Add Numbers
*/
function addNumbers(a, b) {
  return a + b; // parameters & return value
}

function handleAddition() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  let sum = addNumbers(num1, num2);

  document.getElementById("result").textContent =
    `The sum of ${num1} and ${num2} is ${sum}`;
}

/*
   Function Demo 2: Global vs Local Scope
*/
function scopeDemo() {
  let localMessage = "Hello from the LOCAL scope!"; // local variable
  return `${globalMessage} | ${localMessage}`;
}

function showScopeExample() {
  document.getElementById("scope-output").textContent = scopeDemo();
}

/*
   Function Demo 3: Rectangle Area
*/
function calculateArea(length, width) {
  return length * width;
}

function handleArea() {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);

  let area = calculateArea(length, width);

  document.getElementById("area-result").textContent =
    `The area of a rectangle with length ${length} and width ${width} is ${area}`;
}



/*
   Function Demo 4: Random Color Generator
*/
function generateRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgb(${r}, ${g}, ${b})`;
  console.log("Generated:", color); // Debug log
  return color;
}


/* Generate a random color */
function generateRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

/* Generate a random gradient */
function generateRandomGradient() {
  let color1 = generateRandomColor();
  let color2 = generateRandomColor();
  let angle = Math.floor(Math.random() * 360); // random angle for fun
  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

function applyRandomColor() {
  let gradient = generateRandomGradient();
  console.log("Applying gradient:", gradient);

  document.body.style.background = gradient;

  document.getElementById("color-result").textContent =
    `Background changed to: ${gradient}`;
}

/*
   🎬 Part 3: JS + CSS Animations
*/

/* Demo 1: Toggle Box Animation */
function toggleBoxAnimation() {
  let box = document.getElementById("animate-box");
  box.classList.toggle("active");
}

/* Demo 2: Flip Card with JS */
function flipCard() {
  let card = document.querySelector(".js-card");
  card.classList.toggle("flipped");
}

/* Demo 3: Start/Stop Loader */
function toggleLoader() {
  let loader = document.getElementById("js-loader");
  loader.classList.toggle("stopped");
}

/* Demo 4: Popup Modal */
// Open modal
function openModal() {
  const modal = document.getElementById("myModal");
  const content = modal.querySelector(".modal-content");

  modal.style.display = "flex"; // show
  content.classList.remove("closing"); // reset in case of re-open
}

// Close modal with fade-out
function closeModal() {
  const modal = document.getElementById("myModal");
  const content = modal.querySelector(".modal-content");

  content.classList.add("closing");

  // Wait for fadeOut animation to finish before hiding
  content.addEventListener("animationend", function handler() {
    modal.style.display = "none";
    content.classList.remove("closing");
    content.removeEventListener("animationend", handler);
  });
}

