import express from "express";
import { dirname } from "path";
import {fileURLToPath} from "url";
const app = express();
const port = 3000;
const __dirname=dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({extended: true})); //middleware

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req,res)=>{
  console.log(req.body);
  res.send(`The bandname is ${req.body.street} ${req.body.pet}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
}); 

