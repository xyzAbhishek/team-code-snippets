import time, functools

def retry(times=3, delay=1.0):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(1, times + 1):
                try: return func(*args, **kwargs)
                except Exception:
                    if attempt == times: raise
                    time.sleep(delay * (2 ** (attempt - 1)))
        return wrapper
    return decorator