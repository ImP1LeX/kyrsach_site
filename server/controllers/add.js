import { sql } from "../db.js"


export const themeAdd = async (req, res) => {
    const {title, text, user_id} = req.body
    const theme = await sql`insert into Themes(title, text, user_id) values(${title}, ${text}, ${user_id})`
}

export const commentAdd = async (req, res) => {
    
    const user_id = req.params.user_id
    console.log(user_id)
    const theme_id = req.params.theme_id
    console.log(theme_id)
    const {text} = req.body
    console.log(text)
    const comment = await sql`insert into Comments(user_id, text) values(${user_id}, ${text})`
    console.log(comment)
    const comment_preid = await sql`select * from Comments
    WHERE user_id = ${user_id} and text = ${text}`
    console.log(comment_preid)
    const comment_id = comment_preid[0].id
    console.log(comment_id)
    const themeComment = await sql`insert into ThemeComment(comment_id, theme_id) values(${comment_id}, ${theme_id})`
    console.log(themeComment)
}