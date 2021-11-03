import "./styles.css";
// import Grif from "../../img/grif.png";
// import Sly from "../../img/sly.png";
// import Huf from "../../img/huf.png";
// import Cor from "../../img/cor.png";

function StudentCard({ wizard }) {
  // function houseCard(house) {
  //   if (house === "Gryffindor") {
  //     return "Gryffindor card";
  //   } else if (house === "Slytherin") {
  //     return "Slytherin card";
  //   } else if (house === "Hufflepuff") {
  //     return "Hufflepuff card";
  //   } else if (house === "Ravenclaw") {
  //     return "Ravenclaw card";
  //   } else {
  //     return "White card";
  //   }
  // }

  // function houseImg(house) {
  //   if (house === "Gryffindor") {
  //     return Grif;
  //   } else if (house === "Slytherin") {
  //     return Sly;
  //   } else if (house === "Hufflepuff") {
  //     return Huf;
  //   } else if (house === "Ravenclaw") {
  //     return Cor;
  //   } else {
  //     return "https://imagensemoldes.com.br/wp-content/uploads/2020/06/Perfeito-Bras%C3%A3o-Harry-Potter-PNG-1024x1024.png";
  //   }
  // }

  return (
    <div className={wizard.house}>
      <img src={wizard.image} alt="" />
      <div>
        <h2>{wizard.name}</h2>
        <p>{wizard.house}</p>
        <p>{wizard.species}</p>
      </div>
    </div>
  );
}

export default StudentCard;
