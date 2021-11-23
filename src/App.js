import { Button } from 'reactstrap';
import './styles/custom.scss';
import {Favs} from './components/Favs';

function App() {
  return (
    <div className="App">
      <h1 className="bg-dark">Pretty Groovy Jumbo Jet</h1>
      <button type="button" className="btn btn-primary">Primary</button>

      <div>
        <Button color="primary">
          Primary
        </Button>
        <Favs devId={1}/>
      </div>
    </div>
  );
}

export default App;
