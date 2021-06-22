import { NextApiRequest, NextApiResponse } from "next";
import sqlite from "sqlite";

export default async function getVehicleById(req, res) {
  switch (req.method) {
    case "GET":
      const db = await sqlite.open("./mydb.sqlite");
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
