
// factory functions boyo
const NewProject = (projectName, description, due, priority) => {
    let projOuter = document.createElement('div');
    let projBase = document.createElement('div');
    let projectNameDiv = document.createElement('div');
    let descriptionDiv = document.createElement('div');
    let dueDiv = document.createElement('div');
    let priorityDiv = document.createElement('div');
    let projBaseChild = document.createElement('div');
    let showChildSwitch = false;
    const showChildren = () => {
        projOuter.appendChild(projBaseChild);
        showChildSwitch = true;
    }

    const hideChildren = () => {  
        projOuter.removeChild(projBaseChild);
        showChildSwitch = false;
    }
    projBase.className = "project-base";
    projBaseChild.className = "project-base-child";
    
    projectNameDiv.textContent = '- ' + `${projectName}`;
    descriptionDiv.textContent = description
    dueDiv.textContent = due;
    priorityDiv.textContent = priority;
    
    // projectNameDiv.addEventListener('click')
    projBase.appendChild(projectNameDiv);
    projBase.appendChild(dueDiv);
    projBase.appendChild(priorityDiv);
    projBaseChild.appendChild(descriptionDiv);
    projOuter.appendChild(projBase);
    // projOuter.appendChild(projBaseChild);
    projOuter.addEventListener('click', function () {
        if(showChildSwitch == false){
            showChildren()
        }   else hideChildren();
        
    })
    return projOuter
      
}
export default NewProject