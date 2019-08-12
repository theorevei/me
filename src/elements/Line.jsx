import styled from 'styled-components'

const Line = styled.div`
  text-align: center;
  position: relative;
  line-height: 100px;
  background: #fff;
  height: 4px;
  width: 100%;
  &:after {
    background-image: -webkit-linear-gradient(
      left,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet
    );
    position: absolute;
    content: '';
    height: 4px;
    right: 0;
    left: 0;
    top: 0;
  }
`

export default Line
