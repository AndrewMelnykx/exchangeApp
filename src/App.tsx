import "./App.css";
import { ThemeProvider } from "@mui/material";
import Header from "@header/Header";
import { theme } from "@helpers/theme";
import ExchangeCard from "@card/ExchangeCard";
import { Provider } from "react-redux";
import store from "@redux/store/store";

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
