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
    crypto_df.to_csv("cleaned_data/crypto_data_cleaned.csv")


if __name__ == "__main__":
    main()