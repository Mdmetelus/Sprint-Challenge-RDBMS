const db = require('../dbconfig');
const mappers = require('./mapper.js');

module.exports = {
  get,
  post,
  getTheProjectActions,

    
}


function post(nextProject) {
    return db('projects').insert(nextProject);
}


function get(id) {
    let query = db('projects');
  
    if(id) {
      query.where('projects.id', id).first();
      
      const promises = [query, getTheProjectActions(id)];
      
      return Promise.all(promises)
        .then( results => {
          let [project, actions] = results;
          project.actions = actions;
  
          return mapper.projectToBody(project)
        });
    }
  
    return query.then( projects => {
      return projects.map( project => mapper.projectToBody(project));
    });
  };
  
  function getTheProjectActions(projectId) {
    console.log(projectId)
    return db('actions').where('project_id', projectId)
      .then(actions => actions.map(action => mapper.actionToBody(action)))
  }
