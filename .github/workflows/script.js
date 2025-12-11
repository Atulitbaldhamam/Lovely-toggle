const button = document.querySelector("#withyou");
const body = document.querySelector("body");
        
// State variable
let mode = "light"; 
let flowerInterval; // To control the flower generation loop

// Function to create a single flower
function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerText = "🌸"; // You can change this to 🌹, 🌻, or ❤️
    
    // Randomize position and speed
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = Math.random() * 3 + 2 + "s"; // Between 2s and 5s
    flower.style.fontSize = Math.random() * 20 + 20 + "px"; // Random size

    body.appendChild(flower);

    // Remove flower from DOM after animation ends to save memory
    setTimeout(() => {
        flower.remove();
    }, 5000);
}

// Function to start raining flowers
function startFlowers() {
    // Create a flower every 300 milliseconds
    flowerInterval = setInterval(createFlower, 300);
}

// Function to stop and clear flowers
function stopFlowers() {
    clearInterval(flowerInterval);
    // Remove all existing flowers immediately
    const flowers = document.querySelectorAll(".flower");
    flowers.forEach(f => f.remove());
}

// Start flowers initially because we start in 'light' mode
startFlowers();

// Button Event Listener
button.addEventListener("click", () => {
    if (mode === "light") {
        // Switching to WITHOUT YOU (Dark)
        mode = "dark";
        body.classList.replace("light", "dark");
        button.innerText = "Without You 🌑";
        stopFlowers(); // Stop the animation
    } else {
        // Switching to WITH YOU (Light)
        mode = "light";
        body.classList.replace("dark", "light");
        button.innerText = "With You 🌸";
        startFlowers(); // Start the animation
    }
    console.log("Current Mode:", mode);
});