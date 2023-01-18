CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(30) UNIQUE,
    user_name VARCHAR(30) NOT NULL,
    f_name VARCHAR(20) NOT NULL,
    l_name VARCHAR(20) NOT NULL,
    password VARCHAR(300) NOT NULL
);
