const express = require("express");

const app = express();

const PORT = (process.env.PORT = 3333);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
