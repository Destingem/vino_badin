import fs from 'fs'
import path from 'path'
export default function handler(req, res){

    
  console.log(req.query.adress);
 
  const imageBuffer = fs.readFileSync(req.query.adress)
    const url = req.body.url;
  res.setHeader('Content-Type', 'image/jpg')
  res.send(imageBuffer)
}