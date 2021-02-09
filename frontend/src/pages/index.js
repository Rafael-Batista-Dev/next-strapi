import Header from "../components/Header";
import Conteudo from "../components/Conteudo";
import Sobre from "../components/Sobre";

import fetch from "isomorphic-unfetch";

function Home({ home }) {
  console.log(home);

  return (
    <>
      <Header />
      <Conteudo />
      <Sobre />
    </>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/home`);
  const data = await res.json();

  return {
    props: {
      home: data,
    },
  };
}

export default Home;
