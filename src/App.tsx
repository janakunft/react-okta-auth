import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security, LoginCallback } from "@okta/okta-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";

const oktaAuth = new OktaAuth({
  issuer: import.meta.env.VITE_OKTA_ISSUER,
  clientId: import.meta.env.VITE_OKTA_CLIENT_ID,
  redirectUri: import.meta.env.VITE_OKTA_REDIRECT_URI,
  scopes: ["openid", "profile", "email"],
  pkce: true,
  authorizeUrl: `${import.meta.env.VITE_OKTA_ISSUER}/v1/authorize`,
  tokenUrl: `${import.meta.env.VITE_OKTA_ISSUER}/v1/token`,
});

function App() {
  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth: OktaAuth, originalUri: string) => {
    navigate(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/callback" element={<LoginCallback />} />
      </Routes>
    </Security>
  );
}

export default function AppWithRouting() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
