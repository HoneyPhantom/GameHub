/**
 * DATABASE: UPLOADED GAMES
 * Add your games here. The script handles the rest.
 */
const myUploads = [
    {
        title: "Max finder",
        category: "Puzzle",
        thumbnail: "uploads/images/Max_finder_thumbnail.png", // Path to your preview image
        path: "uploads/games/Max_finder/htp.html" // Path to your game file
    }
];

/**
 * CORE SYSTEM LOGIC
 */
const grid = document.getElementById('game-grid');
const library = document.getElementById('library-view');
const stage = document.getElementById('stage-view');
const mount = document.getElementById('game-mount');
const titleDisplay = document.getElementById('active-game-title');

// 1. Initialize the Hub
function initHub() {
    grid.innerHTML = ''; // Clear existing
    myUploads.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <div class="card-preview" style="background-image: url('${game.thumbnail}')"></div>
            <div class="card-details">
                <h3>${game.title}</h3>
                <p>${game.category}</p>
            </div>
        `;
        
        card.addEventListener('click', () => launchGame(game));
        grid.appendChild(card);
    });
}

// 2. Launch Game
function launchGame(game) {
    library.classList.add('hidden');
    stage.classList.remove('hidden');
    
    titleDisplay.textContent = game.title.toUpperCase();
    titleDisplay.style.fontFamily = 'Orbitron';
    titleDisplay.style.color = '#FF4500';

    // Inject the game via Iframe
    mount.innerHTML = `<iframe src="${game.path}" allowfullscreen></iframe>`;
}

// 3. Exit Game
function exitToHub() {
    stage.classList.add('hidden');
    library.classList.remove('hidden');
    mount.innerHTML = ''; // Stop the game process
}

// Run on Load
document.addEventListener('DOMContentLoaded', initHub);