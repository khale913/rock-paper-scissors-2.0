// SELECTORS
const playButton = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const match = document.querySelector(".match");

const options = document.querySelectorAll(".options button");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const hands = document.querySelectorAll(".hands img");

const playerScore = document.querySelector(".player-score p");
const computerScore = document.querySelector(".computer-score p");

// EVENT LISTENERS

// FUNCTIONS
const game = () => {
  let pScore = 0;
  let cScore = 0;

  // Start the game
  const startGame = () => {
    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  // Play Match
  const playMatch = () => {
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    // Computer Options (random)
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // Computer Choice
        const computerNumber = Math.floor(
          Math.random() * computerOptions.length
        );
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          // here is where we compare the hands
          compareHands(this.textContent, computerChoice);

          //Update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        playerHand.src = `assets/rock.png`;
        computerHand.src = `assets/rock.png`;
        // update score
        updateScore();

        // animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    console.log(pScore, cScore);
  };

  // Function: compares the hands of you and computer to decide winner
  const compareHands = (playerChoice, computerChoice) => {
    // update text
    const winner = document.querySelector(".winner");
    // checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie!";
      return;
    }
    // check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins!";
        pScore++;
        updateScore();

        return;
      } else {
        winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }
    // check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }

    // check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  // call all the inner functions
  startGame();
  playMatch();
};

// Start the game function
game();
