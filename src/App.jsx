import AppSeguro from "./componets/AppSeguro";
import { CotizadorProvider } from "./context/cotizadorProvider";
const App = () => {
  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  );
};

export default App;
