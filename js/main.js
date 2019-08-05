const countdown = document.querySelector(".countdown");

// Set Launch Date
const launchDate = new Date("Jan 1, 2020 13:00:00").getTime();

// Update every second
const intvl = setInterval(() => {
  // Get today's date and time (ms)
  const now = new Date().getTime();

  // Distance from now to launch date
  const distance = launchDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
    <div>${days}<spn>days</spn></div>
    <div>${hours}<spn>Hours</spn></div>
    <div>${minutes}<spn>Minutes</spn></div>
    <div>${seconds}<spn>Seconds</spn></div>
  `;

  // If launch date passed
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
    countdown.style.color = "#17a2b8";
    countdown.innerHTML = "Launched!";
  }
}, 1000);
