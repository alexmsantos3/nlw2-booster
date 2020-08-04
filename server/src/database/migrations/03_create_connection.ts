import Knex from 'knex';

// Duvidas sobre o banco - Aula 2 1h ou http://knexjs.org/

export async function up(knex: Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();
    // Relacionamento
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      // CASCADE - Caso altere o id do curso/aula, isso é replicado para os agendamentos viculados a ele.
      .onUpdate('CASCADE')
      // CASCADE - Caso o curso/aula for deletada, os agendamentos são deletados também. 
      .onDelete('CASCADE');
    // Pegar o exato horario que tentou conexão com o professor.
    table.timestamp('created_at')
      .defaultTo('now()')
      .notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}