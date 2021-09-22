import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.6)
    ),
    url(${(props) => props.imgSrc});
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  margin: 15px;
  font-size: 1.5em;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
`;
