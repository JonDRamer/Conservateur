"use strict";

exports.up = (knex, Promise) => {
  return knex.schema.createTable('paintings', table => {
    table.increments();
    table.string('title')
      .notNullable();
    table.text('description')
      .notNullable();
    table.text('size')
      .notNullable();
    table.decimal('price')
      .notNullable();
    table.string('img_url')
      .notNullable();
    table.text('tags')
      .notNullable();
    table.integer('artist_id')
      .notNullable()
      .references('id')
      .inTable('artists')
      .onDelete('CASCADE')
      .index();
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('paintings');
};
