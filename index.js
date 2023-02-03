const express = require('express');
const route = require('./src/routes/api');
const PORT = 3000;

const app = express();
app.use(express.json());

app.use('/', route);

app.listen(PORT, (error) => {
  if (!error)
    console.log(`Server is Successfully Running, and App is listening on port ${PORT}`);
  else
    console.log('Error occurred', error);
}
);