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


## API Postman collection

### Users

- Index - **`token required`**
  - HTTP verb `GET`
  - Endpoint:- `/api/users/`
  - Request Body

    ```json
      N/A
    ```

  - Response Body -- `Array of user objects`

    ```json
      {
        "status": "success",
        "data": {
          "users": [
            {
              "id": 1,
              "email": "test@test.com",
              "user_name": "test1 test",
              "f_name": "test1",
              "l_name": "test"
            }
          ]
        },
        "message": "congratulations",
      }
    ```

- selectUser **`token required`**
  - HTTP verb `GET`
  - Endpoint:- `/api/users/:id`  - **id of the user**
  - Request Body

    ```json
      N/A
    ```

  - Response Body -- `User object`

    ```json
        {
          "status": "success",
          "data": {
            "user": {
              "id": 1,
              "email": "mo@elzanaty.com",
              "userName": "mohammedelzanaty",
              "firstName": "Mohammed",
              "lastName": "Elzanaty"
            }
          },
          "message": "congratulations"
        }
    ```

- Create **`token required`**
  - HTTP verb `POST`
  - Endpoint:- `/api/users/`
  - Request Body

    ```json
      {
        "email": "test10@test.com",
        "userName": "test10user",
        "firstName": "Test10",
        "lastName": "User",
        "password": "1234"
      }
    ```

  - Response Body -- `User object`

    ```json
      {
        "status": "success",
        "data": {
          "id": 1,
          "email": "test10@test.com",
          "user_name": "test10user",
          "f_name": "Test10",
          "l_name": "User",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VyTmFtZSI6InRlc3R1c2VyIiwiZmlyc3ROYW1lIjoiVGVzdCIsImxhc3ROYW1lIjoiVXNlciJ9LCJpYXQiOjE2MjUwMDAyNTB9.y45Rlb9_olQIZpTHzFMH5fHK_coRlzcEuXQC2FXtCBY"
        },
        "message": "congratulations user added successfully ^^"
      }
    ```

- Delete **`token required`**
  - HTTP verb `DELETE`
  - Endpoint:- `/api/users/:id` - **id of the user to be deleted**
  - Request Body

    ```json
      N/A
    ```

  - Response Body -- `Deleted User object`

    ```json
      {
        "status": "success",
        "data": {
          "user": {
            "id": 2,
            "email": "test@test.com",
            "user_name": "testuser",
            "f_name": "Test",
            "l_name": "User"
          }
        },
        "message": "congratulations user deleted"
      }
    ```

- Edit **`token required`**
  - HTTP verb `PUT`
  - Endpoint:- `/api/`

  - Request Body

    ```json
      {
        "id": 1,
        "email": "test220@test.com",
        "user_name": "test10user",
        "f_name": "Test10",
        "l_name": "User",
        "password": "1234"
      }
    ```

  - Response Body -- `Updated User object`

    ```json
      {
        "status": "success",
        "data": {
            "id": 1,
            "email": "test220@test.com",
            "user_name": "test10user",
            "f_name": "Test10",
            "l_name": "User",
            "password": "1234"
        },
        "message": "user updated successfully"
      }

- Authenticate
  - HTTP verb `POST`
  - Endpoint:- `/api/users/authenticate`
  - Request Body

    ```json
      {
        "user_name": "test10User",
        "password": "1234"
      }
    ```

  - Response Body -- `Updated User object`

    ```json
      {
        "status": "success",
        "data": {
          "id": 1,
          "email": "test220@test.com",
          "user_name": "test10user",
          "f_name": "Test10",
          "l_name": "User",
          "password": "1234",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6Im1vQGVsemFuYXR5LmNvbSIsInVzZXJOYW1lIjoibW9oYW1tZWRlbHphbmF0eSIsImZpcnN0TmFtZSI6Ik1vaGFtbWVkIiwibGFzdE5hbWUiOiJFbHphbmF0eSJ9LCJpYXQiOjE2MjUwMDExMDB9.ubpj0l9VSl2Hd-KlHRqqO3-PmSf0VAySY2qnJ1N_S2Y"
        },
        "message": "user authenticated successfully"
      }
    ```    

### Products

- Index
  - HTTP verb `GET`
  - Endpoint:- `/api/products/`
  - Request Body

    ```json
      N/A
    ```

  - Response Body -- `Array of products`

    ```json
     {
        "status": "200",
        "data": {
           [
            {
              "id": 1,
              "name": "p1",
              "description": "product description",
              "price": 20,
              "category": "c1"
            }
          ]
        },
        "message": "congratulations^^"
      }
    ```

- Show
  - HTTP verb `GET`
  - Endpoint:- `/api/products/:id`  - **id of the product**
  - Request Body

    ```json
      N/A
    ```

  - Response Body -- `Product object`

    ```json
      {
        "status": "200",
        "data": {
           [
            {
              "id": 1,
              "name": "p1",
              "description": "product description",
              "price": 20,
              "category": "c1"
            }
          ]
        },
        "message": "congratulations^^"
      }
