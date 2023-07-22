
import random
import pandas as pd
import sys
import numpy as np

# This script "generate_problem_set_byQuery.py" is to randomly select a word from high-frequency idioms
# And cross-query the homophoney word in full dictionary

# read high-frequency idioms
idiom_highFQ_path = str(sys.argv[1])
idiom_highFQ = pd.read_csv(idiom_highFQ_path)

# read full dictionary
dict_all_path = str(sys.argv[2])
dict_all = pd.read_csv(dict_all_path)

# filter vocabularies containing only one word
def get_one_word_subset(dict_all):
    dict_subset = dict_all.iloc[:,[0,2,7,8,11]]
    mapping = {dict_subset.columns[0]: 'word', dict_subset.columns[1]: 'word_num',
          dict_subset.columns[2]: 'homophoney', dict_subset.columns[3]: 'prounciation',
          dict_subset.columns[4]: 'han_prounciation'}
    dict_subset = dict_subset.rename(columns=mapping)
    dict_oneWord = dict_subset[dict_subset['word_num'] == 1]
    return dict_oneWord

dict_oneWord = get_one_word_subset(dict_all)

# generate test string

def generate_test_string(idiom_highFQ):
    # get the selected idiom
    idiom_index = random.randint(0, len(idiom_highFQ)-1)
    test_string = idiom_highFQ.iloc[idiom_index,:]['idiom']
    test_index = random.randint(0, len(test_string)-1)
    test_word = test_string[test_index]
    return test_string, test_word, test_index

def get_response(dict_oneWord, test_word):
    query = dict_oneWord[dict_oneWord['word'] == test_word]
    query = query[query['homophoney'] <= 1]
    query = query.iloc[0,4]

    response = dict_oneWord[dict_oneWord['han_prounciation'] == query]
    response_index = random.randint(0, len(response)-1)
    response = response.iloc[response_index,:]
    response = response['word']
    return response

# store the test string, test word, and the response as JavaScript array format
def get_output_string(response, test_string, test_index, test_word):
    response_word = response
    if test_word != response_word:
        # get the string used in problem set (JS array format)
        test_list = list(test_string)
        output_str = "["
        answer_index = (random.randint(1, 2) - 1)
        for i in range(len(test_list)):
            if i == test_index:
                if answer_index == 0:
                    output_str = output_str + "[" + "'" + test_list[i] + "'" + "," + "'" + response_word + "'" + "," + str(answer_index) + "],"
                else:
                    output_str = output_str + "[" + "'" + response_word + "'" + "," + "'" + test_list[i] + "'" + "," + str(answer_index) + "],"
            else:
                output_str = output_str + "'" + test_list[i] + "'" + ","
        output_str = output_str + "]"
        return output_str


# loop the functions to generate problem set

output_list = []
for i in range(120):
    test_string, test_word, test_index = generate_test_string(idiom_highFQ)
    response = get_response(dict_oneWord, test_word)
    output_str = get_output_string(response, test_string, test_index, test_word)
    if output_str != None:
        output_list.append(output_str)
    
output_list
print ('%s' % ', '.join(map(str, output_list)))