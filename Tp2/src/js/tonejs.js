document.addEventListener("DOMContentLoaded", () => {
  if (!window.Tone) return;

  let audioOK = false;

  const synth = new Tone.Synth().toDestination();
  synth.volume.value = -8;

  const membrane = new Tone.MembraneSynth().toDestination();
  membrane.volume.value = -12;

  async function activerAudio() {
    if (audioOK) return;
    await Tone.start();
    audioOK = true;
  }

  document.body.addEventListener("click", activerAudio, { once: true });

  // SON CHANGEMENT PERSONNAGES
  function sonScouter() {
    if (!audioOK) return;
    synth.triggerAttackRelease("C5", "32n");
    setTimeout(() => synth.triggerAttackRelease("E5", "32n"), 50);
  }

  // SON TRANSFORMATION (popup)
  function sonTransformation() {
    if (!audioOK) return;
    ["C4", "E4", "G4", "C5", "E5", "G5"].forEach((note, i) => {
      setTimeout(() => synth.triggerAttackRelease(note, "64n"), i * 100);
    });
    setTimeout(() => membrane.triggerAttackRelease("C2", "2n"), 600);
  }

  document.querySelectorAll(".character-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activerAudio();
      sonScouter();
    });
  });

  window.playDBZSound = (type) => {
    activerAudio();
    if (type === "transformation") sonTransformation();
  };
});