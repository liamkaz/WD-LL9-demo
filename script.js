// ----------------------------
// 🎵 Setlist Generator
// ----------------------------

const songs = [
  "No Body European Tour Intro",
  "A Marrow Escape",
  "The Final Pulse",
  "Shadow Over the Stage",
  "Encore: Lights Out",
];

function generateSetlist() {
  const shuffledSongs = songs.sort(() => Math.random() - 0.5);

  // This line updates the webpage by adding new HTML content using JavaScript.
  // Think of it like telling JavaScript: “Print this list onto the page.”
  document.getElementById("setlist").innerHTML = shuffledSongs
    .map((song) => `<li>${song}</li>`)
    .join("");
}

document
  .getElementById("generateSetlist")
  .addEventListener("click", generateSetlist);

// ----------------------------
// ⏳ Countdown Timer
// ----------------------------

const tourStart = new Date("2025-08-01T20:00:00");
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = tourStart - now;

  if (diff <= 0) {
    countdown.textContent = "The tour has started!";
    clearInterval(timer);
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.textContent = `⏰ ${hours}h ${minutes}m ${seconds}s until showtime`;
}

const timer = setInterval(updateCountdown, 1000);

// ----------------------------
// 🛠️ Feature Scaffolds
// ----------------------------

// 1️⃣ VIP Ticket Winner Generator
document.getElementById("vipWinner").innerHTML = `
    <h3>VIP Ticket Winner</h3>
    <button id="pickWinner">Pick Winner</button>
    <div id="winnerOutput"></div>
  `;

document.getElementById("pickWinner").addEventListener("click", () => {
  // Add your code here
});

// 2️⃣ Fan Favorite Showdown
document.getElementById("fanFavorite").innerHTML = `
    <h3>Fan Favorite Showdown</h3>
    <button id="vote">Vote</button>
    <div id="voteCount">Votes: 0</div>
  `;

document.getElementById("vote").addEventListener("click", () => {
  // Add your code here
});

// 3️⃣ Tour Date Spotlight
// Update the city list to use CTA buttons instead of list items
// We'll use button elements with a class for styling

document.getElementById("tourHighlight").innerHTML = `
  <h3>Tour Date Spotlight</h3>
  <div id="cityButtons">
    <button class="cta-city" id="cityOslo">Oslo</button>
    <button class="cta-city" id="cityBerlin">Berlin</button>
    <button class="cta-city" id="cityLondon">London</button>
  </div>
  <div id="tourInfo" style="margin-top: 1em;"></div>
`;

// Tour info texts for each city
const tourInfos = {
  Oslo: `🎤 Oslo Tour Date: July 14, 2025<br>📍 Venue: Oslo Spektrum<br>🕗 Time: Doors open at 6:30 PM<br>Oslo fans, we can’t wait to see you! Arrive early for exclusive meet & greet opportunities. Food trucks and photo booth outside the arena.`,
  Berlin: `🎤 Berlin Tour Date: July 10, 2025<br>📍 Venue: Mercedes-Benz Arena<br>🕗 Time: Doors open at 7:00 PM<br>Get ready for an unforgettable night in Berlin! Special guest DJ set before the main show. Merchandise available at the venue.`,
  London: `🎤 London Tour Date: July 20, 2025<br>📍 Venue: The O2 Arena<br>🕗 Time: Doors open at 7:30 PM<br>London, are you ready? Expect a surprise encore and limited edition tour posters. Public transport is recommended due to high demand.`,
};

// Function to show or hide tour info for a city
function toggleTourInfo(city) {
  const tourInfoDiv = document.getElementById("tourInfo");
  const btn = document.getElementById(`city${city}`);
  // If this city is already active, unselect it and hide info
  if (btn.classList.contains("active-city")) {
    btn.classList.remove("active-city");
    tourInfoDiv.innerHTML = "";
  } else {
    // Remove active from all, set this one as active, and show info
    document
      .querySelectorAll(".cta-city")
      .forEach((b) => b.classList.remove("active-city"));
    btn.classList.add("active-city");
    tourInfoDiv.innerHTML = tourInfos[city];
  }
}

// Show Oslo info by default when the page loads
// (If you want all to start unselected, comment out the next two lines)
toggleTourInfo("Oslo");

document.getElementById("cityOslo").addEventListener("click", () => {
  toggleTourInfo("Oslo");
});
document.getElementById("cityBerlin").addEventListener("click", () => {
  toggleTourInfo("Berlin");
});
document.getElementById("cityLondon").addEventListener("click", () => {
  toggleTourInfo("London");
});

// 4️⃣ On the Road Again
document.getElementById("nextTourStop").innerHTML = `
    <h3>On the Road Again</h3>
    <div id="nextStop"></div>
  `;

// This logic can run on page load or refresh
function displayNextTourStop() {
  // Add your code here
}

// 5️⃣ Entry Checkpoint
document.getElementById("emailCheck").innerHTML = `
    <h3>Entry Checkpoint</h3>
    <input type="email" id="emailInput" placeholder="Enter email">
    <button id="checkEmail">Check</button>
    <div id="emailResult"></div>
  `;

document.getElementById("checkEmail").addEventListener("click", () => {
  // Add your code here
});

// 6️⃣ Band Bio Toggle
document.getElementById("bioToggle").innerHTML = `
    <h3>Band Bio Toggle</h3>
    <button id="toggleBio">Show/Hide Bio</button>
    <p id="bio" style="display:none;">Skullcapz is a heavy metal band from Norway, known for their dark, intense sound and high-energy shows.</p>
  `;

document.getElementById("toggleBio").addEventListener("click", () => {
  // Add your code here
});
