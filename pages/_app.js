//Contexts
import { DataContext } from '../src/Contexts/DataContex';
//data
import appData from '../src/Data/data.json';
//Styles
import '../styles/globals.css';

function App({ Component, pageProps }) {
  const data = appData;
  return (
    <DataContext.Provider value={data}>
      <Component {...pageProps} />
    </DataContext.Provider>
  );
}

export default App;
