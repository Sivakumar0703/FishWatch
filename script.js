var url = 'https://www.fishwatch.gov/api/species'; // url to fetch


async function asyn_function() {

  try {
    var promise = fetch(url);

    var response = await promise;

    var promise2 = response.json();

    var final = await promise2;


    main = document.createElement('div'); // outer div
    main.classList.add('container');
    var con_parent = document.querySelector('body');
    con_parent.insertAdjacentElement('afterbegin', main);


    for (let i of final) {

      const container = document.createElement('div'); // div to contain all the data 
      container.classList.add('con_style');

      var name = document.createElement('p'); // Fish name
      name.innerText = 'Fish Name :'.concat(i['Species Name']);
      container.append(name);

      var sci_name = document.createElement('p'); // Scientific name of the fish
      sci_name.innerText = 'Scientific Name :'.concat(i['Scientific Name']);
      container.append(sci_name);

      var apperance = document.createElement('p'); // Apperance 
      apperance.innerText = 'Apperance :'.concat(i.Color).replace('<p>', '').replace('</p>', '');
      container.append(apperance);

      var region = document.createElement('p'); // Region
      region.innerText = 'Region :'.concat(i['NOAA Fisheries Region']);
      container.append(region);

      var heading = document.createElement('p'); // Availability
      heading.classList.add('heading')
      heading.innerText = 'Availability :'.concat(i.Availability).replace('<p>', '').replace('</p>', '');
      container.append(heading);

      var harvest = document.createElement('p'); // Harvest Type
      harvest.innerText = 'Harvest Type :'.concat(i['Harvest Type']);
      container.append(harvest);


      var main = document.getElementsByClassName('container')[0]; // adding the container which holds the data of fish is appened to the main div
      main.append(container)
    }
  }
  catch (error) { // To catch the error in try block
    console.log('check the url');
  }

}
asyn_function();









