import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { PostsProvider } from "./context/PostsContext";
import { Router } from "./routes/Router";


function App() {
  return (
    <PostsProvider>
      <Header />
      <Router />
      <Footer />
    </PostsProvider>
  );
}

export default App;
