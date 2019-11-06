//the changes to make
exports.up = function(knex) {
    return knex.schema.createTable('cars', function (table) {
//adds a primary key called 'id' as an auto-incrementing integer, not null and unique
        table.increments();
        
        table.string('vin', 128).notNullable();
        table.string('make', 64).notNullable();
        table.string('model', 64).notNullable();
        table.float('mileage').notNullable();
        table.string('transmission', 64);
        table.string('title', 128);
        
        table.timestamps(true, true);
      }) 
};
//how to undo those changes
exports.down = function(knex) {
 return knex.schema.dropTableIfExists('cars') 
};
