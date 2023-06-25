function updateTime() {
    const birthDate = new Date("Your Girlfriend's Birthdate");
    const currentDate = new Date();
  
    const timeDiff = currentDate - birthDate;
  
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor(timeDiff / (1000 * 60));
    const seconds = Math.floor(timeDiff / 1000);
  
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  