// import logo from './logo.svg';
import './App.css';
import CardList from './CardList'
import ContextualMenu from './ContextualMenu'
import Form from './Form'


function App() {
  return (
    <section className="App">
      <CardList/>
      <ContextualMenu />
      <Form/>
    </section>
  );
}
export default App;