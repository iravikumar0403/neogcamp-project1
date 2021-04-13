var questions = [
  {
    question: "Hindi Divas is Celebrated on?",
    options: ["14th September", "12th April", "10th April", "14th December"],
    ans: 0,
  },
  {
    question:
      "Which city hosts 'Kala Ghoda Art' festival in February every year",
    options: ["Mumbai", "Jaipur", "Kolkata", "Bengaluru"],
    ans: 0,
  },
  {
    question: "Which State is known as India's Spice Garden?",
    options: ["Assam", "Kerala", "Karnataka", "Andra Pradesh"],
    ans: 1,
  },
  {
    question: "On which river bank is Goa Located?",
    options: ["Ganga", "Mandovi", "Gomati", "Sabarmati"],
    ans: 1,
  },
  {
    question: "Which is India's first artificial satellite?",
    options: ["INSAT", "Aryabhata", "Bhaskara", "Rohini"],
    ans: 1,
  },
  {
    question: "The first IIT established in 1951, known as?",
    options: ["IIT Delhi", "IIT Kanpur", "IIT Kharagpur", "IIT Madras"],
    ans: 2,
  },
  {
    question: "The value of 'pi' was first calculated by Indian mathematician?",
    options: ["Varahamihira", "Aryabhata", "Panini", "Bhudhayana"],
    ans: 3,
  },
  {
    question: "Sanskrit is official language of",
    options: ["Bihar", "Uttar Pradesh", "Uttarakhand", "Madhya Pradesh"],
    ans: 2,
  },
  {
    question:
      "In which year was the capital of India shifted from Calcutta to Delhi?",
    options: ["1918", "1907", "1911", "1916"],
    ans: 2,
  },
  {
    question:
      "Which Indian telecom company first provided the 3g service in India",
    options: ["airtel", "Aircel", "Reliance", "MTNL"],
    ans: 3,
  },
];

var scores = {
  Ravi: 7,
  Sachin: 8,
  Nitin: 5,
  Ritesh: 2,
};

var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;
var flag = false;

function play() {
  var playerName = readlineSync.question(
    chalk.yellow("Enter your name to get started: ")
  );

  var greetMsg = chalk.green("Hello " + playerName + ", Let's play the quiz.");

  var instructions =
    "\nYou will get 2 points for every correct answer and 1 point will be deducted for each wrong answer\n\n";

  console.log(greetMsg, instructions);

  console.log(chalk.bgCyan("Press Y to get started"));

  if (readlineSync.keyInYN("Press")) {
    for (var i = 0; i < questions.length; i++) {
      quizQuestion(questions[i]);
    }
  } else {
    console.log("You pressed No. Please refresh the page if you want to play.");
    return;
  }
  if (checkHighScore()) {
    console.log(chalk.bgGreen("You've scored a High Score"));
  }
  console.log("Your Score is " + score + "/20");
  console.log("Thank you for playing!!");
}

function quizQuestion(q) {
  console.log("\n\n" + q.question);
  var a = readlineSync.keyInSelect(q.options, "Choose from ");
  if (a === q.ans) {
    console.log(chalk.green("Your answer is correct"));
    score = score + 2;
  } else {
    console.log(chalk.red.bold("Oops! Thats a wrong answer."));
    console.log(chalk.bgCyan("The correct answer is " + q.options[q.ans]));
    score--;
  }
}

function checkHighScore() {
  for (var item in scores) {
    if (score > scores[item]) {
      return true;
    }
  }
  return false;
}

play();
