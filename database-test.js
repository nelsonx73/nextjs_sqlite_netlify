const sqlite = require("sqlite");

async function setup() {
  const db = await sqlite.open("./mydb.sqlite");
  await db.migrate({ force: "last" });

  const people = await db.all("SELECT * FROM Person");
  console.log("All", JSON.stringify(people, null, 2));

  const vehicle = await db.all("SELECT * FROM Vehicle");
  console.log("All", JSON.stringify(vehicle, null, 2));
}

setup();
