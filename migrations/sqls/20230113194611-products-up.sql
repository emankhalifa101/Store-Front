CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR (50) NOT NULL,
    price NUMERIC(15,2) NOT NULL,
    description VARCHAR(225) NOT NULL,
    category VARCHAR (50) NOT NULL
);