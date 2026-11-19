DELETE t1 FROM team_users t1
INNER JOIN team_users t2
WHERE t1.id > t2.id AND t1.username = t2.username;