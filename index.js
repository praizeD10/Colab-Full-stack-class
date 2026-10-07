import {createServer} from "http";
const port = 8000;

const server = createServer((req, res) => {
    res.end("WELCOME TO FULL STACK CLASS");
}); 
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});