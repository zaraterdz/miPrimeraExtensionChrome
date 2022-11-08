async function DoctorMole(){
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '399930ad2dmsh1e0db67d585e99bp12a2b5jsnd9735d695919',
            'X-RapidAPI-Host': 'molecular-data.p.rapidapi.com'
        },
        body: '{"moleculeId":"all"}'
    };
    
    fetch('https://molecular-data.p.rapidapi.com/', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

DoctorMole();