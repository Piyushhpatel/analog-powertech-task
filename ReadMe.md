
# Analog Powertech Engineering Backend Task
This is  a complete backend that contain RESTful API for a ticket management system using Node.js and MongoDB. The API supports basic CRUD operations (Create, Read, Update, Delete) for managing support tickets.



## Installation

How to setup the project with enviornment

#### Step 1: Clone the respositiory
```
  git clone https://github.com/Piyushhpatel/analog-powertech-task.git
```

#### Step 2: Install Node Modules
```
  cd analog-powertech-task
  npm install
```

#### Step 3: Create .env file paste the content of .env.sample and add following 
```
PORT = 8000
CORS_ORIGIN = *
MONGODB_URI = "your mongodb connection url"
```

#### Step 4: Now start the server by running following command
```
npm run start
```

#### Step 5: Now you can try diffrent routes either using curl or postman

Complete API documentation on Postman : [Link](https://documenter.getpostman.com/view/38038026/2sAXqs8iUU)


## Usage/Examples

1. Create Ticket

```
Req Type: Post
Endpoint: /api/v1/tickets/create-ticket

Req Body (type/json) :
{
    "title" : "First Ticket"
    "description" : "This is description"
}

```

2. Get Alll Ticket

```
Req Type: Get
Endpoint: /api/v1/tickets
```

3. Get Single Ticket
```
Req Type: Get
Endpoint: /api/v1/tickets/:ticketId
```

4. Update Ticket
```
Req Type: Patch
Endpoint: /api/v1/tickets/:ticketId
Req Body (type/json) :
{
    "title" : "First Ticket"
    "description" : "This is description",
    "status" : "completed"
}
```

5. Delete Ticket
```
Req Type: Delete
Endpoint: /api/v1/tickets/:ticketId
```

This is the assignement and complete documenation
