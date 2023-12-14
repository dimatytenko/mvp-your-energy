const texts = ['#Sport', '#Healthy', '#Workout', '#Diet'];
const interval = 100;
const paragraphElements = document.querySelectorAll('.hero-item-text');
let currentIndex = 0;

function displayTextByCharacter() {
  if (currentIndex < texts.length) {
    const text = texts[currentIndex];
    const paragraph = paragraphElements[currentIndex];

    let charIndex = 0;
    const timer = setInterval(function () {
      if (charIndex < text.length) {
        paragraph.textContent += text[charIndex];
        charIndex++;
      } else {
        clearInterval(timer);
        currentIndex++;
        setTimeout(displayTextByCharacter, interval);
      }
    }, interval);
  }
}

displayTextByCharacter();
