import styled from "styled-components";
import Spinner from "./Spinner";

function BaseButton({ loading, children, ...props }) {
  return <button {...props}>{loading ? <Spinner /> : children}</button>;
}

const Button = styled(BaseButton)`
  background-color: #6500c3;
  border: none;
  border-radius: ${({ $round }) => ($round ? `9999px` : `8px`)};
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  padding: 16px;

  &:hover,
  &:active {
    background-color: #7760b4;
  }
`;

export default Button;
