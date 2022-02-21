import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Home = () => {
  const [getBooks, setGetbooks] = useState<any>();
  //   let titles = null;
  //   if (getBooks?.results) {
  //     titles = getBooks.results.map((item: any, index: number) => (
  //       <div key={index}>{item.title}</div>
  //     ));
  //   }

  //   useEffect(() => {
  //     axios
  //       .get("http://gutendex.com/books/")
  //       .then((data) => setGetbooks(data.data))
  //       .catch((error) => console.log(error));
  //   }, []);

  //   if (getBooks === "undefined") {
  //     return <div>Loading</div>;
  //   }

  return (
    <Homecontainer>
      <MainTitle>Movie, TV Show, Filmmakers, Film Listing</MainTitle>

      {/* {titles} */}

      <SecondaryTitle>GHOMEEEEEEEEEEEE</SecondaryTitle>
    </Homecontainer>
  );
};

export default Home;

const Homecontainer = styled.div`
  background-image: url("/img/theater.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: #dbdbdb;
`;

const MainTitle = styled.h1`
  font-weight: 600;
  margin-top: 20vh;
  font-size: 25px;
`;

const SecondaryTitle = styled.p`
  font-weight: 500;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.7);
`;
