import { Header } from "./components/header";
import { ThemeProvider } from "@emotion/react";
import { Colors } from "./theme";

const App = () => (
  <ThemeProvider theme={{ Colors }}>
    <Header />
  </ThemeProvider>
);

export default App;
