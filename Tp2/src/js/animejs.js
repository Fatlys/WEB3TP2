document.addEventListener("DOMContentLoaded", () => {
  if (!window.anime) return;

  // ANIMATION SURVOL BOUTONS
  document.querySelectorAll(".character-btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => anime({ targets: btn, scale: 1.05, duration: 200, easing: "easeOutQuad" }));
    btn.addEventListener("mouseleave", () => anime({ targets: btn, scale: 1, duration: 200, easing: "easeOutQuad" }));
  });

  // ANIMATION LOCK TARGET
  document.getElementById("lock-target").addEventListener("click", function() {
    const lockSound = document.getElementById("lock-sound");
    if (lockSound) {
      lockSound.currentTime = 0;
      lockSound.play();
      lockSound.addEventListener("ended", () => { if (window.showDetection) window.showDetection(); }, { once: true });
    }
    
    anime({ targets: ".crosshair", scale: [1, 1.5, 1], rotate: "1turn", duration: 500, easing: "easeInOutQuad" });
    anime({ targets: ".character-img.active", scale: [1, 1.1, 1], duration: 300 });
  });
});