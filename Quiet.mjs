import express from "express"
import fs from "fs"

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express()
const port = 6464;
const helloworld = "hello world!";

const filePath = path.join(__dirname, "muse");

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {

  res.send(helloworld);

  console.log("GET");
});

app.get('/testStuff', (req, res) => {
  var now = new Date();

  var year = now.getFullYear();
  var month = now.getMonth() + 1; 
  var day = now.getDate();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  let directoryPath = path.join(filePath, year.toString(), month.toString(), day.toString(), hours.toString());
  console.log(directoryPath);
  let fileName = minutes.toString() + ".txt";
  console.log(fileName);

  try{
    fs.writeFileSync(path.join(directoryPath, fileName), "test", "utf-8");

  }catch{
    fs.mkdirSync(directoryPath, { recursive: true });
  }
  console.log(now.getDate());

});

app.post("/ocean", (req, res) => {
  const data = req.body;

  console.log(data);
  const muse = req.body.muse;

  const filePathUnique = path.join(filePath, Date.now().toString() + ".txt");

  console.log(filePathUnique);
  
  console.log("url: " + req.url);
  console.log("muse: " + muse);

  //fs.writeFileSync(filePathUnique, muse, "utf-8");

  var now = new Date();

  var year = now.getFullYear();
  var month = now.getMonth() + 1; 
  var day = now.getDate();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  console.log("year: " + year);
  console.log("month: " + month);
  console.log("day: " + day);
  console.log("hours: " + hours);
  console.log("minutes: " + minutes);

  let directoryPath = path.join(filePath, year.toString(), month.toString(), day.toString(), hours.toString());
  console.log(directoryPath);
  let fileName = minutes.toString() + ".txt";
  console.log(fileName);

  try{
    fs.writeFileSync(path.join(directoryPath, fileName), muse, "utf-8");

  }catch{
    fs.mkdirSync(directoryPath, { recursive: true });
    fs.writeFileSync(path.join(directoryPath, fileName), muse, "utf-8");
  }

  res.sendStatus(200);
});

app.get("/:year/:month/:day/:hour", (req, res) => {

  console.log(__dirname, __filename)
  let year = req.params.year
  let month = req.params.month
  if(month[0] == 0){
    month = month[1]
    console.log("Reduced month to single digit")
  }
  let day = req.params.day
  if(day[0] == 0){
    day = day[1]
    console.log("Reduced day to single digit")
  }
  let hour = req.params.hour
  if(hour[0] == 0){
    hour = hour[1]
    console.log("Reduced hour to single digit")
  }

  try{
    var file = path.join(__dirname, "muse", year, month, day, hour, minute)
    res.sendFile(String(file))
  }catch{

  }

  try{
    console.log(`Sending muse/muses written on ${year}/${month}/${day} at ${hour} o'clock.`)
    var fileDirectory = path.join(__dirname, "muse", year, month, day, hour)

    fs.readdir(fileDirectory, (err, files) => {

      try{
        console.log(files.length);
        if(files.length == 1){
          res.sendFile(fileDirectory + "/" + files[0].toString())
        }else{
        var filesFound = "Multiple bottles found written at this time: "
        files.forEach(file => {
          filesFound += file.toString() + ", "

          
        });
        filesFound += ". Append the minute to your url to open them."
        res.send(filesFound)
      }

      }catch(err){
        console.log(err);
        res.send("-⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽-           Empty ocean here...          -⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽-")



      }
      
    });

    //res.sendFile(file)

  }catch(err){
    console.log(err)
    console.log("Nothing to be found....")
    res.send("-⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽-           Empty ocean here...          -⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽-")
  }
  

});


app.get("/:year/:month/:day/:hour/:minute", (req, res) => {
  let year = req.params.year
  let month = req.params.month
  if(month[0] == 0){
    month = month[1]
    console.log("Reduced month to single digit")
  }
  let day = req.params.day
  if(day[0] == 0){
    day = day[1]
    console.log("Reduced day to single digit")
  }
  let hour = req.params.hour
  if(hour[0] == 0){
    hour = hour[1]
    console.log("Reduced hour to single digit")
  }
  let minute = req.params.minute
  if(minute[0] == 0){
    minute = minute[1]
    console.log("Reduced hour to single digit")
  }

  try{
    var file = path.join(__dirname, "muse", year, month, day, hour, minute + ".txt")
    console.log(file)
    res.sendFile(file)
  }catch{
    console.log("invalid file")
    res.send("-⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽-           Empty ocean here...          -⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽--⎽__⎽-⎻⎺⎺⎻-⎽__⎽-")
  }
});

app.get("/privacypolicy", (req, res) => {
  res.sendFile(path.join(__dirname, "privacypolicy.txt"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
