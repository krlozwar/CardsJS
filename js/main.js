

window.addEventListener("load", function(event){
    event.preventDefault();
    getData();
});
    


function getData(){
      let promesa = fetch("https://fakestoreapi.com/products/", {
        method: "GET"
      });

      promesa.then((response)=>{
        response.json().then((data)=>{
            createCards(data);
        }).catch(
            (error)=>{console.error("Problema en el JSON", error);
        });
      }).catch((error)=>{
        console.error(error, "ocurrio un error en la solicitud");
      });
}//getData

let mainProds = document.getElementById("mainProds");

function createCards(prods){

        prods.forEach(prod => {
            console.log(prod);
            mainProds.insertAdjacentHTML("beforeend",
            `  
            <div class="card" style="width: 18rem; margin-rigth: 15rem;">
            <img src="${prod.image}" class="card-img-top" alt="${prod.description}">
            <div class="card-body">
                <h5 class="card-title">${prod.title}</h5>
                <p class="card-text"><strong>${prod.category}</strong></p>
                <p class="card-text">${prod.description.slice(0,80)}</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${prod.id}">
                Ver más
                </button>
            </div>
            </div>
            
                  <!-- Modal -->
                    <div class="modal fade" id="exampleModal_${prod.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">${prod.title}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ${prod.description.slice(0,500)}
                        </div>
                        <div style="text-align:left;">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Price: $ ${prod.price}</h1>
                            </div>
                        <div class="modal-footer">
                            
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>  `
            
            );
            
        });
    }
