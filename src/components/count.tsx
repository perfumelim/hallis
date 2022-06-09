import React, { useState } from "react";
import styled from "styled-components";

function Counter() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 3000);
  }
  return (
    <Container>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </Container>
  );
}

export default Counter;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
width: 500px;
box-shadow:
inset 0 0 60px whitesmoke,
inset 20px 0 80px #f0f,
inset -20px 0 80px #0ff,
inset 20px 0 300px #f0f,
inset -20px 0 300px #0ff,
0 0 50px #fff,
-10px 0 80px #f0f,
10px 0 80px #0ff;

}
`;
