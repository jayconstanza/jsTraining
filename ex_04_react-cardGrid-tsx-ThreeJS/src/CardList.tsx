import './CardList.css';
import { Component } from 'react';
import Card from './Card';
import * as THREE from 'three';

let scenes = [];
let cameras = [];
let renderers = [];
let cubes = [];

type Person = {
  firstName: string;
  lastName: string;
  mood: string;
  id: number;
}

const people: Person[] = [{
  firstName: "Paco",
  lastName: "Pérez",
  mood: "🐼",
  id: 1
},
{
  firstName: "Carlos",
  lastName: "Asensio",
  mood: "🐷",
  id: 2
},
{
  firstName: "Pepe",
  lastName: "Alicia",
  mood: "🐷",
  id: 3
},
{
  firstName: "Jose Carlos",
  lastName: "Saaz",
  mood: "🐷",
  id: 4
},
{
  firstName: "Carlos",
  lastName: "Asensio",
  mood: "🐷",
  id: 5
},
{
  firstName: "Rubén",
  lastName: "Parra",
  mood: "🐷",
  id: 6
},
{
  firstName: "Carla",
  lastName: "Vasile",
  mood: "🤬",
  id: 7
},
{
  firstName: "Lourdes",
  lastName: "Perales",
  mood: "🐹",
  id: 8
},
{
  firstName: "Jay",
  lastName: "Constanza",
  mood: "😎",
  id: 9
}];

const listItems = people.map((person: Person) =>
  <Card {...person} />
);

class CardList extends Component {
  constructor(props){
    super(props);
    this.animate = this.animate.bind(this);
  }
  init(index: number) {
    //creating scene
    scenes.push(new THREE.Scene());
    // scene.background = new THREE.Color(0x2a3b4c);

    //add camera
    cameras.push(new THREE.PerspectiveCamera(
      75,
      128 / 128
    ));

    //renderer
    renderers.push(new THREE.WebGLRenderer( { alpha: true } ));
    renderers[index].setSize(128, 128);
    renderers[index].setClearColor( 0x000000, 0 );

    //add geometry
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    cubes.push(new THREE.Mesh(geometry, material));

    scenes[index].add(cubes[index]);

    cameras[index].position.z = 3;

    return renderers[index].domElement;
  }
  animate() {
    requestAnimationFrame(this.animate);
    for (let i = 0; i < document.getElementsByClassName("Render").length; i++){
      cubes[i].rotation.x += 0.01;
      cubes[i].rotation.y += 0.01;
      renderers[i].render(scenes[i], cameras[i]);
      renderers[i].autoClear = false;
    }
    
  }
  componentDidMount(): void {
    for (let i = 0; i < document.getElementsByClassName("Render").length; i++){
      document.getElementsByClassName("Render")[i].appendChild(this.init(i));
    }
    this.animate();

  }
  render() {
    return (
      <div className="CardList">
        {listItems.map(item => <div key="{item.id}">{item}</div>)}
      </div>
    );
  }
}
export default CardList;