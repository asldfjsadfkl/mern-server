import express from 'express';
import { Root } from "../Db/Schema.js";
import bodyParser from 'body-parser';

const router = express.Router();


// post data of sign up form
router.post('/signup', async (req, res) => {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
        res.status(401).json({ error: "plz fill the fields correctly" });
    }

    try {
        const userExist = await Root.findOne({ email: email });
        console.log(userExist);
        if (userExist) { return res.status(422).json({ error: "Email already Exist" }); }

        const root = await new Root({ name, email, phone, password });

        await root.save();

        res.status(200).json('Regestration seccesfull');

    } catch (error) {
        console.log(error)
        res.status(404).json('there is error mna.code');
    }

});

// login 
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: "Invalid Data" });
    }


    try {
        const oldUser = await Root.findOne({ email: email });

        if (!oldUser) {

            res.status(400).json({ error: "Email is not Exist" });
        }

        else {
            res.status(200).json({ message: "Login seccessfully" });
            console.log(req.body);
        }

    } catch (error) {

    }
});







export default router;