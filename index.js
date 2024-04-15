async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const imgElement = document.getElementById("pokemonSprite");
        const name = document.getElementById('name');
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);


        if(!response.ok){
            imgElement.style.display = "none";
            name.innerHTML = `there is no pokemon named ${pokemonName}`
            throw new Error("Could not fetch resource");
            
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        name.innerHTML = pokemonName.toUpperCase();
    }
    catch(error){
        console.error(error);
    }
}
