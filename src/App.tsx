import { Header } from "./components/header";
import { ThemeProvider } from "@emotion/react";
import { Colors } from "./theme";
import { Main } from "./components/main";

const App = () => (
  <ThemeProvider theme={{ Colors }}>
    <Header />
    <Main />
  </ThemeProvider>
);

export default App;
