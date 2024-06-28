import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200)
//   .send('Hello Bro')
  .json({ message: 'Motiur Rahman', home: 'Rajshahi' });
});

app.post('/', (req, res)=>{
    res.status(200).send('You can post to this endpoint...');
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
