import Router from './routes'
import { GlobalStyle } from "./themes/globalStyle";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
