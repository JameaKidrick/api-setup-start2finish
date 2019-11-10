
exports.up = function(knex) {
  return knex.schema
    .createTable(('lists'), table => {
      table.increments();

      table
        .varchar('title', 255)
        .notNullable()
        .unique()

      table
        .timestamp('created_at').defaultTo(knex.fn.now());

      table
        .timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('lists')
};
