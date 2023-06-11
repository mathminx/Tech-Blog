const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#new-name').value.trim();
  const email = document.querySelector('#new-email').value.trim();
  const password = document.querySelector('#new-password').value.trim();
  console.log(name, email, password)
  
  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      alert("Account creation successful - you are now logged in!");
      document.location.replace('/dashboard');
    } else {
      console.log("Unable to create account!");
    }
  }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
