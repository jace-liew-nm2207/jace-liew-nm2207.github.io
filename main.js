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
                        fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        fontSize: 25,
                        fontColor: 'rgb(81, 120, 82)',
                    }
                }
            });

// DOUGHNUT CHART FOR SHARE OF DEFORESTATION
            const labelCountry = ["Brazil(excl. Brazil and Mexico", "Americas", "Africa", "Indonesia", "Asia and Pacific (excl. Indonesia and India","Mexico","India"]
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
                        display: true,
                        fontColor: 'rgb(255,255,255)'
                    },
                    title: {
                        display: true,
                        text: ["Share of tropical deforestation in % in 2013"],
                        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        fontSize: 25,
                        fontColor: 'rgb(255,255,255)',
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

//BAR CHART FOR OVERALL DRIVERS OF DEFORESTATION
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
                    text: ["Overall drivers of deforestation"],
                    fontFamily: "TrebuchetMS",
                    fontSize: 20,
                    fontColor: 'rgb(199, 233, 204)',
                }
            }
        });

//PLEDGE
        let counter=1349;

        function hello() {
            //console.log ('Hello');
            //document.getElementById("headerID").innerHTML = 'Hello';
            counter = counter +1;
            //document.getElementById("headerID").innerHTML = counter;
            document.getElementById("IPledge").innerHTML =   counter+ " " + "people have pledged to play their part." 
            
        }

//LINE CHART FOR LPI INDEX

        const labelYear = ["1970", "1975", "1980","1985", "1990", "1995", "2000", "2005", "2010", "2018"]
    
    
    
        const dataLPI = {
            labels: labelYear,
            datasets: [
                {
                    label: "LPI index",
                    data:  [1,0.935558012,0.815080934, 0.697531144, 0.626811227,0.540360964, 0.472215375, 0.422031513, 0.351531515,0.308975673],
                    borderWidth: 2,
                    fill: false,
                    borderColor: "rgb(140, 44, 17)",
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
                            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                            fontSize: 20,
                            fontColor: 'rgb(0,0,0)',
                        },
                        responsive: true
                    }
                });

//functions for species affected information (onclick)

                function GLT() {
                    var x = document.getElementById("golden");
                    if (x.innerHTML === " ") {
                      x.innerHTML = "There are many monkey species that are endemic to the Amazon rainforest in Brazil,one of which is the Golden Lion Tamarin. Its name, is derived from its strikingly orange-coloured lion-like mane. The tamarin primarily lives in trees and forage for fruit, insects and even birds by traveling between branches. But deforestation to support the exponential growth of the logging and agriculture industries has destroyed the animal’s natural habitat. <b>Today, only 2-3% of its original rainforest habitat remains </b>, threatening the survival of the species. The International Union for Conservation of Nature (IUCN) currently classifies the Golden Lion Tamarin as an <b>endangered species</b>, and there are <b>only 2500 left in the wild. </b>";
                    } else {
                      x.innerHTML = " ";
                    }
                  }

                  function jaguar() {
                    var x = document.getElementById("jag");
                    if (x.innerHTML === " ") {
                      x.innerHTML = "Jaguars are the largest cat in the Americas. Unfortunately, they are also one of the species in the Amazon currently threatened by the destruction of the ecosystem. These big cats are strong swimmers and climbers, and require large areas of tropical rainforest and stretches of river bank to survive. They also hunt most animals in the Amazon ranging from deers, armadillos, monkeys and lizards, playing an important part in population control of other species. Jaguars are classified as <b>near threatened</b> and there are <b>only 173000 left in the wild today.</b>";
                    } else {
                      x.innerHTML = " ";
                    }
                  }

                  function macaw() {
                    var x = document.getElementById("spinx");
                    if (x.innerHTML === " ") {
                      x.innerHTML = " This dusty blue bird earned popular attention for inspiring the characters in the 2011 animated film, Rio. The Spix’s Macaw is the rarest parrot species in the world, and were <b>declared extinct in the wild in 2018</b>. These macaws were native to the arid lowland forests in the interior and northeast of Brazil. A species of tree (Tabebuia caraiba) was critical to the birds habitat, with one study noting that where these trees had been cleared, the macaw had disappeared. Habitat loss due to agriculture, combined with illegal trapping for the pet trade, is theorized to have led to their decline.";
                    } else {
                      x.innerHTML = " ";
                    }
                  }

//TYPEWRITER
                  let i = 0;
                  let txt = "What is deforestation?";
                  let speed = 130; // speed in miliseond
                  
                  
                  
                  function typeWriter() {
                      
                      // start with 0 letters, so the typewriter will start
                      if (i < txt.length) {
                      document.getElementById("typewriter").innerHTML += txt.charAt(i);
                      
                      // increasing i by 1 every milisecond
                      i++;
                      setTimeout(typeWriter, speed);
                    }
                  }


//GLOBAL DEFORESTATION MAP

