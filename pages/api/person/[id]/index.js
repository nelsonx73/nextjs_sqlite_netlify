import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getPersonById(req, res) {
  const db = await open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "PUT") {
    const statement = await db.prepare(
      "UPDATE Person SET name = ?, email = ? WHERE id = ?"
    );
    const result = await statement.run(
      req.body.name,
      req.body.email,
      req.query.id
    );
    await result.finalize();
  }
  const row = await db.get("SELECT * FROM Person WHERE id = ?", [req.query.id]);
  res.status(200).json(row);
}
