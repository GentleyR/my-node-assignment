exports.seed = async function(knex) {
  await knex('tasks').del();

  await knex('tasks').insert([
    {project_id: 1, task_name: 'Task 1', due_date: '2023-09-30'},
    //... other tasks
  ]);
};
