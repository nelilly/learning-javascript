const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  // ...
});

const response2 = await fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // or response.text() for non-JSON data
  })
  .then(data => {
    console.log('Data received:', data);
    // Process the data
  })
  .catch(error => {
    console.error('Fetch error:', error);
    // Handle the error
  });
