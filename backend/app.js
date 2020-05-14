const express = require('express');
const bodyParser = require("body-parser");

const app = express();

<<<<<<< Updated upstream
<<<<<<< Updated upstream
app.use(bodyParser.json());
=======
=======
>>>>>>> Stashed changes
mongoose.connect("mongodb+srv://kemalsekic:" + process.env.MONGO_ATLAS_PW + "@cluster0-id557.mongodb.net/kremica?")
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/images", express.static(path.join("images")));
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.get('/api/posts',(req, res, next) => {
  const posts = [
    {
      id: 'fasfsdf',
      title: 'First server-side post',
      content: "This is coming from the server"
    },
    {
      id: 'oidjf',
      title: 'Second server-side post',
      content: "This is coming from the server!!!"
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
