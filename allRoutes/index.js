const dbP = require('./data/helpers/projectModel');
// const dbA = require('./data/helpers/actionModel');


router.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
  
    dbP.get(id)
    .then( project => {
        res.status(200).json(project);
    }).catch( err => {
      res.status(400).json({error: "Error! cannot find project."});
    });
  });


  router.post('/api/projects', (req, res) => {
    const nextProject = req.body;
  
      dbP.post(nextProject)
      .then( thisProject => {
        res.status(201).json(thisProject);
      }).catch( err => {
        res.status(500).json({error: 'unable to create a new project'})
      });
  });