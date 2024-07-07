import { Routes, Route } from "react-router-dom"

import PaginaInicial from "./Pages/PaginaInicial/paginaInicial.js";
import PaginaListagem from "./Pages/PaginaListagem/paginaListagem.js";
import PaginaEstabelecimento from "./Pages/PaginaEstabelecimento/estabelecimento.js";
import PaginaInicialBusiness from "./Pages/PaginaInicialBusiness/PaginaInicialBusiness.js"
import PaginaLogin from "./Pages/PaginaLogin/paginaLogin.js"
import PaginaNovoEstabelecimento from "./Pages/PaginaNovoEstabelecimento/NovoEstabelecimento.js";
import Dashboard from "./Pages/PaginaDashboard/dashboard.js";
import Horario from "./Pages/PaginaDashboard Marcacoes/dashboard.js";
import EditarDados from "./Pages/PaginaDashboard Dados/dashboard.js";
import Avaliacoes from "./Pages/PaginaDashboard Avaliacoes/dashboard.js";
import Reservas from "./Pages/PaginaReserva/reservas.js"
import Signin from "./Pages/Login/login.js"
import Signup from "./Pages/Sigup/signup.js"
import Profile from "./Pages/Profile/profile.js"
import ProfileEdit from "./Pages/Profile Edit/profile.js";
import ProfileComentarios from "./Pages/Profile Comentarios/profile.js"
import ProfileFavoritos from "./Pages/Profile Favoritos/profile.js"
import ProfileReservas from "./Pages/Profile Reservas/profile.js"

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<PaginaInicial />} />
        <Route exact path="/search" element={<PaginaListagem />} />
        <Route exact path="/estabelecimento" element={<PaginaEstabelecimento />} />

        <Route exact path="/business" element={<PaginaInicialBusiness />} />
        <Route exact path="/business/login" element={<PaginaLogin />} />
        <Route exact path="/business/create" element={<PaginaNovoEstabelecimento />} />
        <Route exact path="/business/dashboard" element={<Dashboard />} />
        <Route exact path="/business/dashboard/marcacoes" element={<Horario />} />
        <Route exact path="/business/dashboard/alteracao-de-dados" element={<EditarDados />} />
        <Route exact path="/business/dashboard/avaliacoes" element={<Avaliacoes />} />
        <Route exact path="/estabelecimento/reserva" element={<Reservas />} />

        <Route exact path="/login" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />

        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/profile/edit" element={<ProfileEdit />} />
        <Route exact path="/profile/avaliacoes" element={<ProfileComentarios />} />
        <Route exact path="/profile/favoritos" element={<ProfileFavoritos />} />
        <Route exact path="/profile/reservas" element={<ProfileReservas />} />
      </Routes>
    </>
  );
}

export default App;
