@Scheduled(cron = "0 0 2 * * *", zone = "Asia/Kolkata")
public void purgeExpiredTokens() {
    int deleted = tokenRepo.deleteByExpiresAtBefore(LocalDateTime.now());
    log.info("Purged {} expired tokens", deleted);
}