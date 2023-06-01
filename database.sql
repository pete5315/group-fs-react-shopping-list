-- CREATE DATABASE "shopping-list"

CREATE TABLE list (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "quantity" NUMERIC DEFAULT 1,
    "unit" VARCHAR(20) NOT NULL,
    "purchased" BOOLEAN DEFAULT FALSE
);

INSERT INTO list ("name", "quantity", "unit")
VALUES ('Apples', 5, 'lbs'), ('Bread', 1, 'loaf'), ('Milk', 1, 'gallon'), ('Sliced Almonds', 2, 'cups'), ('Bananas', 1, 'bunch');
