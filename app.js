const express= require('express')
require('./db/mongoose')
const userRouter = require('./routers/user_router')
const productRouter = require('./routers/product_router')
const app = express()

app.use(express.json())
app.use(userRouter)
app.use(productRouter)

app.listen(process.env.PORT,()=>{
    console.log(`server listnening to port ${process.env.PORT}`)
})