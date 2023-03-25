import express from 'express';
import DBConnec from "./Db/db.js";
import router from "./Router/route.js";
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:3000",
    origin: "*"
}));

DBConnec();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', router);

// heroku 

if(process.env.NODE_ENV == "production"){
app.use(express.static("my-stack/build"));
}

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});
