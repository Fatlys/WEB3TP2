// DETECTION DES PERSONNAGE

document.addEventListener("DOMContentLoaded", () => {
  const transformModal = new bootstrap.Modal(document.getElementById('transformModal'));

  const detectionMessages = {
    "goku": { name: "GOKU DETECTED", emoji: "⚡🔥💥", color: "#ff8c00" },
    "vegeta": { name: "VEGETA DETECTED", emoji: "👑⚡💫", color: "#0066ff" },
    "frieza": { name: "FRIEZA DETECTED", emoji: "👹✨💛", color: "#9900ff" }
  };

  function showDetection() {
    const activeBtn = document.querySelector(".character-btn.active");
    if (!activeBtn) return;
    
    const charId = activeBtn.dataset.char;
    const detection = detectionMessages[charId];
    if (!detection) return;

    const transformName = document.getElementById("transform-name");
    transformName.textContent = detection.name;
    transformName.style.color = detection.color;
    document.querySelector("#transformModal .modal-body div").textContent = detection.emoji;

    if (window.playDBZSound) window.playDBZSound("transformation");
    transformModal.show();

    // BARRE PROGRESSION DU POP UP
    const progressBar = document.getElementById("power-progress");
    progressBar.style.width = "0%";
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      progressBar.style.width = progress + "%";
      if (progress >= 100) clearInterval(interval);
    }, 15);
  }

  window.showDetection = showDetection;
});

