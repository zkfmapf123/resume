import React from 'react';
import {Resume} from './Screens/Resume';
import st from "styled-components";
import Color from 'Utils/Color';

const Container = st.div`
  display: flex;
  flex : 1;
  background-color : ${Color.OUTER_BACKGROUND_COLOR};
  padding-top : 5%;
  justify-content :center;
`;


function App() {
  return (
    <Container>
      <Resume/>
    </Container>
  );
}

export default App;
