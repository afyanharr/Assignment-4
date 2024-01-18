const getData = async() => {
    try {

        const getInput = document.getElementById("input").value;

        const countryData = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${getInput}`, {
            headers: {
                
            }
        })

        const countryJson = await countryData.json()
        if (!countryJson.response.length) {
            return alert("Country not found!")
        }

        const data = countryJson.response
        console.log(data)

        let activeCases = document.getElementById("active-case")
        let newCases = document.getElementById("new-case")
        let recoveredCases = document.getElementById("recovered-case")
        let totalCases = document.getElementById("total-case")
        let totalDeath = document.getElementById("total-death")
        let totalTest = document.getElementById("total-test")

        activeCases.innerHTML = data[0].cases.active ? data[0].cases.active : "Data not found" 
        newCases.innerHTML = data[0].cases.new ? data.cases.new : "Data not found"
        recoveredCases.innerHTML = data[0].cases.recovered ? data[0].cases.recovered : "Data not found"
        totalCases.innerHTML = data[0].cases.total ? data[0].cases.total : "Data not found"
        totalDeath.innerHTML = data[0].deaths.total ? data[0].deaths.total : "Data not found" 
        totalTest.innerHTML = data[0].tests.total ? data[0].tests.total : "Data not found"
        
        console.log(countryJson)
    } catch (err) {
        console.log(err)
    }
 


}