
const { createReadStream } = require("fs");
const { createServer } = require("http");
const { join } = require("path")

const server = createServer((req, res) => {

    const {url, method} = req;

    if( url === "/" && method === "GET"){

        res.setHeader("Content-Type", "text/html")
        const readStream = createReadStream(join(__dirname, "../public/index.html"))
        readStream.pipe(res);

    }else{
        res.setHeader("Content-Type", "text/html")
        const readStream = createReadStream(join(__dirname, "../public/notFound.html"))
        readStream.pipe(res);
    }


})

server.listen(3000, () => console.log("server is listening"))