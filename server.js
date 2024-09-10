import express from 'express'
import nunjucks from 'nunjucks'
const app = express()

app.use(express.static("public"))

nunjucks.configure("views", {
   autoescape: true,
   express: app
})

app.get('/', (req, response) =>{
    response.render("index.njk", {
        message: "fag",
        title: "Nunjucks fag",
    })    
})

app.get('/om', (req, response) =>{
    response.render("index.njk", {
        message: "the burger man the burger man hoo haa",
        title: "Nunjucks"
    })
    
})

app.listen(3000, ()=> {
    console.log('Server is running on http://localhost:3000')
})