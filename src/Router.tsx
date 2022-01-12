import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./views/Navigation";
import Header from "./views/Header";
import Section from "./views/Section";
import Footer from "./views/Footer";
import Home from "./routes/Home";
import LogIn from "./routes/LogIn";
import SignUp from "./routes/SignUp";
import Product from "./routes/Product";

function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Header />
      <Section>
        <Switch>
          <Route path="/:productId">
            <Product />
          </Route>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Section>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
