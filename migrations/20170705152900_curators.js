"use strict";

exports.up = (knex, Promise) => {
  return knex.schema.createTable('curators', table => {
    table.increments();
    table.text('bio');
    table.integer('rating');
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('curators');
};
