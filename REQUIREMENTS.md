# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- showProduct 
- showAll
- createProduct [token required]

#### Users
- selectUser [token required]
- selectAllUsers [token required]
- addNewUser [token required]
- updateUser [token required]
- deleteUser [token required]
- authenticateUser

#### Orders
- Current Order by user (args: user id)[token required]
- get all orders
- create new order

#### Product per order 
- Completed  Orders and product of each order by user (args: user id)[token required]
- create 


## Data Shapes
#### Product
-  id
- name
- price
- category
- description

#### User
- id
- f_name
- l_name
- user_name
- email
- password

#### Orders
- id
- user_id
- status of order (active or complete)

#### Products_order
- id
- order_id
- product_id
- quantity
- products

##Data Schema
#### users
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(30) unique,
    user_name VARCHAR(30) NOT NULL,
    f_name VARCHAR(20) NOT NULL,
    l_name VARCHAR(20) NOT NULL,
    password VARCHAR(300) NOT NULL
);

#### Products 
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR (50) NOT NULL,
    price NUMERIC(15,2) NOT NULL,
    description VARCHAR(225) NOT NULL,
    category VARCHAR (50) NOT NULL
);

#### Orders
CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    status VARCHAR(100),
    user_id BIGINT REFERENCES users(id) NOT NULL
)

#### Products orders 
CREATE TABLE products_order(
    id SERIAL PRIMARY KEY,
    order_id BIGINT REFERENCES orders(id) NOT NULL,
    product_id BIGINT REFERENCES products(id) NOT NULL,
    quantity INT
)
