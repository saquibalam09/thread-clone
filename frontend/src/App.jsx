import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";
// import Layout from "./components/Layout";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />
      </Routes>
    </Container>
  );
}

export default App;
