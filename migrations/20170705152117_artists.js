exports.up = (knex, Promise) => {
  return knex.schema.createTable('artists', table => {
    table.increments();
    table.text('bio');
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
