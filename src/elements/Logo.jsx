import styled from 'styled-components'

const Logo = styled.div`
  cursor: pointer;
  margin: auto;
  margin-bottom: 1rem;
  max-width: 500px;
  border-radius: 50%;

  position: relative;
  margin: 300px auto 0;
  width: 500px;
  height: 250px;
  background: black;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    border-radius: 50%;
    background: linear-gradient(
      45deg,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #ff0000,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #ff0000
    );
    background-size: 400%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: -1;
    animation: steam 20s linear infinite;
  }

  @keyframes steam {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  &:after {
    filter: blur(50px);
  }
`

export default Logo
