import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getAllVehiclesByPersonId(req, res) {
  const db = await open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  switch (req.method) {
    case "GET":
      const rows = await db.all(
        "SELECT * FROM Vehicle as a, Person as b WHERE a.ownerId = ? and a.ownerId = b.id",
        [req.query.id]
      );

      res.status(200).json(rows);
      break;

    default:
      res.status(500).json({ message: "invalid method" });
      break;
  }
}
