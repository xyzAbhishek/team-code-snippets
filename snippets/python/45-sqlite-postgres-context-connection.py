import sqlite3

with sqlite3.connect("app.db") as conn:
    cur = conn.execute("SELECT id, title FROM items WHERE active = ?", (1,))
    rows = cur.fetchall()