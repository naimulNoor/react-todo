import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import {Footer} from "./components/Footer"
import {Todos} from "./components/Todos"
import {Todo} from "./components/Todo"

function App() {
  const onDelete=(todo)=>{
    console.log("ON Delete",todo)
  }
  let todos =[
    {
    sn: 1,
    title:"Go to Market",
    decs:"You need to go to market and buy things"
    },
    {
    sn: 2,
    title:"Go to Market",
    decs:"You need to go to market and buy things"
    },
    {
    sn: 3,
    title:"Go to Market",
    decs:"You need to go to market and buy things"
    },
  ]
  return (
    <>
      <Header title="React TODO" searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
