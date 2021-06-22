import sqlite from "sqlite";

export default async function getPeople(req, res) {
  switch (req.method) {
    case "GET":
      const db = await sqlite.open("./mydb.sqlite");
      const people = await db.all("SELECT * FROM Person");
      res.status(200).json(people);
      break;

    default:
      res.status(500).json({ message: "invalid method" });
      break;
  }
}
