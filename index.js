// const fs = require("fs");
// const http = require("http");

// const getText = (data) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(data, (error, result) => {
//             if(error) {
//                 reject(error)
//             } else {
//                 resolve(result)
//             }
//         })
//     })
// }
// const getFunction = async(url, res) => {
//     try {
//         const res = await getText(url);
//         res.write(res);
//         res.end();
//     }catch(err) {
//         console.log(err);
//     }
// }
// const server = http.createServer((req, res)=> {
// if(req.url === "/") {
//    getFunction(req.url, res);

// } else if(req.url=== "/about") {
//     res.writeHead(200, "Content-Type: text/plain")
//     res.write("hello about page");
//     res.end()
// }else {
//     res.writeHead(404, "Content-Type: text/plain");
//     res.end("Page not found!")
// }
// });

// // let link = "views"
// // switch(req.url) {
// //     case "/about":
// //         link += "/about.html";
// //         break;
// //     case "home":
// //         link += "/home.html";
// //         break;
// //     default:
// //         link += "404.html"
// // }

// server.listen(3000, () => {
//     console.log("Server running at port 3000")
// })

// const eventEmitter = require("events");

// const event = new eventEmitter();

// const PizzaShop = require("./pizza-shop");
// const pizza = new PizzaShop();
// pizza.on("order", (size, topping) => {
//     console.log(`Baking ${topping} with size of ${size}`)
// })
// pizza.order("4", "mushroom");
// pizza.displayOrderNumber();

const fs = require("fs");

// const greeting = fs.readFileSync("./greet.text");
// fs.writeFileSync('./greet2.txt', greeting)
// fs.readFile("./greet2.txt","utf-8", (error, data) =>{
//     if(error){
//         console.log(error);
//     } else {
//         console.log(data)
//     }
// })
// fs.writeFile("./greet.text", "Are you still there!", (error) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log("File has written");
//     }
// })
const readableStream = fs.createReadStream("./greet2.txt", {encoding: "utf-8"});
const writeableStream = fs.createWriteStream("./greet.txt");

readableStream.on("data", (chunck) => {
    console.log(chunck)
    writeableStream.write(chunck)
})