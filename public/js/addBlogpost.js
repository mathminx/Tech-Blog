const newPostFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the input form
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  if (!title && content) {
    alert("Title and content are required fields!");
    return;
  }
  // Send a POST request to the API endpoint
  const response = await fetch('/api/blogposts', {
    method: 'POST',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (response.ok) {
    // If successful, redirect the browser to the dashboard page
    alert("New post saved!");
    document.location.replace('/dashboard');
  } 
  else {
    alert("Something went wrong. Please try again.");
  }
};

document.querySelector('.post-form').addEventListener('submit', newPostFormHandler)