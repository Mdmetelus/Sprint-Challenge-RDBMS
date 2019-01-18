
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl) {

        tbl.increments();

        tbl.string('project_name').notNullable();

        tbl.string('project_description').notNullable();

        tbl.boolean('completed').defaultTo(false);
        
      });
  
};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('projects');
  
};
