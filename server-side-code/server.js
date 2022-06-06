const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

const bands = {
        "black flag":{
            "name": 'Black Flag', 
            "yearsActive": '1976–1986, 2003, 2013–2014, 2019 – present',
            "releases":
                `Damaged (1981) 
                My War (1984) 
                Family Man (1984)
                Loose Nut (1985)
                In My Head (1985)
                What The... (2013)`,
            "image":'https://i.imgur.com/3gWnoms.png'
            },
        "nofx":{
            "name":'NOFX',
            "yearsActive":'1983 - present',
            "releases":
                `Liberal Animation (1988)
                S&M Airlines (1989)
                Ribbed (1991)
                Punk in Drublic (1994)
                So Long and Thanks for All the Shoes, (1997)
                Pump Up the Valuum (2000)
                The War on Errorism (2003)
                Wolves in Wolves' Clothing (2006)
                Coaster (2009)
                Self Entitled (2012)
                First Ditch Effort (2016)
                Single Album (2021)`,
            "image":'https://images2.imgbox.com/fc/fd/R8apJXOA_o.png'
            },
        "misfits":{
            "name":'Misfits',
            "yearsActive":'1977–1983, 1995 – present',
            "releases":`    Walk Among Us (1982)
                Earth A.D./Wolfs Blood (1983)
                Static Age (1996)
                American Psycho (1997)
                Famous Monsters (1999)
                Project 1950 (2003)
                The Devil's Rain (2011)`,
            "image":"https://images2.imgbox.com/55/de/9YU28zr4_o.jpg"
        }
    }
app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    console.log(request.params.name)
    const bandName = request.params.name.toLowerCase()
    if( bands[bandName]){
        response.json(bands[bandName])    
    }else{
        response.json(bands['unknown'])
    }
    

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}, better go catch it!`)
})