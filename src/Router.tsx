import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./views/Navigation";
import Header from "./views/Header";
import Section from "./views/Section";
import Footer from "./views/Footer";
import Home from "./routes/Home";
import LogIn from "./routes/LogIn";
import SignUp from "./routes/SignUp";
import Product from "./routes/Product";
import MemberPage from "./routes/MemberPage";
import CartPage from "./routes/CartPage";
import MemberInfo from "./routes/MemberInfo";
import UpdateMember from "./routes/UpdateMember";

function Router() {
  return (
    <BrowserRouter>
      <Navigation />

      <Header />

      <Section>
        <Switch>
          <Route path="/product/:productId">
            <Product />
          </Route>

          <Route path="/member">
            <MemberPage>
              <Switch>
                <Route path="/member/cart">
                  <CartPage />
                </Route>

                <Route path="/member/update/:memberId">
                  <UpdateMember />
                </Route>

                <Route path="/member/:memberId">
                  <MemberInfo />
                </Route>
              </Switch>
            </MemberPage>
          </Route>

          <Route path="/logIn">
            <LogIn />
          </Route>

          <Route path="/signUp">
            <SignUp />
          </Route>

          <Route path="/:pageNumber">
            <Home />
          </Route>
        </Switch>
      </Section>

      <Footer />
    </BrowserRouter>
  );
}

export default Router;
