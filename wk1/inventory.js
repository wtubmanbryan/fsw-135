const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dbWilliam:dbWilliamPwd@cluster0.bkaicif.mongodb.net/moviesdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log(`Connected to the DB ${con.cnnection.host}`)
)