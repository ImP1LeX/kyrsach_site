import express from "express";
import { sql } from "./db.js";
import { register } from "./controllers/register.js";
import { auth } from "./controllers/auth.js";
import { roleMiddleware } from "./middlewares/roleMiddleware.js";
import cors from 'cors'
import { commentAdd, themeAdd } from "./controllers/add.js";
import { commentsGet, themeGet, themesGet } from "./controllers/get.js";

//порт на котором будет работать сервер
const PORT = 3000

//сама переменная сервера
const app = express()

//чтобы сервер понимал json
app.use(express.json())
app.use(cors())

app.get('/', roleMiddleware(["ADMIN"]), async (req, res) => {
    const data = await sql`select * from Users`
    res.send(data)
})

//ветка регистрации
app.post('/reg', register)
//ветка логина
app.post('/auth', auth)
//ветка добавления обсуждения
app.post('/theme', themeAdd)
app.get('/themes', themesGet)
app.get('/theme/:id', themeGet)
app.post('/theme/:theme_id/comment/:user_id', commentAdd)
app.get('/comments/:theme_id', commentsGet)

//функция старта приложения
const start = async () => {

    //создаем таблицы
    await sql`create table if not exists Roles(
        role varchar(100) unique primary key
    )`
    await sql`create table if not exists Users(
        id SERIAL PRIMARY KEY NOT NULL,
        name varchar(100) NOT NULL,
        role varchar(100),
        password varchar(100),
        FOREIGN KEY (role) REFERENCES Roles(role)
    )`
    await sql`create table if not exists Comments(
        id SERIAL PRIMARY KEY NOT NULL,
        user_id int not null,
        text varchar(2000),
        FOREIGN KEY (user_id) REFERENCES Users(id)
    )`
    await sql`create table if not exists SubComents(
        id SERIAL PRIMARY KEY NOT NULL,
        user_id int not null,
        text varchar(2000),
        comment_id int not null,
        FOREIGN KEY (user_id) REFERENCES Users(id),
        FOREIGN KEY (comment_id) REFERENCES Comments(id)
    )`
    await sql`create table if not exists Themes(
        id SERIAL PRIMARY KEY NOT NULL,
        title varchar(1000),
        text varchar(2000),
        user_id int not null,
        FOREIGN KEY (user_id) REFERENCES Users(id)
    )`
    await sql`create table if not exists ThemeComment(
        comment_id int not null,
        theme_id int not null,
        FOREIGN KEY (comment_id) REFERENCES Comments(id),
        FOREIGN KEY (theme_id) REFERENCES Themes(id)
    )`
    await sql`create table if not exists News(
        id SERIAL PRIMARY KEY NOT NULL,
        title varchar(1000),
        text varchar(2000)
    )`

    //запустить в первый раз и больше не запускать
    //чтобы добавить роли в таблицу ролей

    // await sql`insert into Roles(role) values('USER')`
    // await sql`insert into Roles(role) values('ADMIN')`

    //запустить сервак
    //(прослушивать порт на запросы)
    //вторым аргументом функция которая запустится при успешном запуске сервака
    app.listen(PORT, () => {
        console.log(`СЕРВАК ФУРЫЧИТ ТУТ http://localhost:${PORT}`);
    })
}

start()