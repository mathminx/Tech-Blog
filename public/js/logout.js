const logout = async () => {
  console.log("logging out");
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log("logging out");
  if (response.ok) {
    alert(response.statusText);;
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);