#!/usr/bin/env bash
set -euo pipefail
FILE="backup_$(date +%F_%H%M).sql.gz"
docker exec snippet-mysql mysqldump -u root -prootpassword snippet_manager_db | gzip > "$FILE"
echo "Saved $FILE"