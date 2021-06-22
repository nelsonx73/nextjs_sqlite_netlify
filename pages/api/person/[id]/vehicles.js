import { NextApiRequest, NextApiResponse } from "next";
import sqlite from "sqlite";

export default async function getAllVehiclesByPersonId(req, res) {
  switch (req.method) {
    case "GET":
      const db = await sqlite.open("./mydb.sqlite");
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
