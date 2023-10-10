exports.up = function(knex) {
    return knex.schema.createTable('projects', table => {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('project_name').notNullable();
      table.string('description').notNullable();
      // add other columns if needed
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('projects');
};
  