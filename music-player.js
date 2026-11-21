(() => {
  const audio = document.getElementById('birthdayAudio');
  const button = document.getElementById('musicToggle');
  const label = document.getElementById('musicLabel');
  if (!audio || !button || !label) return;

  audio.volume = 0.45;
  button.addEventListener('click', async () => {
    if (audio.paused) {
      try {
        await audio.play();
        button.setAttribute('aria-pressed', 'true');
        label.textContent = 'Pause music';
        button.classList.add('is-playing');
      } catch (error) {
        label.textContent = 'Tap to play music';
      }
    } else {
      audio.pause();
      button.setAttribute('aria-pressed', 'false');
      label.textContent = 'Play birthday music';
      button.classList.remove('is-playing');
    }
  });
})();
