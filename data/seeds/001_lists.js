const lists = [
  {
    title: 'Grocery List'
  },
  {
    title: 'Work Out'
  },
  {
    title: 'ToDo'
  }
];

exports.seed = function(knex) {
  return knex('lists')
    .then(function () {
      // Inserts seed entries
      return knex('lists').insert(lists);
    });
};
