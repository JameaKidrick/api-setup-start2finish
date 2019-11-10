const tasks = [
  {
    name: 'noodles'
  },
  {
    name: 'eggs'
  },
  {
    name: 'broccoli'
  },
  {
    name: 'push-ups'
  },
  {
    name: 'cardio'
  },
  {
    name: 'finish lambda project'
  },
  {
    name: 'give my cat a bath'
  },
  {
    name: 'buy groceries'
  }
];

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert(tasks);
    });
};