- Create **`token required`**
  - HTTP verb `POST`
  - Endpoint:- `/api/products/`
  - Request Body

    ```json
      {
        "name": "p1",
        "description": "product description",
        "price": 20,
        "category": "c1"
      }
    ```

  - Response Body -- `User object`

    ```json
      {
        "status": "success",
        "data": {
          "id": 1,
          "name": "p1",
          "description": "product description",
          "price": 20,
          "category": "c1"
        },
        "message": "Product created successfully"
      }
    ```

### Orders

- Index - **`token required`**
  - HTTP verb `GET`
  - Endpoint:- `/api/orders/`
  - Request Body

    ```json
      N/A
    ```
  - Response Body -- 
    ```json
    {
        "status": "200",
        "data": [
            {
            "id": 1,
            "status": "completed",
            "user_id": "9"
            }
        ],
        "messege": "congratulations^^"
    }
    ```  
- Create - **`token required`**
  - HTTP verb `POST`
  - Endpoint:- `/api/orders/`
  - Request Body

    ```json
    {
        "status": "completed",
        "user_id": "9"
    }
    ```
  - Response Body -- 
    ```json
    {
        "status": "200",
        "data": {
            "id": 1,
            "status": "completed",
            "user_id": "9"
        },
        "messege": "congratulations order added successfully ^^"
    }
    ```   

- Show - **`token required`**
  - HTTP verb `GET`
  - Endpoint:- `/api/orders/:user_id`
  - Request Body

    ```json
    ```
  - Response Body -- 
    ```json
    {
        "status": "200",
        "data": {
            "id": 1,
            "status": "completed",
            "user_id": "9"
        },
        "messege": "congratulations order added successfully ^^"
    }
    ```                    

### Prouds-order
- Create - **`token required`**
  - HTTP verb `POST`
  - Endpoint:- `/api/productsOrder/`
  - Request Body

    ```json
    {
        "order_id":"1",
        "product_id":"1",
        "quantity":"5"
    }
    ```
  - Response Body -- 
    ```json
    {
        "status": "200",
        "data": {
            "id": 1,
            "status": "completed",
            "user_id": "9"
        },
        "messege": "congratulations order added successfully ^^"
    }
    ``` 
- Show - **`token required`**
  - HTTP verb `POST`
  - Endpoint:- `/api/productsOrder/`
  - Request Body

    ```json
    {
        "order_id":"1",
        "product_id":"1",
        "quantity":"5"
    }
    ```
  - Response Body -- 
    ```json
    {
        "status": "200",
        "data": [
            {
            "id": 1,
            "order_id": 1,
            "product_id": 1,
            "products": [
                {
                "name": "x",
                "price": 30,
                "category": "c1",
                "quantity": 5,
                "productId": 1,
                "description": "xx"
                }
            ]
            }
        ],
        "messege": "congratulations^^"
    }
    ```     


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
