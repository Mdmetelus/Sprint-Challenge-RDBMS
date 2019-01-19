
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          description: "u too",
          notes: "ddsChdsdseck dsfadtraining kdsaft",
          complete: false,
          project_id: 1
        },
        {
          description: "stuff2",
          notes: "gfsdg hj vnc",
          complete: false,
          project_id: 2
        },
        {
          description: "abc",
          notes: "sdaDo jklnokgjt forgegklht htgho fgjhk",
          complete: false,
          project_id: 3
        },
        {
          description: "fds",
          notes: "nj;reguoygre hbj reu iure  iouyt ewqr",
          complete: false,
          project_id: 1
        }
      ]);
    });
};
