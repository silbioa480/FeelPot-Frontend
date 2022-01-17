import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyle from "./css/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </>
  );
}

export default App;
