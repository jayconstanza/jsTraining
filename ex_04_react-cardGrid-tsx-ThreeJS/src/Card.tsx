import { Component } from 'react';
import './Card.css';

//the same but with class syntax
type CardType = {
  firstName: string;
  lastName: string;
  mood?: string;
}
class Card extends Component {
  firstName: string;
  lastName: string;
  mood: string;
  constructor(props: CardType) {
    super(props);
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.mood = props.mood;
  }

  private formatName(props) {
    return props.firstName + ' ' + props.lastName;
  }
  private toggleContextualMenu(e: React.MouseEvent){
    e.preventDefault()
    if (e.currentTarget === e.target) {
      console.log('clicked self', e);
      const el = Array.from(document.getElementsByClassName('ContextualMenu') as HTMLCollectionOf<HTMLElement>);
      el[0].className = "ContextualMenu";
      el[0].style.left = e.pageX-64+"px";
      el[0].style.top = e.pageY-24+"px";
    } else {
      console.log('clicked child', e.target);
    }
  }

  render() {
    return (
      <div className="Card" 
      onContextMenu={this.toggleContextualMenu}>
        <h1 className="Card-name">{this.formatName(this.props)}</h1>
        <h2 className="Card-mood">{this.mood}</h2>
        <div className="Render">hey</div>
      </div>
    );
  }

}

export default Card;