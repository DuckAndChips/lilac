import { EditPage } from "./pages/EditPage";
import { EditItemPage } from "./pages/EditItemPage";
import { Tag } from "./components/Tag";
import { AuthModal } from "./components/AuthModal";
import { LandingPage } from "./pages/LandingPage";
import { useState } from "react";
import { CustomButton } from "./components/CustomButton";
import { Portfolio } from "./pages/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./services/Auth";
import { db } from "./services/Database";

const testItem = {
  title: "Lilac",
  description: "Beautiful flower",
  tags: ["Diu", "Nei", "Lo", "Mo"],
  links: { Github: "/", YouTube: "/" },
  imageURL:
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
};

const testPortfolio = {
  name: "Jaden Tse",
  tagline: "Lengjai as fuck",
  tags: ["Diu", "Nei", "Lo", "Mo"],
  items: [
    {
      title: "Lilac",
      description: "Beautiful flower",
      tags: ["Diu", "Nei"],
      links: { Github: "/", YouTube: "/" },
      imageURL: "",
    },
    {
      title: "Lilac",
      description: "Beautiful flower",
      tags: ["Lo"],
      links: { Github: "/", YouTube: "/" },
      imageURL: "",
    },
    {
      title: "Lilac",
      description: "Beautiful flower",
      tags: ["Mo"],
      links: { Github: "/", YouTube: "/" },
      imageURL: "",
    },
  ],
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="auth" element={<AuthModal />} />
        </Route>
        <Route path="edit" element={<EditPage />} />
        <Route path="edit-item" element={<EditItemPage />} />
        <Route
          path="/view/:id"
          element={<Portfolio portfolio={testPortfolio} />}
        />
      </Routes>
    </BrowserRouter>
  );

  // return <Portfolio portfolio={testPortfolio} />;
  // return <EditItemPage portfolioItem={testItem} />
  // return <LandingPage />
}

export default App;
