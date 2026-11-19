import logging, json, sys

class JsonFormatter(logging.Formatter):
    def format(self, record):
        return json.dumps({"level": record.levelname, "msg": record.getMessage(), "module": record.module})

handler = logging.StreamHandler(sys.stdout)
handler.setFormatter(JsonFormatter())