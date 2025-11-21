import { Route } from "./components/Route";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { SearchPage } from "./pages/Search";
import { HomePage } from "./pages/Home";
import { ContactPage } from "./pages/Contact";

import "./App.css";

function App() {

  return (
    <>
      <Header />
      <Route path={'/'} component={HomePage} />
      <Route path={'/search'} component={SearchPage} />
      <Route path={'/contacto'} component={ContactPage} />
      <Footer />
    </>
  );
}

export default App;
