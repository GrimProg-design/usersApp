import express from "express";
import cors from "cors"
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}))

app.get("/api", (req, res) => {
    res.json({message: "Hello from back"})
})

app.post("/api/user", (req, res) => {
    console.log(req.body.password)
    res.json({message: "hi"})
})

app.listen(3000, () => {
    console.log(`Server starts on: http://localhost:3000`)
})