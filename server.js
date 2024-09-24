import express from 'express'
import nunjucks from 'nunjucks'
import morgan from 'morgan'
import indexRouter from './routes/index.js'

const app = express()

app.use(express.static("public"))
app.use(morgan("dev"))
app.use('/', indexRouter)

nunjucks.configure("views", {
   autoescape: true,
   express: app
})

app.get('/', (req, res) =>{
    console.log(req.query)
    const name = req.query.name
    res.render("index.njk", {
        message: "fag",
        title: "Nunjucks fag",
    })    
})

app.get('/om', (req, res) =>{
    res.render("index.njk", {
        message: "the burger man the burger man hoo haa",
        title: "Nunjucks"
    })
    
})

app.get('/watch', (req, res) => {
    console.log(req.query)
    const name = req.query.name

    const movies = {
        "test": {
            title:"efd",           
        }
    }
    
    res.render('watch.njk', {
        movie: (movies[name])
    })
      
})

app.use((req, res) => {
    res.status(404).send("not found")
})

app.listen(3000, ()=> {
    console.log('Server is running on http://localhost:3000')
})