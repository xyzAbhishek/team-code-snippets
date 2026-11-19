import pandas as pd

total = 0
for chunk in pd.read_csv("large_events.csv", chunksize=50_000):
    total += chunk[chunk["status"] == "SUCCESS"]["amount"].sum()
print(total)