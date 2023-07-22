# Senkin (千金)

This is the repository for the **Senkin (千金)** project. It's a JavaScript-based game that challenges players to select the correct Chinese word from multiple options within a time limit. The game aims to improve vocabulary and language recognition skills in Chinese while providing an enjoyable gaming experience.

## Technologies Used

- HTML
- CSS
- JavaScript
- Python

## Getting Started

To run the game locally, follow these steps:

1. Clone the repository: `git clone https://github.com/pocession/senkin`
2. Navigate to the project directory: `cd senkin`
3. Open the `index.html` file in a web browser.

## How to Play

1. **Opening the Game**:

   - Open the `index.html` file in your web browser.
   - The game interface will be displayed, showing the problem set, score, and buttons.

2. **Game Rules**:

   - The game consists of a series of questions, and each question includes an idiom and multiple homophonic words.
   - Your task is to identify the correct homophonic word for each idiom.
   - Click on the homophonic word that you think is correct. The selected word will turn blue to indicate your choice.

3. **Scoring**:

   - For each correct answer, you earn one point.
   - For each incorrect answer, you lose one point.
   - Your total score is displayed at the top-right corner of the game interface.

4. **Game Completion**:

   - Once you have answered 10 the questions, the game will be marked as finished.

5. **Reloading the Game**:
   - If you wish to restart the game, click the "Reload" button. This will reset the game and clear your previous score.

## How the Problem Set is Generated

The problem set is generated using a Python script called [generate_problem_set_byQuery.py](./problemset/generate_problem_set_byQuery.py). This script randomly selects idioms and their corresponding homophonic words from a predefined dataset. The dataset contains various idioms and homophonic words stored in a specific format.

## Files and Structure

- `index.html`: The main HTML file for the game user interface.
- `style.css`: The CSS file for styling the game interface.
- `js/script.js`: The JavaScript file containing game logic and functionality.
- `.problemset/generate_problem_set_byQuery.py`: The Python script to generate the problem set.

## Additional Features

- The game dynamically generates random word combinations for each question.
- The selected word is highlighted in different colors to indicate correctness.
- The game includes a countdown timer to create a sense of urgency.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to [公視](https://www.pts.org.tw/2021wonderful_word/) for inspiration for this project.

## Screenshots

<p float="left">
  <img src="./screenshot/next1.png" width="300" />
  <img src="./screenshot/next2.png" width="300" /> 
  <img src="./screenshot/reload.png" width="300" />
</p>
