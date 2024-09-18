const colors = require("colors")

const axios = require("axios")

const express = require("express")

const app = express()




console.log("Success, Package has worked")

/* 

1. npm init -y: initializes my application as a node application

2. node index.js: runs the index.js file on the server side

3. install express and import it

4. create express instance with ==> const app = express()

5. add app.listen(port) so the app can keep running

6. create route with app.get("/endpoint",(req,res)=>{})

*/


// GET endpoint

// app.get() has 2 arguments:
//          1. which route will the endpoint be
//          2. the function that runs when the endpoint is hit
let myNumber = 50


app.get("/anything",(request,response)=>{
    console.log("Amit")

    
    myNumber +=50

    response.json({myNumber:myNumber})
})


let courses = [
    {
        name:"Web Dev",
        stack:["React","Node","Express","MongoDB"]
    },
    {
        name:"Data Analytics",
        stack:["Tablou","Python","Excel","Pandas"]
    },
    {
        name:"System Adminstrator",
        stack:["Linux","Red Hat","Ubuntu","Docker"]
    }
]

// request on /courses sends back all the courses

app.get("/courses",(request,response)=>{


    response.json(courses)
})



// makes the app continuously run on port 5005
app.listen(5005)






let students = [
    {
      "id": 1,
      "name": "Daniel",
      "country": "Spain"
    },
    {
      "id": 2,
      "name": "Judi",
      "country": "Netherlands"
    },
    {
      "id": 3,
      "name": "Toni",
      "country": "Spain"
    },
    {
      "id": 4,
      "name": "Eleftherios",
      "country": "Germany"
    },
    {
      "id": 5,
      "name": "Mikko",
      "country": "Netherlands"
    },
    {
        "id":6,
        "name":"Amit",
        "Country":"Portugal"
    }
  ]

  app.get("/students",(req,res)=>{

    res.json(students)
  })

  console.log(__dirname)

  app.get("/homepage",(req,res)=>{
    

    res.sendFile(__dirname+ "/views/15-vi-cheat-sheet.pdf")
  })
  
  
/* 
 Exercise 1:
      1. given the following array of students given above
      2. Write an endpoint on the route /students that when called will send a response of all the students back to the user
 */