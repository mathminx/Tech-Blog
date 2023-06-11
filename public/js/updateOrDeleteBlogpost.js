const updateButtonHandler = async (event) => {
  event.preventDefault();

  // Collect values from the update form
  const blogpostId = sessionStorage.getItem("blogpostId");
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  
  // Send a PUT request to the API endpoint
  console.log(title, content);
  if (!title && content) {
    alert("Title and content are required fields!");
    return;
  }
  const response = await fetch(`/api/blogposts/${blogpostId}`, {
    method: 'PUT',
    body: JSON.stringify({ 
      title, 
      content,
     }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    // If successful, redirect the browser to the dashboard page
    alert("Blog post updated!");
    document.location.replace('/dashboard');
  } 
  else 
  {
    alert("Unable to update blog post.");
  }
};

const deleteButtonHandler = async (event) => {
  event.preventDefault();

  // Send a DELETE request to the API endpoint
  const blogpostId = sessionStorage.getItem("blogpostId");
  
  const response = await fetch(`/api/blogposts/${blogpostId}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    alert("Blog post deleted!");
    document.location.replace('/dashboard');
  }
  else {
    alert('Unable to delete blog post');
  };
};


document.querySelector('.update-button').addEventListener('click', updateButtonHandler);

document.querySelector('.delete-button').addEventListener('click', deleteButtonHandler);