// Load CSV data
d3.csv("https://2207-resources.s3.ap-southeast-1.amazonaws.com/annual-deforestation.csv", function (err, rows) {

  // Helper function to filter data by year
  function getDataByYear(Year) {
    return rows.filter(row => row.Year === Year.toString());
   //filter rows here and return them
  }

  // Define the years for which we want to create frames
  const years = d3.range(1990, 2015, 5);


// Create frames for each year using the filtered data
const frames = [];

for (let i = 0; i < years.length; i++) {
  const year = years[i];
  const data = getDataByYear (year);

  const frame = {
    name:year.toString(),
    data: [
      {
        z:data.map((row) => row.Deforestation),
        locations: data.map((row) => row.Code),
        text: data.map((row) => row.Entity),
      }
    ]
  }

  // populate frames here
 frames.push(frame);
}


  // Define the initial data for the choropleth map
  const data = [{
    type: "choropleth",
    locationmode: "world",
    locations: frames[0].data[0].locations,
    z: frames[0].data[0].z,
    text: frames[0].data[0].text,
    zauto: false,
    zmin: 0,
    zmax: 1000000,
  // this is your data object
  }];

  // Define the layout for the plot, including the geo settings, updatemenus, and sliders
  const layout = {
    title: 'Annual deforestation (in hectares) <br>1990 - 2015',
    geo: {
      scope: 'world',
      showland: true,
      landcolor: 'rgb(217, 217, 217)',
      countrycolor: 'rgb(255, 255, 255)',
      showlakes: true,
      lakecolor: 'rgb(255, 255, 255)',
      subunitcolor: 'rgb(255, 255, 255)'
    },
    updatemenus: [{
      x: 0.1,
      y: 0.5,
      showactive: false,
      direction: "left",
      type: "buttons",
      buttons: [{
        method: "animate",
        args: [null, {
          fromcurrent: true,
          transition: {
            duration: 200,
          },
          frame: {
            duration: 500
          }
        }],
        label: "Play"
      },
      {
        method: "animate",
        args: [
          [null],
          {
            mode: "immediate",
            transition: {
              duration: 0
            },
            frame: {
              duration: 0
            }
          }
        ],
        label: "Pause"
      }],
    }],
    sliders: [{
      steps: years.map(year => ({
        label: year.toString(),
        method: "animate",
        args: [[year.toString()], { mode: "immediate" }]
      })),
      currentvalue: { prefix: "Year:", font: { size: 20, color: "#666" } },
    }]
  };
  // Create the plot with the initial data and layout, then add the frames
  Plotly.newPlot('myDiv', data, layout).then(function () {
    Plotly.addFrames('myDiv', frames);
  });
});


//DRIVERS OF DEFORESTATION IN BRAZIL STACKED BAR PLOT
const data = fetch(
  "https://2207-resources.s3.ap-southeast-1.amazonaws.com/brazil's+drivers+of+deforestation+final.csv" //replace this with the appropriate URL
)
  .then(function (response) {
    return response.text();
  })
  .then(function (data) {
    console.log(data);
    const table = [];
    const rows = data.split("\r\n"); //replace this with the appropriate values 

    rows.forEach((r, index) =>{
      const item= r.split(",");
      table.push(item);
    });
    console.log(table);//insert your forEach loop here

    const labelYear = table[0].slice(1); //replace this with the appropriate values
    //const beingOld = table[3].slice(1); //replace this with the appropriate values
    const dataObj = {
      labels: labelYear,
      datasets: [
        {
          label: "Commodity driven deforestation",
          data: table[1].slice(1),
          borderWidth: 2,
          backgroundColor: "rgb(224, 166, 162)",
          borderColor: "rgb(224, 166, 162)",
          stack: "Stack 1"
        },
        {
          label: "Forestry",
          data: table[2].slice(1),
          borderWidth: 2,
          backgroundColor: "rgb(173, 247, 240)",
          borderColor: "rgb(173,247,240)",
          stack: "Stack 1"
        },
        {
          label: "Shifting agriculture",
          data: table[3].slice(1),
          borderWidth: 2,
          backgroundColor: "rgb(188, 173, 224)",
          borderColor: "rgb(188, 173, 224)",
          stack: "Stack 1"
        },
        {
          label: "Unknown",
          data: table[4].slice(1),
          borderWidth: 2,
          backgroundColor: "rgb(143, 76, 114)",
          borderColor: "rgb(143, 76, 114)",
          stack: "Stack 1"
        },
        {
          label: "Urbanisation",
          data: table[5].slice(1),
          borderWidth: 2,
          backgroundColor: "rgb(175, 237, 187)",
          borderColor: "rgb(175, 237, 187)",
          stack: "Stack 1"
        },
        {
          label: "Wildfire",
          data: table[6].slice(1),
          borderWidth: 2,
          backgroundColor: "rgb(100,100,100)",
          borderColor: "rgb(100,100,100)",
          stack: "Stack 1"
        },
      ],
    };

    new Chart("driversStacked", {
      type: "bar",
      data: dataObj,
      options: {
      
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: [
            "Main drivers of deforestation in Brazil (2001-2021)",
          ], //set this to 'Predicting likelihood of deepfake sharing','for Older People'
          fontFamily: "TrebuchetMS",
          fontSize: 20,
          fontColor: "rgb(199, 233, 204)",
        },

       
        
      },
    });
  });


  