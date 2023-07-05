import express from "express";

const app = express();


// this line is require for - req.socket.remoteAddress and req.ip
app.set('trust proxy', true);

export default app;
