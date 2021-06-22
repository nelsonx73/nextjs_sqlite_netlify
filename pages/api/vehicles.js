import sqlite from "sqlite";

export default async function getAllVehicles(req, res) {
  switch (req.method) {
    case "GET":
      const db = await sqlite.open("./mydb.sqlite");
      const vehicle = await db.all("SELECT * FROM Vehicle");
      res.status(200).json(vehicle);
      break;

    default:
      res.status(500).json({ message: "invalid method" });
      break;
  }
}
