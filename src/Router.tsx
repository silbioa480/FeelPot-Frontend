import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./views/Navigation";
import Header from "./views/Header";
import Section from "./views/Section";
import Footer from "./views/Footer";
import Home from "./routes/Home";
import LogIn from "./routes/LogIn";
import SignUp from "./routes/SignUp";
import { Container } from "react-bootstrap";

function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Header />
      <Section>
        <Switch>
          <Route path="/logIn">
            <LogIn></LogIn>
          </Route>
          <Route path="/signUp">
            <SignUp></SignUp>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Section>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
