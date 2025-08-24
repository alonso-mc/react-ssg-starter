import Layout from "./components/layout";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <h1>Welcome to My Website</h1>
        <p>This is a simple layout example.</p>
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
