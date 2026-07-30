import express from "express"
import fs from "fs"


const app = express()
const port = 6464;
const helloworld = "hello world!";

const filePath = "/Users/joe/Documents/Quiet/muse/"

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {

  res.send(helloworld);

  console.log("GET");
});

app.post("/ocean", (req, res) => {
  const data = req.body;
  const muse = req.body.muse;

  const filePathUnique = filePath + Date() + ".txt";

  console.log(filePathUnique);
  
  console.log("url: " + req.url);
  console.log("muse: " + muse);

  fs.writeFileSync(filePathUnique, muse, "utf-8");

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
