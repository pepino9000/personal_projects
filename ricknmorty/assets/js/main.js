import Personajes from './personajes.js';
import DetallesPersonajes from './detallesPersonajes.js';
function loadFinish(char){
    setTimeout(() => {
        $('.spinner-border.text-light').remove();
        let modal = document.getElementById("myModal");
        try{
            $("#cantidadPersonajes").append(
                `<div class="text-center">
                    <span>${char.length}</span>
                </div>`
            )
        }
        catch (err) {
            console.log(err);
        }

        $( "img").click(function() {
            let id = this.getAttribute("meta-id");
            modal.style.display = "block";
            char[id - 1].infoModal();
        });

        // When the user clicks on <span> (x), close the modal
        $(".close").click ( function() {
            modal.style.display = "none";
        })

        // When the user clicks anywhere outside of the modal, close it
        $(window).click(function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            }
        }
        )
    console.log('TimeOut ejecutado con éxito');
    }, 2000)
}


const llamadoPersonajes = (() => {
    var baseUrl = "https://rickandmortyapi.com/api/character/";
    var resultados = document.getElementsByClassName('resultados')[0];
    var container = [];

    const request = async (baseUrl) => {
        const response = await fetch(baseUrl);
        container = await response.json();
        return container;
    }
    const getChar = async (baseUrl, id) => {
        const url = `${baseUrl}${id}`;
        try{
            const response = await fetch(url);
            const c = await response.json();
            var char = [c.id, c.name, c.status, c.species, c.gender, c.created, c.origin.name, c.location.name, c.episode.length, c.image];
            return char;
        }
        catch (err) {
            console.log(err);
        }
    }

    container = request(baseUrl).then(value =>{container = value})
    const renderPosts = async () =>{
            var e = [];
            for(let i = 1; i < 21; i++){
                getChar(baseUrl, i).then(res => {
                    e.push(new DetallesPersonajes(res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7], res[8]));
                    e.sort(((a, b) => a.id - b.id));
                    if(20 == e.length){
                        for(let j = 0; j < 20; j++){
                            let imagen = container.results[j].image;
                            e[j].infoGeneral(resultados, imagen);
                        }
                        loadFinish(e);
                    }
                })
            }
    }

    return {renderPosts, loadFinish}
})();

llamadoPersonajes.renderPosts()



// (function llamadoPersonajes(){
//     const request = async (url) => {
//         const response = await fetch(url);
//         const results = await response.json();
//         return results;
//     }
//     const getChar = async (baseUrl, id) => {
//         const url = `${baseUrl}${id}`;
//         try{
//             const response = await fetch(url);
//             const c = await response.json();
//             var char = [c.id, c.name, c.status, c.species, c.gender, c.created, c.origin, c.location, c.episode];
//             console.log(char)
//             return char;
//         }
//         catch (err) {
//             console.log(err);
//         }
//     }
//     baseUrl = "https://rickandmortyapi.com/api/character/";
//     console.log(resultados)
//     container = request(baseUrl);

//     for(var i = 1; i < 21; i++){
//         arreglo = (getChar(baseUrl, i)).then(function(res) {
//             console.log(res)
//             var p = new DetallesPersonajes(res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7], res[8]);
//             console.log(p)
//             var e = []
//             e.push(p)
//             console.log(e)
//             e[0].infoGeneral(resultados, res[0]);
//             console.log(res);
//         });;
//         // fpu1(baseUrl, i, resultados)
//     }
//     $('.spinner-border.text-light').remove();


//     setTimeout(() => {
//         var modal = document.getElementById("myModal");

//         $( "img").click(function(event) {
//             console.log(event)
//             modal.style.display = "block";
//         });

//         // When the user clicks on <span> (x), close the modal
//         $(".close").click ( function() {
//             modal.style.display = "none";
//         })

//         // When the user clicks anywhere outside of the modal, close it
//         $(window).click(function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//             }
//         }
//         )
//        console.log('hola mundo!');
//    }, 1000)

// }());
