import Knex from 'knex';

// Duvidas sobre o banco - Aula 2 1h ou http://knexjs.org/

export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();

    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();
    // Relacionamento
    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      // CASCADE - Caso altere o id do curso/aula, isso é replicado para os agendamentos viculados a ele.
      .onUpdate('CASCADE')
      // CASCADE - Caso o curso/aula for deletada, os agendamentos são deletados também. 
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
}