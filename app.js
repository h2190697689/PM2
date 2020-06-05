const Koa=require("koa");

const app=new Koa();

app.use(async(ctx,next)=>{
	ctx.body="hello PM2 my name is min";
	await next();
})

app.listen(3000,()=>{
	console.log("server is running port 3000");
})

// const http=require("http");
// const app=http.createServer((req,res)=>{
// 	res.end("hello PM2");
// })
// app.listen(3000,()=>{
// 	console.log("server is running port 3000");
// })