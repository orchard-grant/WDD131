const character = {
  name: "Aria Stormblade",
  class: "Warrior",
  level: 1,
  health: 100,
  image: "snortleblat.webp",
  
  attacked() {
    this.health -= 20;
    if (this.health <= 0) {
      this.health = 0;
      alert(`${this.name} has died.`);
    }
    updateDisplay();
  },

  levelUp() {
    this.level += 1;
    updateDisplay();
  }
};

function updateDisplay() {
  document.getElementById("character-image").src = character.image;
  document.getElementById("character-name").textContent = character.name;
  document.getElementById("character-class").textContent = character.class;
  document.getElementById("character-level").textContent = character.level;
  document.getElementById("character-health").textContent = character.health;
}

document.getElementById("attack-btn").addEventListener("click", () => character.attacked());
document.getElementById("levelup-btn").addEventListener("click", () => character.levelUp());

updateDisplay();