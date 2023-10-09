exports.seed = async function(knex) {
  await knex('users').del();

  await knex('users').insert([
    {username: 'JohnDoe', email: 'johndoe@example.com'},
    //... other users
  ]);
};
