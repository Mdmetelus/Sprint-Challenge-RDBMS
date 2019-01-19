
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: "stuff1",
          description: "tdhsdth ty rst h t ht srthtr iol;ytyu eyi",
          complete: 0
        },
        {
          name: "stuff2",
          description: "ghsfghsfghsfghgsf thfthfg tfhjsftjhstf thst sdgh trsh ",
          complete: 0
        },
        {
          name: "stuff3",
          description: "pyuopoi ftg tsdghtrkljvc trshgchjdgh hghmcv",
          complete: 1
        }
      ]);
    });
};
