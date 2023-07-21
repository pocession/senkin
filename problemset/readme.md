# Idiom Homophoney Test Script

The "generate_problem_set_byQuery.py" script randomly selects a word from a list of high-frequency idioms and cross-queries the homophonic word in a full dictionary dataset.

## Usage

To run the script, follow these steps:

1. Prepare the Data Files:

   - Create a CSV file containing the list of high-frequency idioms. The file should have a column named 'idiom' containing the idioms.
   - Create another CSV file containing the full dictionary data. Ensure the file has the following columns: 'word', 'word_num', 'homophoney', 'pronunciation', and 'han_pronunciation' representing words, word count, homophony, pronunciation, and Chinese pronunciation, respectively.

2. Running the Script:

   - Open your terminal or command prompt.
   - Navigate to the directory where the script is located.
   - Execute the script by providing the file paths of the high-frequency idioms CSV and full dictionary CSV as command-line arguments. For example:
     ```
     python generate_problem_set_byQuery.py path/to/idiom_db_highFQ.csv path/to/dict_revised_2015_20230626.csv
     ```

3. Output:
   - The script will generate a test problem set of 120 questions.
   - Each question will include a test string (idiom), a randomly selected word from the test string, and a response word (homophonic word) from the full dictionary dataset.
   - The output will be a list of JavaScript array formats representing the problem sets. Each element in the list contains the test string, test word, and response word in the following format: `[<test_string>, <test_word>, <response_word>, <answer_index>]`. The `answer_index` represents the position of the response word (0 for before the test word, 1 for after the test word).

## Requirements

To run this script, you need the following:

- Python 3.x
- pandas library (to handle data in tabular form)

## Note

This script assumes you have the required CSV files containing high-frequency idioms and the full dictionary data. Ensure the files are in the same directory as the script or provide the appropriate file paths as command-line arguments.

Happy testing!
