import { Button } from 'reactstrap';
import './styles/custom.scss';

function App() {
  return (
    <div className="App">
      <h1 class="bg-dark">Pretty Groovy Jumbo Jet</h1>
      <button type="button" class="btn btn-primary">Primary</button>

      <div>
  <Button
    color="primary"
  >
    Primary
  </Button>
</div>
    </div>
  );
}

export default App;
