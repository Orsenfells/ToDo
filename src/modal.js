import newProject from './button'
const domController = (() => {
    const modalBtn = document.querySelector("#new-project-btn");
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector("#close-btn");
    const project = document.getElementById("project");
    const description = document.getElementById('description');
    const due = document.getElementById('duedate');
    const priority = document.getElementById('priority');
    console.log(newProject(project.value, description.value, due.value, priority.value));
    const newProjectModal = (() => {
        let showModal = () => {
            modal.style.display = "flex";
        }
        let hideModal = () => {
            modal.style.display = "none";
        }
        modalBtn.addEventListener('click', showModal);
    
        closeBtn.addEventListener('click', hideModal);
        
        window.onclick = function(e) {
            if(e.target == modal) {
                modal.style.display = "none"
            }
        }
    })()
})()


export default domController;