import argparse
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt


def build_dashboard(input_path: str, output_path: str):
    df = pd.read_csv(input_path)

    fig, axes = plt.subplots(1, 3, figsize=(15, 4))

    monthly = df.groupby('month', as_index=False)['sales'].sum()
    sns.lineplot(data=monthly, x='month', y='sales', ax=axes[0])
    axes[0].set_title('Monthly Sales')

    by_cat = df.groupby('category', as_index=False)['sales'].sum()
    sns.barplot(data=by_cat, x='category', y='sales', ax=axes[1])
    axes[1].set_title('Sales by Category')
    axes[1].tick_params(axis='x', rotation=30)

    sns.histplot(data=df, x='sales', bins=20, kde=True, ax=axes[2])
    axes[2].set_title('Sales Distribution')

    plt.tight_layout()
    plt.savefig(output_path, dpi=150)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', required=True)
    parser.add_argument('--output', required=True)
    args = parser.parse_args()

    build_dashboard(args.input, args.output)
    print('dashboard saved')


if __name__ == '__main__':
    main()
