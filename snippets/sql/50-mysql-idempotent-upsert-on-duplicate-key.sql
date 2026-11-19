INSERT INTO daily_metrics (metric_date, total_copies)
VALUES (CURDATE(), 1)
ON DUPLICATE KEY UPDATE total_copies = total_copies + 1;