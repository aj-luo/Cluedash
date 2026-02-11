import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'

const app = express()
const PORT = process.env.PORT || 5003

// Get file path from URL of current module
const __filename = fileURLToPath(import.meta.url)
//Get the directory name from file path
const __dirname = dirname(__filename)


//Middleware
app.use(express.json())
//Serves the HTML file from the /public directory
//tells express to serve all files from the public folder as static assets files
//Any request for the css files will be resolved to the public repo

//this basically specifies that the directory we currently are in (src) you cannot
//find the public repo, it exists outside our current repo, so you need to
//go outside and look (../public)
app.use(express.static(path.join(__dirname, '../public')))

//for serving up the html file from the /public directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname), 'public', 'index.html')
})

//Routes
app.use('/auth', authRoutes)
app.use('/todos',authMiddleware, todoRoutes)

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})