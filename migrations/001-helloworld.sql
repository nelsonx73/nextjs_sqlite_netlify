-- Up
CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);

CREATE TABLE Vehicle (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);


INSERT INTO Person (name, email) values ("Nelson", "nelson@gmail.com");
INSERT INTO Person (name, email) values ("Ybert", "ybert@gmail.com");

INSERT INTO Vehicle (brand, model, ownerId) values ('audi','R8',1);
INSERT INTO Vehicle (brand, model, ownerId) values ('toyota','camry',1);
INSERT INTO Vehicle (brand, model, ownerId) values ('mercedes','Benz',2);

-- Down
DROP TABLE Person;
DROP TABLE Vehicle