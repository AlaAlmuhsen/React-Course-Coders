import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App({ pizza }) {
  return (
    <div className="container">
      <Header />
      <Menu pizza={pizza} />
      <Footer />
    </div>
  );
}

export default App;
