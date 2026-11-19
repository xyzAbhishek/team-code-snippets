import time
from contextlib import contextmanager

@contextmanager
def timer(label="block"):
    t0 = time.perf_counter()
    try: yield
    finally: print(f"{label}: {(time.perf_counter() - t0)*1000:.2f} ms")