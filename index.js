const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express()


const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine) //регестрируем движок в эксперессе
app.set('view engine', 'hbs') // начинаем использовать
app.set('views', 'views')

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Main page',
        isHome: true
    })
})

app.get('/add', (req, res) => {
    res.render('add', {
        title: 'Add new course',
        isAdd: true
    })
})

app.get('/courses', (req, res) => {
    res.render('courses', {
        title: 'Courses page',
        isCourses: true
    })
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is runnign on port ${PORT}`)
})