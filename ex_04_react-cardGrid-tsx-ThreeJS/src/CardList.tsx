import './CardList.css';
import { Component } from 'react';
import Card from './Card';
import * as THREE from 'three';

let scene, camera, renderer, cube;

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

class CardList extends Component {
  constructor(props){
    super(props);
    this.animate = this.animate.bind(this);
  }
  init() {
    //creating scene
    scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x2a3b4c);

    //add camera
    camera = new THREE.PerspectiveCamera(
      75,
      240 / 240
    );

    //renderer
    renderer = new THREE.WebGLRenderer( { alpha: true } );
    renderer.setSize(240, 240);
    renderer.setClearColor( 0x000000, 0 );
    //document.body.appendChild(renderer.domElement);

    //add geometry
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 3;

    return renderer.domElement;
  }
  animate() {
    requestAnimationFrame(this.animate);
    // renderer.autoClear = true;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    // renderer.autoClear = false;
    
  }
  componentDidMount(): void {
    document.getElementsByClassName("Render")[0].appendChild(this.init());
    this.animate();
  }
  render() {
    return (
      <div className="CardList">
        {listItems}
      </div>
    );
  }
}
export default CardList;