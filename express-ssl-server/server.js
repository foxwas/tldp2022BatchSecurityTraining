const express= require('express')
const https=require('https')
const fs=require('fs')
const path=require('path')
const app=express();
app.use('/',(req,res,next)=>{
res.send('Dear TLDP Students, I am SSL ExpressServer !  How are you all doing?')
})
const options={
key:fs.readFileSync(path.join(__dirname,'./cert/key.pem')),
cert:fs.readFileSync(path.join(__dirname,'./cert/cert.pem'))
}
const sslServer=https.createServer(options,app);
sslServer.listen(1443,()=>{
console.log('Secure server is listening on port 1443')
})