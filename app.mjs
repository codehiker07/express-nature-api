import fs from 'fs';
import express from 'express';

const app = express()
app.use(express.json())



// app.get('/', (req, res) => {
//   res.status(200)
// //   .send('Hello Bro')
//   .json({ message: 'Motiur Rahman', home: 'Rajshahi' });
// });

// app.post('/', (req, res)=>{
//     res.status(200).send('You can post to this endpoint...');
// })

const tours = JSON.parse(
  fs.readFileSync(`./dev-data/data/tours-simple.json`, 'utf8')
)

app.post('/api/v1/tours', (req, res)=>{
  // console.log(req.body);
  const newId = tours[tours.length-1].id + 1;
  const newTour = Object.assign({ id: newId}, req.body);
  tours.push(newTour);

  fs.writeFile(`./dev-data/data/tours-simple.json`,JSON.stringify(tours), 'utf8', (err)=>{
    res.status(201)
    .json({
      status: 'successfull',
      data: {tour: newTour}
    })
  });
  
})


app.get('/api/v1/tours', (req, res) => {
  res.status(200)
  .json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    },
  });
});

const port = process.env.PORT || 5000;
app.listen(port, '127.0.0.1', () => {
  console.log(`App running on port ${port}`);
});
