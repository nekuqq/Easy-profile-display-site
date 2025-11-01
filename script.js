 /* :) */
const texts = [
  "Hi, I'm nekuq.",
  "I'm 13 now. ⍨",
  "made of 「Raccoon」",
  "TikTok id @nekuqfn",
  "Discord id @nekuq",
  "TikTok id @nekuqfn"
 
];

const typewriter = document.getElementById("typewriter");
let textIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  const current = texts[textIndex];

  if (typing) {
    if (charIndex < current.length) {
      typewriter.textContent += current.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 80);
    } else {
      typing = false;
      setTimeout(typeEffect, 1500);
    }
  } else {
    if (charIndex > 0) {
      typewriter.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 40);
    } else {
      typing = true;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeEffect, 400);
    }
  }
}

typeEffect();
