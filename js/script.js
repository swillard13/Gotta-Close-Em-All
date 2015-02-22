setListeners();

function setListeners() {
	$('button[name="comment_and_close"]').click(function(event){
    	catchPokemon();
	});
}

function catchPokemon() {
	console.log('Caught a POKEMON');
	chrome.storage.local.get('counter', function (result) {
		chrome.storage.local.set({'counter': result.counter+1});
		console.log(result.counter);
    });
}