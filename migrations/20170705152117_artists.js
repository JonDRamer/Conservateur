"use strict";

exports.up = (knex, Promise) => {
  return knex.schema.createTable('artists', table => {
    table.increments();
    table.text('bio');
    table.text('tags')
      .notNullable();
    table.string('img_url1')
      .notNullable();
    table.string('img_url2')
      .notNullable();
    table.string('img_url3')
      .notNullable();
    table.string('img_url4')
      .notNullable();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('artists');
};
