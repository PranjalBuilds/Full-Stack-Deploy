import express from 'express';
import cors from 'cors';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// API Routes

app.get("/api/message", (req, res) => {
    res.json( { message : "Hi From Pranjal's server" } )
});

const PORT = 4000

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`);
});