from functools import lru_cache

@lru_cache(maxsize=1024)
def compute_fibonacci(n: int) -> int:
    return n if n < 2 else compute_fibonacci(n - 1) + compute_fibonacci(n - 2)