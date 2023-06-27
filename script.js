const cardContainer = document.getElementById("drawButton")
const cardNums = ["001","002","003","004","005","006","007","008","009","010","011","012","013","014","015","016","017","018","019","020","021","022","023","024","025","026","027","028","029","030","031","032","033","034","035","036","037","038","039","040","041","042","043","044","045","046","047","048","049","050","051","052","053","054","055","056","057","058","059","060","061","062","063","064","065","066","067","068","069","070","071","072","073","074","075","076","077","078","079","080","081","082","083","084","085","086","087","088","089","090","091","092","093","094","095","096","097","098","099","100","101","102","103","104","105","106","107","108","109","110","111","112","113"]
const allCards = []
const image1 = document.querySelector("section img:first-child")
const graveyard = []

function Card(number, src){
    this.number = number;
    this.src = src;
    allCards.push(this)
}

generateDeck()

function handleClick(event){
    if(event.target===cardContainer){
        let card = randNum()
        if(graveyard.length === allCards.length){
            image1.src = ""
            image1.alt = "Out of cards! Refresh to keep playing!"
        }
        else{
            while(graveyard.includes(card)){
                card = randNum()
            }
            image1.src = allCards[card].src;
            image1.alt = allCards[card].number;
            graveyard.push(card)
        }
    }
    else{}
}

function randNum(){
    return Math.floor(Math.random() * allCards.length)
}

function generateDeck(){
    for(let i = 0; i < cardNums.length; i++){
    new Card(cardNums[i], `cards/${cardNums[i]}.jpg`)
    }
}

cardContainer.addEventListener("click",handleClick)