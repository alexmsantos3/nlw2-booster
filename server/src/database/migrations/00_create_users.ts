import Knex from 'knex';

// Duvidas sobre o banco - Aula 2 1h ou http://knexjs.org/

export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}