const mongoose = require("mongoose");

exports.Database = function Database() {
  mongoose.set('strictQuery', false);
  mongoose
    .connect("mongodb://127.0.0.1:27017/Flix", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.error(`Error connecting to the database: ${err.message}`);
    });
    
};
