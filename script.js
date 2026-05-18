let caught = [false, false, false, false];
let totalCaught = 0;
let lastFishWasCaught = false;

function startFishing() {
  document.getElementById("screen1").classList.remove("active");
  document.getElementById("screen2").classList.add("active");
}

function catchFish(index) {
  if (caught[index - 1]) return;

  caught[index - 1] = true;
  totalCaught++;

  document.querySelectorAll(".fish")[index - 1].style.display = "none";

  // CHECK IF THIS IS THE LAST FISH
  lastFishWasCaught = (totalCaught === 4);

  let content = "";

  if (index === 1) {
    content = `<img src="card.png">`;
  }
  if (index === 2) {
    content = `<p>Happy birthday! 🎂<br><br><span style="font-size: 20px;">
                  I'm so glad I met you and that I've
                  gotten to spend my time with you. You make me better and 
                  want to BE better, and I hope I do the same for you. You
                  are intelligent, passionate, loyal, kind, and helpful, and 
                  I love all of these traits about you. I look
                  forward to meeting you in person soon (hopefully) and finally
                  getting to hug you for real.<br><br>I love you 💕 Amelia </p>`;
  }
  if (index === 3) {
    content = `<p>Your gift is a Resident Evil game<br>Just tell me which one you want
                  and I'll gift it to you on steam :)<br><br>
                  <span style="font-size: 15px;">(I was just gonna gift it to u as a normal
                  surprise but I wanna make sure it's one u want)</span></p>
                  <img src="present.gif">`;
  }
  if (index === 4) {
    content = `<p>I'm also giving u a pass to do anything you want for a day<br>
                  You can "use" it whenever, and we can do whatever
                  you want that day with zero complaints from me ❤️</p>
                  <img src="pass.jpg">`;
  }

  openModal(content);
}

function openModal(content) {
  document.getElementById("modal-body").innerHTML = content;
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");

  // ONLY trigger final screen if the LAST fish was just closed
  if (lastFishWasCaught) {
    setTimeout(() => {
      document.getElementById("finalScreen").classList.remove("hidden");
    }, 500); // short cinematic pause after closing X
  }
}

function restartGame() {
  caught = [false, false, false, false];
  totalCaught = 0;

  document.querySelectorAll(".fish").forEach(f => {
    f.style.display = "block";
  });

  document.getElementById("finalScreen").classList.add("hidden");
  document.getElementById("modal").classList.add("hidden");

  document.getElementById("screen1").classList.add("active");
  document.getElementById("screen2").classList.remove("active");
}
