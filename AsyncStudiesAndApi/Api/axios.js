const http = require('http')
const axios = require('axios')

axios.get('https://restcountries.eu/rest/v2/name/turkey').then(res =>{
    
    const country = res.data[0]
    const capital = country.capital
    const population = country.population

    console.log(country.translations.es)
    console.log(`Population: ${population}, Capital: ${capital}`)
})