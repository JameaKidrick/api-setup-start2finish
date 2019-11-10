
exports.up = function(knex) {
  return knex.schema.createTable('list_tasks', table => {
    table
      .increments();

    table
      .integer('list_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('lists')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table
      .integer('task_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('tasks')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table
      .varchar('description', 255)
    
    table
      .boolean('complete').defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('list_tasks')
};
