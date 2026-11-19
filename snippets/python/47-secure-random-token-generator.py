import secrets

api_key = secrets.token_urlsafe(32)
otp_code = f"{secrets.randbelow(1000000):06d}"