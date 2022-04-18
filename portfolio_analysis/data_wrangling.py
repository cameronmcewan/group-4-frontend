import pandas as pd
from os import listdir
from os.path import isfile, join
import re


def get_close_data(files):
    crypto_df = pd.DataFrame()  # Instantiate crypto df

    # Bitcoin has the longest history so extract this date column
    crypto_df['Date'] = pd.read_csv("data/Binance_BTCUSDT_d.csv", skiprows=1)['date']

    for file in files:
        currency_pair = re.search('_(.*)_', file)  # Use Regex to select data between underscores (i.e., pair)
        df = pd.read_csv("data/" + file, skiprows=1)  # Skiprows because first row is a disclaimer
        crypto_df[currency_pair[0]] = df['close']  # Select close price information and add to 'crypto_df'

    return crypto_df


def remove_NaN_rows(df):
    return df.dropna(axis=0)


def train_test_split(df, test_size):
    """ Generates train-test split files """
    num_rows = df.shape[0]
    split_idx = int(num_rows * test_size)
    train_df = df[0:split_idx]
    test_df = df[split_idx:]

    return train_df, test_df


def main():
    """
    1. Loops over all files in data folder
    2. Accesses close data for each currency pair and stores in master df
    3. Removes rows with NaN values
    4. Saves cleaned file to "cleaned_data/crypto_data_cleaned.csv"
    """
    mypath = "data/"
    csv_files = [f for f in listdir(mypath) if isfile(join(mypath, f))]
    crypto_df = get_close_data(csv_files)
    crypto_df = remove_NaN_rows(crypto_df)

    crypto_df = crypto_df.sort_values(by='Date')  # Sorted dates to be chronological
    crypto_df = crypto_df.reset_index(drop=True)

    crypto_df.to_csv("cleaned_data/crypto_data_cleaned.csv")

    #  Train test split of 80:20
    train_df, test_df = train_test_split(crypto_df, test_size=0.8)

    train_df.to_csv("cleaned_data/crypto_data_cleaned_train.csv")
    test_df.to_csv("cleaned_data/crypto_data_cleaned_test.csv")


if __name__ == "__main__":
    main()