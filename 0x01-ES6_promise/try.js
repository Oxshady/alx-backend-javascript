function handleResponseFromAPI(promise){
	return promise.then(()=> ({status: 200, body:'Success'})).catch(()=> new Error()).finally(()=>console.log('Got a response from the API'))
}

const promise = Promise.resolve();
handleResponseFromAPI(promise).then((data)=>{
	console.log(data)
});

