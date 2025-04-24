import { stringify } from "querystring";
import { request } from "https";

const query = stringify({
    input: "console.log(  1  )",
});

const req = request(
    {
        method: "POST",
        hostname: "www.toptal.com",
        path: "/developers/javascript-minifier/api/raw",
    },
    function (resp) {
        // if the statusCode isn't what we expect, get out of here
        if (resp.statusCode !== 200) {
            console.log("StatusCode=" + resp.statusCode);
            return;
        }

        resp.pipe(process.stdout);
    }
);
req.on("error", function (err) {
    throw err;
});
req.setHeader("Content-Type", "application/x-www-form-urlencoded");
req.setHeader("Content-Length", query.length);
req.end(query, "utf8");
