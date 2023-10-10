exports.up = function(knex) {
    return knex.schema.createTable('tasks', table => {
      table.increments('id').primary();
      table.integer('project_id').unsigned().references('id').inTable('projects');
      table.string('task_name').notNullable();
      table.date('due_date').notNullable();
      table.string('status'); // Assuming status is a string. Modify as per actual data type.
      // add other columns if needed
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('tasks');
};
  