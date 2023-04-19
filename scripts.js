const truthBtn = document.getElementById("truthBtn");
const dareBtn = document.getElementById("dareBtn");
const refreshBtn = document.getElementById("refreshBtn");
const generatedContent = document.getElementById("generatedContent");

const truthQuestions = [
  "What is your biggest fear?",
  "What is your most embarrassing moment?",
  "Who do you have a secret crush on?",
  "What is the one thing you would never do for money?",
  "What is your guilty pleasure?",
  "What is your favorite movie that most people haven't seen?",
  "If you could switch lives with someone for a day, who would it be?",
  "What is the one thing you've done that you wish you could undo?",
  "What is the biggest lie you've ever told?",
  "What is your most awkward dating experience?",
  "What is the most embarrassing thing you've done while drunk?",
  "What is your most treasured memory?",
  "What is the biggest misconception people have about you?",
  "If you could change one thing about your appearance, what would it be?",
  "What is something you've never told anyone?",
  "What is your biggest regret?",
  "Who is your celebrity crush?",
  "What is your most embarrassing childhood memory?",
  "What is your favorite guilty pleasure song?",
  "What is the craziest thing you've done for love?",
];

const dareChallenges = [
  "Do a silly dance for 30 seconds.",
  "Sing your favorite song out loud.",
  "Imitate your favorite celebrity for one minute.",
  "Eat a spoonful of hot sauce.",
  "Post an embarrassing photo of yourself on social media.",
  "Reveal the last text message you sent.",
  "Sing your favorite song in a funny voice.",
  "Swap clothes with someone of the opposite gender.",
  "Tell a joke until someone laughs.",
  "Try to balance a spoon on your nose for 30 seconds.",
  "Use a cheesy pick-up line on a stranger.",
  "Wear your clothes inside out for the rest of the game.",
  "Do a runway walk outside on the sidewalk.",
  "Do your best dance moves in slow motion.",
  "Give someone in the group a piggyback ride.",
  "Perform a dramatic monologue from a movie or play.",
  "Do a handstand for as long as you can.",
  "Make up a rap about someone in the group.",
  "Try to lick your elbow.",
  "Act like a dog and pretend to fetch a ball.",
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

truthBtn.addEventListener("click", () => {
  generatedContent.textContent = getRandomItem(truthQuestions);
  refreshBtn.classList.remove("hidden");
});

dareBtn.addEventListener("click", () => {
  generatedContent.textContent = getRandomItem(dareChallenges);
  refreshBtn.classList.remove("hidden");
});

refreshBtn.addEventListener("click", () => {
  if (generatedContent.textContent.includes("?")) {
    generatedContent.textContent = getRandomItem(truthQuestions);
  } else {
    generatedContent.textContent = getRandomItem(dareChallenges);
  }
});
