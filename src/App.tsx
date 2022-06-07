import React from "react";
import "./App.css";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Counter from "./components/count";
import Lottie from "react-lottie";
import DonutBounce from "../src/lotties/donutBounce.json";
export interface IArrow {
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
  onClick?: React.MouseEventHandler<any> | undefined;
}

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: DonutBounce,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function SampleNextArrow(props: IArrow) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: IArrow) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Container>
      <h2> Single Item</h2>
      <Counter />
      <Lottie options={defaultOptions} height={400} width={400} />

      <StyledSlider {...settings}>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="" />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </StyledSlider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 50px;
`;

const StyledSlider = styled(Slider)`
  width: 500px;
`;
