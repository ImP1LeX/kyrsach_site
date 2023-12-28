import { sql } from "../db.js"


export const themesGet = async (req, res) => {
    const themes = await sql`select themes.id, user_id, title, text, name 
    from Themes
    INNER JOIN Users on Users.id = Themes.user_id`
    return res.json({
        themes: themes
    })
}

export const themeGet = async (req, res) => {
    const id = req.params.id
    console.log(id);
    const theme = await sql`select * from Themes
    WHERE id = ${id}`
    console.log(theme);
    const user = await sql`select * from Users
    WHERE id = ${theme[0].user_id}`
    
    return res.json({
        theme: theme[0],
        user: user[0]
    })
}

export const commentsGet = async (req, res) => {
    const id = req?.params?.theme_id
    console.log(id);
    const themeComment = await sql`select * from ThemeComment
    WHERE theme_id = ${id}`
    console.log(themeComment);
    let arr = []
    await Promise.all(themeComment.map(async (elem)=>{
        console.log(elem)
        console.log(elem?.comment_id)
        arr.push(await funk(elem?.comment_id))
    }))
    
    console.log(arr)
    return res.json({
        arr
    })
}

const  funk= async(id)=>{
    return await sql`select user_id, text, users.id, users.name from Comments
    INNER JOIN Users on Users.id = comments.user_id and comments.id = ${id}`
}