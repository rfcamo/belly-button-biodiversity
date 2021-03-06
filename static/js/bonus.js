function gaugevalue(gaugenumber){
  
  d3.json("samples.json").then((data) => {
    var metadata= data.metadata;
    var resultsarray= metadata.filter(sampleobject => sampleobject.id == gaugenumber);
    var result= resultsarray[0]
    var gnumber = result.wfreq;
    
 
   var data = [
     {
       domain: { x: [0, 1], y: [0, 1] },
       value: gnumber,
       title: { text: "Belly Button Washing Frequency"},
       type: "indicator",
       mode: "gauge+number",
       delta: { reference: 9, increasing: { color: "#1f77b4" } },
       gauge: {
         bar: {color:'#1f77b4'},
         axis: { range: [null, 9] },
         steps: [
           { range: [0, 3], color: "#eeeeee" },
           { range: [3, 6], color: "lightgray" },
           { range: [6, 9], color: "darkgray" }
         ]
       }
     }
   ];
   
   var layout = { width: 500, height: 450, margin: { t: 0, b: 0 }, font:{color:'#1f77b4'} };
   Plotly.newPlot('gauge', data, layout);
   });
 }
 