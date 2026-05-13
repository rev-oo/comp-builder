import CompBuilder from './components/CompBuilder';
import CompConfig from './components/CompConfig';
import { H1, H2 } from './components/common/Heading';

function App() {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <H1>Comp Builder</H1>
      <hr/>
      <H2>Config</H2>
      <CompConfig/>
      <H2>Build</H2>
      <CompBuilder/>
    </div>
  )
}

export default App;
