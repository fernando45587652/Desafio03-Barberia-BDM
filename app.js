const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());


app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/barberos', require('./routes/barberos'));
app.use('/api/servicios', require('./routes/servicios'));
app.use('/api/citas', require('./routes/citas'));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
