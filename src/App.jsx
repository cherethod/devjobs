import { Routes, Route } from "react-router";
import { SearchPage } from "./pages/Search";
import { HomePage } from "./pages/Home";
import { ContactPage } from "./pages/Contact";
import { NotFoundPage } from "./pages/404";
import { JobDetails }  from "./pages/Details";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/search'} element={<SearchPage />} />
        <Route path={'/contacto'} element={<ContactPage />} />
        <Route path={'/job/:jobId'} element={<JobDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
