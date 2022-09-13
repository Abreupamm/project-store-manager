const app = require('./app');
require('dotenv').config();
const connection = require('./db/connection');

app.listen(process.env.PORT_DB, async () => {
  console.log(`API StoreManager online na porta ${process.env.PORT_DB}`);
  
  const [result] = await connection.execute('SELECT 1');
  if (result) {
    console.log('MySQL connection OK');
  }
});

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
