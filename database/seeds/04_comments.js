exports.seed = async function(knex) {
  await knex('comments').del();

  await knex('comments').insert([
    {task_id: 1, user_id: 1, comment_text: 'This is a comment on Task 1'},
    //... other comments
  ]);
};
