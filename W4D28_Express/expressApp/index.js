const express = require('express');
const Array = require('lodash/array');

const app = express();

app.get('/', (req, res)=>{
    console.log('Here');
    res.status(200).send({title: 'test'});
});

const res = Array.chunk([1, 2,2,3,4], 3);
console.log(res);


app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:${3000}`);
  });
