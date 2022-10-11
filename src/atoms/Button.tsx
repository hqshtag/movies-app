import styled from 'styled-components';

type Props = {
  color: string
}

const Button = styled.button<Props>`
  background: ${props => props.color};
  cursor: pointer;
  border-radius: 6px;
  width: 169px;
  height: 36px;
  padding: 6px 16px;
  margin: 6px;
  color: white;
  border: none;
  display:flex;
  align-items: center;
`;

export default Button