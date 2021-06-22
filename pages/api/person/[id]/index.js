import { NextApiRequest, NextApiResponse } from "next";
import sqlite from "sqlite";

export default async function getPersonById(req, res) {
  const db = await sqlite.open("./mydb.sqlite");
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
