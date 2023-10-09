exports.seed = async function(knex) {
  await knex('tasks').del();
  await knex('projects').del();

  await knex('projects').insert([
    {user_id: 1, project_name: 'Project 1', description: 'Description of project 1'},
    //... other projects
  ]);
};
