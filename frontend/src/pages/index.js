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
      <div>
        <hr />
        <h1>
          {
            home.body.find((item) => item.__component === "page.text-blog")
              .title
          }
        </h1>
        <hr />
        <ul>
          {home.body
            .find((item) => item.__component === "page.value")
            .values.map((value) => (
              <li key={value.id}>
                <h2>{value.title}</h2>
                <p>{value.content}</p>

                <hr />
              </li>
            ))}
        </ul>
        {/*
         */}
      </div>
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
