const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000 ;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.post('/contact', (req, res) => {
    const {name , email, message} = req.body

    res.status(200).json({
        status: "success", 
        message: "Your message has been received", 
        data: {name, email, message}, 
    });
});



app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));