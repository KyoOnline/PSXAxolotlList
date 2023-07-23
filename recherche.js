function filterAxolotls() {
  var input = document.getElementById("searchInput");
  var filter = input.value.toUpperCase();
  var axolotlItems = document.querySelectorAll(".axolotl-item");
  var noResultsMessage = document.querySelector(".no-results");

  var hasResults = false; // A flag to track if any results were found

  for (var i = 0; i < axolotlItems.length; i++) {
    var nameElement = axolotlItems[i].querySelector(".axolotl-name");
    var name = nameElement.textContent || nameElement.innerText;

    if (name.toUpperCase().indexOf(filter) > -1) {
      axolotlItems[i].style.display = ""; // Show the item
      hasResults = true; // Set the flag to true as we found at least one result
    } else {
      axolotlItems[i].style.display = "none"; // Hide the item
    }
  }

  // Show or hide the "Aucun résultat trouvé" message based on the flag
  noResultsMessage.style.display = hasResults ? "none" : "block";
}

function checkEnter(event) {
  // Check if the "Enter" key (key code 13) is pressed
  if (event.keyCode === 13) {
    // Call the filterAxolotls() function when Enter is pressed
    filterAxolotls();
  }
}
