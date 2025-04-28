
let navnEl = document.querySelector("input")
let reusultatEl = document.querySelector("#resultat")
let knappEl = document.querySelector("button")

const disney =async() =>{
    const url = "https://api.disneyapi.dev/character?page=1&pageSize=7438"
    const hent = await fetch(url)
    const json = await data.json()
    let figur = json

    for(let i = 0;i<figur.data.length;i++){
        if(figur.data[i].name==knappEl){
            console.log(i, figur.data[i].name.figur[i].films)
        }
    }
}