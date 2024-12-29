// create 4 cards, 2 crads using innerHtmk and 2 cards using createElement()

const card = document.querySelector("div");
card.id="dhoniCard"
card.innerHTML=`
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/MS_Dhoni_%28Prabhav_%2723_-_RiGI_2023%29.jpg" width=300 ; height="300"/>
<p>MS Dhoni</p>
<button>Explore More</button>`
card.style.border="2px solid black";
card.style.backgroundColor="#A6AEBF";
card.style.display="inline-block";
card.style.padding="10px";


const newCard = document.createElement("div");
newCard.id="sainanehwalCard"
newCard.innerHTML=`
<img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Saina_Nehwal_in_2011.jpg" width=300 ; height="300"/>
<p>Saina Nehwal </p>
<button>Explore More</button>`
newCard.style.border="2px solid black";
newCard.style.backgroundColor="#A6AEBF";
newCard.style.display="inline-block";
newCard.style.padding="10px";
document.body.appendChild(newCard)

let z = document.createElement("div")
z.id="background"
z.innerHTML=`
<img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="300"; height="300"/>
<p>PUPPY'S</p>
<button>Explore More</button>`
z.style.border="2px solid black";
z.style.backgroundColor="#A6AEBF";
z.style.display="inline-block";
z.style.padding="10px";
document.body.appendChild(z)

let k = document.createElement("div")
k.id="background2"
k.innerHTML=`
<img src="https://cdn.pixabay.com/photo/2023/10/10/14/27/night-view-8306605_640.jpg" width="300"; height="300"/>
<p>BEAUTIFUL VIEW</p>
<button>Explore More</button>`
k.style.border="2px solid black";
k.style.backgroundColor="#A6AEBF";
k.style.display="inline-block";
k.style.padding="10px";
k.style.margin_top="10px";
document.body.appendChild(k)



