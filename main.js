const labelContinent = ["Africa", "North America", "South America", "Asia", "Europe", "Oceania"]
    
    
    
    const dataObj = {
        labels: labelContinent,
        datasets: [
            {
                label: "China",
                data:  [50.4,51,52.4,52,53,53.3],
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(230, 187, 129)",
                borderColor: "rgb(230, 187, 129)"
            }, ] }

            new Chart("happy-chart",
            {
                type: "bar",
                data: dataObj,
                options: { 
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: ["Reduction in forested areas over the years"],
                        fontFamily: "TrebuchetMS",
                        fontSize: 24,
                        fontColor: 'rgb(0,120,0)',
                    }
                }
            });

            const labelCountry = ["Brazil", "Americas", "Africa", "Indonesia", "Asia and Pacific","Mexico","India"]
            const doughnutObj = {
                labels: labelCountry,
                datasets: [
                    {
                        label: "Share of deforestation",
                        data:  [33.12,20.85,17.46,13.94,11.21,2.01,1.41],
                        backgroundColor: [
                            "rgb(230, 187, 129)",
                            "rgb(237, 180, 171)",
                            "rgb(206, 250, 170)",
                            "rgb(185, 250, 242)",
                            "rgb(136, 161, 189)",
                            "rgb(199, 188, 230)",
                            "rgb(168, 125, 127)"
                        ]
                    }, ] }
        
            new Chart("happier-chart",
            {
                type: "doughnut",
                data: doughnutObj,
                options: { 
                    maintainAspectRatio: false,
                    legend: {
                        display: true 
                    },
                    title: {
                        display: true,
                        text: ["Share of tropical deforestation in % in 2013"],
                        fontFamily: "Bradley Hand",
                        fontSize: 30,
                        fontColor: 'rgb(81, 120, 82)',
                    }
                }
            });


/*var i = 0;
var txt = 'What is deforestation?'; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

typeWriter(); */


const labelAgriculture = ["beef", "oilseeds", "forestry", "Cereals", "Vegetables", "rice", "other crops", "sugar", "plant-based fibres"];//years in quotes
    

const dataObject = {
    labels: labelAgriculture,
    datasets: [
        {
            label: "Causes of deforestation",
            data:  [41,18.4,13,9.6,7.3,5.6,3.6,1.1,0.5],
            borderWidth: 2,
            fill: false,
            backgroundColor:[ "rgb(133, 42, 28)",
                            "rgb(133, 42, 28)",
                            "rgb(240, 206, 197",
                            "rgb(240, 206, 197)",
                            "rgb(240, 206, 197)",
                            "rgb(240, 206, 197)",
                            "rgb(240, 206, 197)",
                            "rgb(240, 206, 197)",
                            "rgb(240, 206, 197)"

        ],
            borderColor:[ "rgb(133, 42, 28)",
                            "rgb(133, 42, 28)",
                            "rgb(240, 206, 197)",
                            "rgb(240, 206, 197)",
                            "rgb(240, 206, 197)",
                            "rgb(240, 206, 197)",
                            "rgb(240, 206, 197)",
                            "rgb(240, 206, 197)",
                            "rgb(240, 206, 197)",

        ]

        },
      
    ]
};

new Chart("causes",
        {
            type: "bar",
            data: dataObject,
            options: { 
                maintainAspectRatio: false,
                legend: {
                    display: false
                },

                
                title: {
                    display: true,
                    text: ["Drivers of deforestation"],
                    fontFamily: "Bradley Hand",
                    fontSize: 30,
                    fontColor: 'rgb(81, 120, 82)',
                }
            }
        });

        let counter=1349;

        function hello() {
            //console.log ('Hello');
            //document.getElementById("headerID").innerHTML = 'Hello';
            counter = counter +1;
            //document.getElementById("headerID").innerHTML = counter;
            document.getElementById("IPledge").innerHTML =   counter+ " " + "people have pledged to play their part." 
            
        }



        const labelYear = ["1970", "1975", "1980","1985", "1990", "1995", "2000", "2005", "2010", "2018"]
    
    
    
        const dataLPI = {
            labels: labelYear,
            datasets: [
                {
                    label: "LPI index",
                    data:  [1,0.935558012,0.815080934, 0.697531144, 0.626811227,0.540360964, 0.472215375, 0.422031513, 0.351531515,0.308975673],
                    borderWidth: 2,
                    fill: false,
                    borderColor: "rgb(166, 75, 50)",
                    borderWidth: 5,
                }, ] }
    
                new Chart("LPIchart",
                {
                    type: "line",
                    data: dataLPI,
                    options: { 
                        maintainAspectRatio: false,
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: ["Living Planet Index 1970-2018"],
                            fontFamily: "Bradley Hand",
                            fontSize: 30,
                            fontColor: 'rgb(81, 120, 82)',
                        }
                    }
                });