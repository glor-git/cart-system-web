import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import styled from '@emotion/styled'

const MyDiv = styled.div`
  background: gold;
  margin-top: 10px;
`;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <MyDiv>Test Text</MyDiv>
        </h1>
      </main>
    </div>
  );
};
export default Home;