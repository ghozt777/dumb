import './components/Styles/App.css'
import { SharedContext , AppComponent} from './components' 
function App() {
  return (
    <div className="App">
      <SharedContext>
        <AppComponent />
      </SharedContext>
    </div>
  );
}

export default App;