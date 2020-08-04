import knex from 'knex';
import path from 'path';

// Duvidas sobre o banco - Aula 2 1h ou http://knexjs.org/
// Migrations - Controlam a versão do banco de dados
// Para rodar a criaçao do banco npm run knex:migrate
// se errar um campo do DB deleta o database.sqlite, corrija o erro e roda o npm run knex:migrate

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true,
});

export default db;