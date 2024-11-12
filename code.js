async function getWeather() {

  const container = document.getElementById("container");
  container.innerHTML = '';

  let city = document.getElementById("city").value;
  let country = document.getElementById("country").value;
  if (typeof city === 'undefined' || city == '' || city === null || typeof country === 'undefined' || country == '' || country === null) {
    // get the div element by id
    var div = document.getElementById("container");
    // create a new h1 element to hold the error message
    var h1 = document.createElement("h1");
    // set the error message text
    h1.textContent = "Error: One or more values are missing or erroneous";
    // set the error message style
    h1.style.color = "red";
    h1.style.fontWeight = "bold";
    // append the p element to the div element
    div.appendChild(h1);
  }
  else {
    let data = {'city':city, 'country':country}
    //make a request to nodejs
    let response = await fetch('http://127.0.0.1:3000/weather/', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    let weather = await response.json();
    //console.log(weather)
    createTable(weather)
  }
}

async function createTable(data){
  //console.log(data)
  // Get the element where you want to display the tables
  var container = document.getElementById("container");
  // Loop through the JSON object
  for (var key in data) {
  // Check if the property value is null
    if (data[key] === null) {
      // Create a paragraph element with a message
      var p = document.createElement("p");
      p.textContent = key + ": No previous searches have been done!";
    
      // Append the paragraph element to the container
      container.appendChild(p);
    
    } else {
      // Create a table element
      var table = document.createElement("table");
    
      // Create a table header row with the property name
      var headerRow = table.insertRow();
    
      // Create a table header cell with the property name
      var headerCell = document.createElement("th");
    
      // Set the text content of the header cell to the property name
      headerCell.textContent = key;
    
      // Append the header cell to the header row
      headerRow.appendChild(headerCell);
    
      // Get the keys and values of the property object
      var keys = Object.keys(data[key]);
    
      var values = Object.values(data[key]);
    
      // Loop through the keys and values arrays
      for (var i = 0; i < keys.length; i++) {
        // Create a table row for each key-value pair
        var row = table.insertRow();
      
        // Create two table cells for each key-value pair
        var cell1 = row.insertCell();
      
        var cell2 = row.insertCell();
      
        // Set the text content of the cells to the key and value
        cell1.textContent = keys[i];
      
        cell2.textContent = values[i];
      
        // Append the cells to the row
      
      
        // The row is already appended to the table by insertRow method
      
      
        // No need to append anything here
      }
    }
    // Append the table element to the container
    container.appendChild(table);
  }
}