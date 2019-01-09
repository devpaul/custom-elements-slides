import createServer from "webserv/commands/createServer";

const port = 8765;
const config = {
    port,
    directory: process.cwd(),
    start: true
};

createServer(config).then(() => {
    console.log(`Server running on ${ port }`)
});
