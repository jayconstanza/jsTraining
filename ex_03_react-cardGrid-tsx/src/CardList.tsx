import './CardList.css';
import Card from './Card';


type Person = {
  firstName: string;
  lastName: string;
  mood: string;
}

const people: Person[] = [{
  firstName: "Paco",
  lastName: "Pérez",
  mood: "🐼"
},
{
  firstName: "Carlos",
  lastName: "Asensio",
  mood: "🐷"
},
{
  firstName: "Pepe",
  lastName: "Alicia",
  mood: "🐷"
},
{
  firstName: "Jose Carlos",
  lastName: "Saaz",
  mood: "🐷"
},
{
  firstName: "Carlos",
  lastName: "Asensio",
  mood: "🐷"
},
{
  firstName: "Rubén",
  lastName: "Parra",
  mood: "🐷"
},
{
  firstName: "Carla",
  lastName: "Vasile",
  mood: "🤬"
},
{
  firstName: "Lourdes",
  lastName: "Perales",
  mood: "🐹"
},
{
  firstName: "Jay",
  lastName: "Constanza",
  mood: "😎"
}];

const listItems = people.map((person: Person) =>
  <Card {...person} />
);

function CardList() {
  return (
    <div className="CardList">
      {listItems}
    </div>
  );
}
export default CardList;