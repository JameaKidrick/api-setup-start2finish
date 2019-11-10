
exports.up = function(knex) {
  return knex.schema.createTable('list_tasks', table => {
    table
      .increments();

    table
      .integer('list_id')
      .unsigned()
      .notNullable()
      .references('lists.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table
      .integer('task_id')
      .unsigned()
      .notNullable()
      .references('tasks.id')
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
