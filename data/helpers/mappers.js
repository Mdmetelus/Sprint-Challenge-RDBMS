module.exports = {
    boolToInt,
    intToBoolean,
    projectToBody,
    actionToBody,


}

function boolToInt(bool) {
    return bool === true ? 1 : 0;
}

function intToBoolean(int) {
    return int === 1 ? true : false;
}


function projectToBody(project) {
    const result = { ...project, completed: intToBoolean(project.completed) }; 
    
    if(project.actions) {
        result.actions = project.actions.map( action => ({...action, completed: intToBoolean(action.completed),
        }));
    }
    return result;
}

function actionToBody(action) {
    return {
      ...action,
      completed: intToBoolean(action.completed)
    };
  }