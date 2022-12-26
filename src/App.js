import './App.css';
import Children4 from './Component/chidren4/Children4';
import Children1 from './Component/Children1';
import Children2 from './Component/Children2';
import Children3 from './Component/Children3';

function App() {
  return (
    <>
    <Children1 name="chidren 1"/>
    <Children2 name="children 2" address="bihar"/>
    <Children3 name="children 3" address="delhi"/>
    <Children4>
    <h1>hello i am children 4 and here used curly brackeet and props.children</h1>
    </Children4>
    </>
  );
}

export default App;
