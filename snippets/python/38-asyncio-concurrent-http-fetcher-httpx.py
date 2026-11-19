import asyncio, httpx

async def fetch_all(urls: list[str]):
    async with httpx.AsyncClient(timeout=10.0) as client:
        tasks = [client.get(u) for u in urls]
        return await asyncio.gather(*tasks, return_exceptions=True)