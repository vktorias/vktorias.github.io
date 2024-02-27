// Lyssna på tangenttryckningar på hela dokumentet
document.addEventListener('keydown', handleKeyDown);

// Definiera en variabel för att hålla spåret på vilka tangenttryckningar som gjorts
let keySequence = '';

// Funktion för att hantera tangenttryckningar
export function handleKeyDown(event) {
  // Lägg till det senaste tangenttrycket till keySequence
  keySequence += event.key;

  // Kontrollera om keySequence innehåller den angivna kombinationen
  if (keySequence.includes('1337')) {
    // Visa modal-popup med ett meddelande
    showModal('YAAY! Du hittade det super-duper-hemliga påskägget! GRATTIS');
    // Återställ keySequence efter visning av modal-popup
    keySequence = '';
  }
}

// Funktion för att visa modal-popup
function showModal(message) {
  // Skapa modal-element
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `<div class="modal-content">${message}</div>`;

  // Lägg till modal till body
  document.body.appendChild(modal);

  // Stäng modal när man klickar utanför
  modal.addEventListener('click', () => {
    modal.remove();
  });
}
