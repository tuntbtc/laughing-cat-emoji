const emojiContainer = document.getElementById('emojiContainer');
const buttonContainer = document.getElementById('buttonContainer');

// Define paths for the emoji images
const emojiImages = {
  windows: 'images/windows.png',
  iphone: 'images/iphone.png',
  android: 'images/android.png'
};

// Function to create the big emoji
function createBigEmoji(selectedVersion) {
  emojiContainer.innerHTML = ''; // Clear existing emoji

  const emojiElement = document.createElement('img');
  emojiElement.classList.add('big-emoji');
  emojiElement.src = emojiImages[selectedVersion];
  emojiElement.alt = `${selectedVersion} emoji`;

  // Add click event listener to play random meow sound
  emojiElement.addEventListener('click', playRandomMeow);

  emojiContainer.appendChild(emojiElement);

  // Create the buttons for selecting the other versions
  createButtons(selectedVersion);
}

// Function to create buttons for the remaining emoji versions
function createButtons(selectedVersion) {
    buttonContainer.innerHTML = ''; // Clear existing buttons
  
    // Get the other two versions
    const otherVersions = Object.keys(emojiImages).filter(version => version !== selectedVersion);
  
    // Create a button for each remaining version
    otherVersions.forEach(version => {
      const capitalizedVersion = (version === 'iphone') ? 'iPhone' : version.charAt(0).toUpperCase() + version.slice(1);
      const button = document.createElement('button');
      button.classList.add('button');
      button.textContent = `${capitalizedVersion}`;
      button.addEventListener('click', () => createBigEmoji(version));
      buttonContainer.appendChild(button);
    });
  }
  

// Function to create and play a random meow sound
function playRandomMeow() {
  // List of available sound files
  const sounds = [
    'sounds/meow1.mp3',
    'sounds/meow2.mp3',
    'sounds/meow3.mp3',
    'sounds/meow4.mp3'
  ];
  
  // Select a random sound from the list
  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  const audio = new Audio(randomSound);
  
  audio.play();
}

// Initialize the emoji with the default version (Windows)
createBigEmoji('iphone');
