import app from "./app.js";
import requestIp from "request-ip";

const PORT = process.env.PORT || 3002;

app.get("/", (req, res) => {
    console.log(req.socket.remoteAddress);
    console.log(req.ip);
    var clientIp = requestIp.getClientIp(req);
    res.json({
        "req.ip - from req": req.ip,                   //require app.set proxy
        "clientIp - from package(reqip)": clientIp,               // not requrire
        "req.socket.remoteAddress": req.socket.remoteAddress,   //require app.set proxy
        "req.connection.remoteAddress": req.connection.remoteAddress,   //require app.set proxy
        "req.headers['x-forwarded-for']": req.headers['x-forwarded-for'], //not require ..return 4 address 1st one is cooreect among 4
    });
});

app.listen(PORT, () =>
    console.log(`listenting on port http://localhost:${PORT}`)
);
