// working on child elements 
// factory functions boyo

const NewProject = (projectName, description, due, priority, notes) => {
    let projOuter = document.createElement('div');
    let projBase = document.createElement('div');
    let projectNameDiv = document.createElement('div');

    let dueDiv = document.createElement('div');
    let priorityDiv = document.createElement('div');
    let projBaseChild = document.createElement('div');
    let showChildSwitch = false;
    let minimizeExpand = document.createElement("div");
    let removeToDo = document.createElement('span');
    const showChildren = () => {
        projOuter.appendChild(projBaseChild);
        minimizeExpand.textContent = "-";
        showChildSwitch = true;
    }

    const hideChildren = () => {  
        projOuter.removeChild(projBaseChild);
        minimizeExpand.textContent = "+";
        showChildSwitch = false;
    }
    const createChildElement = (parent, labelText, child) => {
        let container = document.createElement('div');
        container.className = "project-child";
        let labelElement = document.createElement('div');
        let childElement = document.createElement('div');

        labelElement.textContent = labelText;
        childElement.textContent = child;

        container.appendChild(labelElement);
        container.appendChild(childElement);  
        parent.appendChild(container);
    }
    // I realize how silly this is
    const removeParent = (e) => {
        let outerParent = e.target.parentNode.parentNode;
        
        outerParent.parentNode.removeChild(outerParent);
        
    }
    removeToDo.textContent = "X"
    removeToDo.className = "removeToDo"
    minimizeExpand.className = "minimizeExpand";
    projBase.className = "project-base";
    projBaseChild.className = "project-child-container";

    minimizeExpand.textContent = "+";
    projectNameDiv.textContent = projectName;

    dueDiv.textContent = due;
    priorityDiv.textContent = priority;
    
    // projectNameDiv.addEventListener('click')
    projBase.appendChild(minimizeExpand);
    projBase.appendChild(projectNameDiv);
    projBase.appendChild(dueDiv);
    projBase.appendChild(priorityDiv);
    projBase.appendChild(removeToDo);
    createChildElement(projBaseChild, "Description: ", description)
    createChildElement(projBaseChild, "Notes", "+");
    projOuter.appendChild(projBase);
    // projOuter.appendChild(projBaseChild);
    removeToDo.addEventListener('click', removeParent);
    minimizeExpand.addEventListener('click', function () {
        if(showChildSwitch == false){
            showChildren()
        }   else hideChildren();
        
    })
    return projOuter 
      
}
export default NewProject