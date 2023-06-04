 
// Send a POST request to the API endpoint
const updateButtonHandler = async (event) => {
  event.preventDefault();
  const response = await fetch('/api/blogposts/{', {
    method: 'GET',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    // If successful, redirect the browser to the dashboard page
    alert("New post saved!");
    document.location.replace('/dashboard');
  } 
  else 
  {
    alert("Something went wrong. Please try again.");
  }
};


const deleteButtonHandler = async (event) => {
  event.preventDefault();
  const response = await fetch(`/api/projects/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to delete project');
  }
};
  

document.querySelector('.update-button').addEventListener('click', updateButtonHandler)
document.querySelector('.delete-button').addEventListener('click', deleteButtonHandler)