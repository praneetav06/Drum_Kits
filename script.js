const kits = ["crash", "kick", "snare", "tom"];

const containerEL = document.querySelector(".container");

kits.forEach((kit) => {
  const btnEl = document.createElement("button"); //create button dynamically
  btnEl.classList.add("btn"); //add the class btn for styling
  btnEl.innerText = kit; //add the name of the drum for every kit in the array by traversing using the for each loop
  btnEl.style.backgroundImage = "url(images/" + kit + ".png)"; //add image of every drum
  containerEL.appendChild(btnEl); //append in the container
  const audioEl = document.createElement("audio"); // create audio tag for every kit
  audioEl.src = "sounds/" + kit + ".mp3"; // create dynamic path for every sound
  containerEL.appendChild(audioEl); // append in the container
  btnEl.addEventListener("click", () => {
    audioEl.play();
  });
  window.addEventListener("keydown", (event) => {
    // console.log(event.key);
    if (event.key === kit.slice(0, 1)) {
      // first letter of the kit from the keyboard
      audioEl.play();
      btnEl.style.transform = "scale(0.9)";
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});
