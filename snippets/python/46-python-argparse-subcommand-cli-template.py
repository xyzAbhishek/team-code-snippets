import argparse

parser = argparse.ArgumentParser(description="Project CLI")
parser.add_argument("--env", choices=["dev", "prod"], default="dev")
args = parser.parse_args()
print(f"Running in {args.env}")