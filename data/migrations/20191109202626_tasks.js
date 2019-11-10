
exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    table
      .increments();
    
    table
      .varchar('name', 255).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfTableExists('tasks');
};
