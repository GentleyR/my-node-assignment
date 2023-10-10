exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('username').notNullable();
      table.string('email').notNullable();
      // add other columns if needed
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
  