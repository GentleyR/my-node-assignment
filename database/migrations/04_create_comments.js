exports.up = function(knex) {
    return knex.schema.createTable('comments', table => {
      table.increments('id').primary();
      table.integer('task_id').unsigned().references('id').inTable('tasks');
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('comment_text').notNullable();
      // add other columns if needed
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};
  