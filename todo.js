document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
  
    if (taskValue) {
      const taskList = document.getElementById('taskList');
      const listItem = document.createElement('li');
      listItem.textContent = taskValue;
  
      // Bouton pour marquer comme terminé
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Terminé';
      completeButton.addEventListener('click', function() {
        listItem.classList.toggle('completed');
      });
  
      // Bouton pour supprimer la tâche
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Supprimer';
      deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
      });
  
      listItem.appendChild(completeButton);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
    }
  
    taskInput.value = '';  // Réinitialiser le champ
  });
  