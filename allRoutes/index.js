const dbP = require('./data/helpers/projectModel');
const dbA = require('./data/helpers/actionModel');


router.get('/projects/:id', (req, res) => {
    const { id } = req.params;
  
    dbP.get(id)
    .then( project => {
        res.status(200).json(project);
    }).catch( err => {
      res.status(400).json({error: "Error! cannot find project."});
    });
  });


  router.post('/projects', (req, res) => {
    const nextProject = req.body;
  
      dbP.post(nextProject)
      .then( thisProject => {
        res.status(201).json(thisProject);
      }).catch( err => {
        res.status(500).json({error: 'Error! No new project created.'});
      });
  });

  server.get('/actions/:id', (req, res) => {
    const { id } = req.params;
  
    dbP.getTheProjectActions(id)
      .then( actions => {
        res.status(200).json(actions);
      }).catch( err => {
        res.json({error: 'Error!  Can not find any action on this project.'});
      });
  });

  server.post('/projects/:id/actions', (req, res) => {
    const { id } = req.params;
    const action = req.body;
    const newAction = {project_id: id, ...action}
  
      dbA.postAction(newAction)
      .then(action => {
        res.status(201).json(action);
      }).catch( err => {
        res.status(500).json({error: 'Error! No new action created.'});
      })
  })