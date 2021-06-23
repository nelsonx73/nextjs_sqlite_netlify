import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getVehicleById(req, res) {
  const db = await open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });

  switch (req.method) {
    case "GET":
      const vehicle = await db.get("SELECT * FROM Vehicle WHERE id = ?", [
        req.query.id,
      ]);
      res.status(200).json(vehicle);
      break;

    default:
      res.status(500).json({ message: "invalid method" });
      break;
  }
}
