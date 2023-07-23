
  // Get all axolotl items
  const axolotlItems = document.querySelectorAll('.axolotl-item');

  // Function to handle the click event
  function handleClick(event) {
    event.preventDefault(); // Prevent the default link behavior
    const item = event.currentTarget;

    // Add a class to trigger the click animation
    item.classList.add('clicked');

    // Remove the class after a short delay to reset the animation
    setTimeout(() => {
      item.classList.remove('clicked');
      // Redirect to the linked page
      window.location.href = item.getAttribute('href');
    }, 500); // Adjust the delay (in milliseconds) as needed
  }

  // Attach click event listeners to all axolotl items
  axolotlItems.forEach(item => {
    item.addEventListener('click', handleClick);
  });
