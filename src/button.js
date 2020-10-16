const submitButton = () => {
    let submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', )
}
// test what other files can see

const newProject = (projectName, description, due, priority) => {
    let projOuter = document.createElement('div');
    let projBase = document.createElement('div');
    let projectNameDiv = document.createElement('div');
    let descriptionDiv = document.createElement('div');
    let dueDiv = document.createElement('div');
    let priorityDiv = document.createElement('div');
    let projBaseChild = document.createElement('div');

    projBase.className = "project-base";
    projBaseChild.className = "project-base-child";
    
    projectNameDiv.textContent = `&#43; ${projectName}`;
    descriptionDiv.textContent = description
    dueDiv.textContent = due;
    priorityDiv.textContent = priority;
    
    projBase.appendChild(projectNameDiv);
    projBase.appendChild(dueDiv);
    projBase.appendChild(priorityDiv);
    projBaseChild.appendChild(descriptionDiv);
    projOuter.appendChild(projBase);
    projOuter.appendChild(projBaseChild);

    return projOuter
      
}
export default newProject