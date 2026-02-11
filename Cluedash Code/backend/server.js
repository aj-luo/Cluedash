const express = require('express');
const app = express();
const PORT = 8383;

let data = ['james']
//Middleware
//app.use(express.json()) tells your Express server to automatically read and parse JSON data in incoming requests and put it into req.body.
app.use(express.json())


// HTTP Verbs (method) and Routes (or paths)
//method informs the nature of the request and the route is the further subdirectory (direct the request to the body or code to response
//appropriately)

//Type 1 - Website endpoints (used to send back html, typically come when user enters url in a browser)
app.get('/', (req, res) => {
    //this is endpoint number 1 - /
    console.log('hello world', req.method);
    res.send(`
        <body style="background:pink;
              color: blue;">
            <p>
                ${JSON.stringify(data)}
            </p>
        </body>
        `)
})

app.get('/dashboard', (req, res) => {
    console.log('I hit the /dashboard endpoint')
    res.send('hi')
})

app.get('/welcome', (req,res) => {
    res.send("<h1>Welcome</h1>")
})

//Type 2 - API endpoints (non-visual)

app.get('/api/data', (req, res) => {
    res.status(200).send(data);
})

app.post('/api/data', (req, res) => {
    // someone wants to create a user (for example when they click a sign up button)
    //user clicks the sign up button after entering their credentials, 
    //and browser if wired up to send out network request to server
    //to handle that action
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
} )

app.delete('/api/data', (req, res) => {
    data.pop()
    res.sendStatus(203)
})




app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))
