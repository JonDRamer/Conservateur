"use strict";

exports.up = (knex, Promise) => {
  return knex.schema.createTable('paintings', table => {
    table.increments();
    table.string('title')
    table.text('description');
    table.text('size');
    table.decimal('price');
    table.string('img_url');
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
