$(function (){
  $('button').click(function (event){
    event.preventDefault()
    var pokeID = $('#pokeId').val()
    if(pokeID <= 0 || pokeID > 895){
      alert('Error, debe ingresar un número entre 1 y 895')
    }
    else{
      var settings = {
        "url": `https://pokeapi.co/api/v2/pokemon/${pokeId.value}`,
        "method" : "GET"
      };
  
      $.ajax(settings).done(function(response){
        $('#name').text(response.name)
        $('#sprite').attr('src', response.sprites['front_default'])
        $('#sprite').attr('class', 'pokeFoto')
        $('.datos').empty()
        $('.datos').append(`<p class='number ib'>N° ${pokeId.value}&nbsp&nbsp&nbsp<br></p><p class='name ib'>${response.name}</p><br>`)
        response.types.forEach(element => {
          $('.datos').append(`<p class='type ${element.type.name}'>
        </p>
        `)
        });
        $('.type').each(function() {
          let type = this.getAttribute("class");
          console.log(type)
          type = type.slice(5)
          console.log(type)
          $(this).text(`${type}`);
        });
        createChart(response);
      })  
    }
  })
})

function createChart(data) {
  var cleanData = data.stats.map(function (info){
    return{ label: info.stat.name, y: info.base_stat}
  })
  CanvasJS.addColorSet("greenShades",
  [//colorSet Array

  "#4D8282",
  "#464F4F",
  "#203636",
  "#748282",
  "#7ACFCF",
  "#1E3333"            
  ]);
  var chart = new CanvasJS.Chart("chartContainer", {
    
    theme: "light1", // "light2", "dark1", "dark2"
    animationEnabled: false, // change to true
    colorSet: "greenShades",
    title:{
      text: "Estadísticas Pokemon"
    },
    backgroundColor: "transparent",
	axisX:{
  	lineThickness: 0,
    tickThickness: 0
  },
  axisY:{
  	lineThickness: 0,
    gridThickness: 0,
    tickThickness: 0
  },
    data: [
    {
      type: "column",
      dataPoints: cleanData
    }
  ]
});
chart.render();
// chart.axisX[0].stripLines[1].remove();

}
