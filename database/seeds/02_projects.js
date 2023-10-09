exports.seed = async function(knex) {
  await knex('projects').del();

  await knex('projects').insert([
    {user_id: 1, project_name: 'Project A', description: 'Description for Project A'},
    //... other projects
  ]);
};
