fetch('http://localhost:3000/data', {
	method: 'POST',
	body: JSON.stringify({
		id: '2',
		username: 'GDG UNAM',
		webinar: "Tec Laguna"
	}),
	headers: {
		'Content-type': 'application/json; charset=UTF-8'
	}
})
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    })
.catch(function (error) {
	console.warn('Something went wrong.', error);
});
