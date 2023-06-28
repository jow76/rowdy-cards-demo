const cardContainer = document.getElementById("drawButton")
const prevContainer = document.getElementById("prevButton")
const nextContainer = document.getElementById("nextButton")
const cardNums = ["001","002","003","004","005","006","007","008","009","010","011","012","013","014","015","016","017","018","019","020","021","022","023","024","025","026","027","028","029","030","031","032","033","034","035","036","037","038","039","040","041","042","043","044","045","046","047","048","049","050","051","052","053","054","055","056","057","058","059","060","061","062","063","064","065","066","067","068","069","070","071","072","073","074","075","076","077","078","079","080","081","082","083","084","085","086","087","088","089","090","091","092","093","094","095","096","097","098","099","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138","139","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","155","156","157","158","159","160","161","162","163","164","165","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180","181","182","183","184","185","186","187","188","189","190","191","192","193","194","195","196","197","198","199","200","201","202","203","204","205","206","207","208","209","210","211","212","213","214"]
const allCards = []
const image1 = document.querySelector("section img:first-child")
const graveyard = []
let prev = graveyard.length
let backCount = 1;
countCards();

function Card(number, src){
    this.number = number;
    this.src = src;
    allCards.push(this)
}

function DeadCard(number, src){
    this.number = number;
    this.src = src;
    graveyard.push(this)
}

generateDeck()

function handleClick(event){
    // if(event.target===cardContainer){
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
            new DeadCard(image1.alt, image1.src)
            countCards();
            backCount=1;
        }
    // }
    // else{}
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

function countCards(){
    const p = document.getElementById("graveyardCount")
    const div = document.getElementById("discarded")
    p.textContent=graveyard.length;
    div.appendChild(p);
}

function displayPrevious(){
    if(backCount === graveyard.length){
        alert("No more previous cards!")
    }
    else{
        backCount +=1;
        let i = graveyard.length;
        i-=backCount;
        image1.src=graveyard[i].src;
        image1.alt=graveyard[i].number;
    }

}

prevContainer.addEventListener("click",displayPrevious)

function displayNext(){
    let i = graveyard.length;
    backCount-=1;
    i-=backCount;
    if (graveyard[i]===undefined){
        handleClick(event)
    }
    else{
        if(image1.src === graveyard[i].src){
        handleClick(event)
    }
        else{
            image1.src=graveyard[i].src;
            image1.alt=graveyard[i].number;
        }
    }
}

nextContainer.addEventListener("click", displayNext)