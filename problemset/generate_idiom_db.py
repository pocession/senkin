# This script is to generate idiom for problem set
import pandas as pd
import sys

def get_idioms(idiom_path,FQ_cutoff):

    idiom_all = pd.read_csv(idiom_path,delimiter=",",skipinitialspace=True,index_col=None)
    idiom_all = idiom_all.iloc[:,[0,1,2,3]]
    print("The original data contains rows and columns: ", idiom_all.shape)
    idiom_all.head()

    idiom_all['length'] = idiom_all['idiom'].str.len()
    idiom_all = idiom_all[idiom_all['length'] == 4]
    print("Now filter idioms containing four words")

    print("Now clean the data, removing rows with non-numeric frequency")
    idiom_all_clean = idiom_all[idiom_all['frequency'] != '[AC]:成語典']
    print("The clean data contains rows and columns: ", idiom_all_clean.shape)

    idiom_all_clean['frequency'] = pd.to_numeric(idiom_all_clean['frequency'])
    idiom_all_clean_highFQ = idiom_all_clean[idiom_all_clean['frequency'] > FQ_cutoff]
    print("The high-frequency data contains rows and columns: ", idiom_all_clean_highFQ.shape)

    fname = "idiom_db_subset_FQ_" + str(FQ_cutoff) +".csv"

    idiom_all_clean_highFQ.to_csv(fname)

idiom_path = sys.argv[1]
FQ_cutoff = int(sys.argv[2])

get_idioms(idiom_path,FQ_cutoff)