# Folder Structure

- Server folder has server side code written in NodeJS
- Client folder has client side code written in Angular

# Deployment Instructions

- Tech Stack
  - NodeJS 10.x
  - Angular v7
  - MongoDB 4.0
  
- Installations
    - Client
      - Go to client folder
      - run command **npm start** followed by **npm install**
      - Access http://localhost:4200
    - Server
      - Go to server folder
      - run command **npm start** followed by **npm install**
      - Server will b running on **http://localhost:3000**
      - Server is using MongoDB to access the stocks dump provided
      - DB URI is kept in a configs file(server/configs/appConfig)
      - For this app mongodb i have installed in local
      - DB URI is **mongodb://localhost:27017/scgdb**
      - this db has only one collection(stockshistory) where all the stocks records are stored
  
# Pending Items

- ngRx store implementation
- For pagination _id is used, change this to date after creating index in mongodb (approx. 8.5 Lacs records are there)
- Unit test cases (Server side)
