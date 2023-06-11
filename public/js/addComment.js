const newCommentFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the input form
  const blogpost_id = sessionStorage.getItem("blogpostId");
  const content = document.querySelector('#content').value.trim();
  if (!content) {
    alert("Comments cannot be blank!");
    return;
  }
  // Send a POST request to the API endpoint
  const response = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({ 
      content,
      blogpost_id,
     }),
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (response.ok) {
    // If successful, redirect the browser to the dashboard page
    alert("Comment saved!");
    document.location.href = `http://localhost:3001/blogpost/${blogpost_id}`
  } 
  else {
    alert("Unable to add comment.");
  }
};

document.querySelector('.comment-form').addEventListener('submit', newCommentFormHandler)