const express = require("express")
const app = express()

app.get("/todo", (req, res) => {
  res.json({
    code: 200,
    msg: "Success",
    data: [
      {id:1, thing:"reading", done:false},
      {id:2, thing:"coding", done:true},
      {id:3, thing:"writing", done:false}
    ]
  })
})

app.listen("8000", () => {
  console.log("The server is running now, please visit http://localhost:8000")
})