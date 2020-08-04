import Knex from 'knex';

// Duvidas sobre o banco - Aula 2 1h ou http://knexjs.org/

export async function up(knex: Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.string('cost').notNullable();
    // Relacionamento
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      // CASCADE - Caso altere o id do usuario, isso é replicado para os cursos viculados a ele.
      .onUpdate('CASCADE')
      // CASCADE - Caso o usuario que cadastrou cursos for deletado, os curso são deletados também. 
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}