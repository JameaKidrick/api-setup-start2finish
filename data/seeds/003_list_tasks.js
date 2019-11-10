const list_tasks = [
  {
    list_id: 1,
    task_id: 1,
    description: '2 packs, soda'
  },
  {
    list_id: 1,
    task_id: 2,
    description: 'one dozen'
  },
  {
    list_id: 1,
    task_id: 3,
    description: '1 bunch'
  },
  {
    list_id: 2,
    task_id: 4,
    description: '15 reps, 3 sets'
  },
  {
    list_id: 2,
    task_id: 5,
    description: '30 min, jogging'
  },
  {
    list_id: 3,
    task_id: 6,
    description: 'Data Modeling'
  },
  {
    list_id: 3,
    task_id: 7
  },
  {
    list_id: 3,
    task_id: 8,
    description: 'Hy-Vee'
  }
];

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('list_tasks')
    .then(function () {
      // Inserts seed entries
      return knex('list_tasks').insert(list_tasks);
    });
};
