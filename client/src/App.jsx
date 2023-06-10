import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./compo/IndexPage";
import Login from "./compo/Login";
import Layout from "./compo/Layout";
import Register from "./compo/Register";
import Account from "./compo/Account";
import Bookings from "./compo/Bookings";
import Places from "./compo/Places";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/bookings" element={<Bookings />} />
        <Route path="/account/places" element={<Places />} />
      </Route>
    </Routes>
  );
}

export default App;
