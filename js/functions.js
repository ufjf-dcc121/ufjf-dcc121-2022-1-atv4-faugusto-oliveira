const sheep = document.getElementById('Sheep');
const wolf = document.getElementById("Wolf");
const lettuce = document.getElementById("Lettuce");
const farmer = document.getElementById("Farmer");
const boat = document.getElementById("Boat");

sheep.addEventListener("click", moveElement);
wolf.addEventListener("click", moveElement);
lettuce.addEventListener("click", moveElement);
farmer.addEventListener("click", moveFarmer);

function moveElement(){
	if (boat.getElementsByTagName('*').length === 2 && this.parentElement.classList.contains("edge")){
			alert("Movimento inválido")
		}
		else{
			if(this.parentElement.id === "lEdge" && boat.parentElement.id === "lRiver"){
				document.getElementById("Boat").appendChild(this);
			}
			else if(this.parentElement.id === "rEdge" && boat.parentElement.id === "rRiver"){
				document.getElementById("Boat").appendChild(this);
			}
			else if (boat.parentElement.id === "lRiver" && this.parentElement.id === "Boat") {
				document.getElementById("lEdge").appendChild(this);
			}
			else if (boat.parentElement.id === "rRiver" && this.parentElement.id === "Boat") {
				document.getElementById("rEdge").appendChild(this);
			}
		}
};

function moveFarmer(){
	if (boat.parentElement.id === "lRiver") {
		document.getElementById("rRiver").appendChild(boat);
	}
	else if (boat.parentElement.id === "rRiver") {
		document.getElementById("lRiver").appendChild(boat);
	}
};