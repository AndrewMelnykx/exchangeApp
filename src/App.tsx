import "./App.css";
import { ThemeProvider } from "@mui/material";
import Header from "@header/index";
import { theme } from "@helpers/theme";
import ExchangeCard from "@card/index";
import { Provider } from "react-redux";
import store from "@store/index";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <ExchangeCard />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
