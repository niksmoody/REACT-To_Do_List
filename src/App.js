import './App.css';
import Header from './myComponents/Header';
import Todo from './myComponents/Todo';
import Footer from './myComponents/Footer';

function App() {

  let alltodos=[
    {srno: 1, title: "Go to Dmart", desc: "Go to Dmart to buy some apples"},
    {srno: 2, title: "Get doc appointment", desc: "Get eyes checked"},
    {srno: 3, title: "Learn React", desc: "Master React to get a job"}
  ];

  return (
    <>
      <Header title="To Do List" t1="Home" t2="About" searchbar={false}/>
      <Todo todos={alltodos}/>
      <Footer/>
    </>
  )
};

export default App;
