public synchronized boolean allowRequest() {
    long now = System.currentTimeMillis();
    if (now - windowStart > 60_000) { count.set(0); windowStart = now; }
    return count.incrementAndGet() <= maxPerMinute;
}