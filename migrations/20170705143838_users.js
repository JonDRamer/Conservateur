"use strict";

exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('email')
      .notNullable()
      .unique();
    table.string('password_digest')
      .notNullable();
    table.string('first_name')
      .notNullable();
    table.string('last_name')
      .notNullable();
    table.boolean('artist');
    table.boolean('collector');
    table.boolean('curator');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users');
};
