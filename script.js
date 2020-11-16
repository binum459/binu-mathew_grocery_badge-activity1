// JavaScript Document
var ourRequest = new XMLHttpRequest();
var clickCounter = 0;

var ourButton = document.getElementById('get-details');
var ourDiv = document.getElementById('results');

ourButton.addEventListener('click', function(){
	ourRequest.open('GET', 'grocery.json');

	ourRequest.onload = function(){

		if (ourRequest.status >=200 && ourRequest.status<400){
			var ourData= JSON.parse(ourRequest.responseText);
			renderHtml(ourData);	
		}
		else {
			console.log('We connected to the server but it returned an error');
		}

	};

	ourRequest.onerror = function(){
		console.log('Connection Error');
	};


	ourRequest.send();

	clickCounter++;

	if (clickCounter >= 1){
		ourButton.setAttribute('disabled', 'disabled');
	}
});


function renderHtml(data){
	var htmlString = '';
	

	htmlString += '<table><tr><th>No</th> <th>Product Name</th> <th>Quantity</th> <th>Unit</th> <th>Department</th> <th>Notes</th>  </tr>';

	for (i=0;i< data.length;i++){

		htmlString += '<tr>';
		htmlString += '<td>'+ data[i].number + '</td>';
		htmlString += '<td>'+ data[i].product + '</td>';
		htmlString += '<td>'+ data[i].quantity + '</td>';
		htmlString += '<td>'+ data[i].unit + '</td>';
		htmlString += '<td>'+ data[i].dept + '</td>';
		htmlString += '<td>'+ data[i].notes + '</td>';
		htmlString += '</tr>';	
	}

	htmlString += '</table>';
	ourDiv.insertAdjacentHTML('beforebegin', htmlString);
}



