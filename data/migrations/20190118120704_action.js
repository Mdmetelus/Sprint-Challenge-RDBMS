
exports.up = function(knex, Promise) {

    return knex.schema.createTable('actions', function(tbl) {

        tbl.increments();

        tbl.string('action_name').notNullable();

        tbl.string('action_details');

        tbl.boolean('completed').defaultTo(false);

        tbl.integer('project_id').notNullable().unsigned();

        tbl.foreign('project_id').references('id').on('projects');
        
      });
  
};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('actions');
  
};
