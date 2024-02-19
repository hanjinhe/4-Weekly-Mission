import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import Link from "./Link";
import KakaoButton from "./KakaoButton";
import codeitLogo from "./codeit.png";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  font-family: 'Noto Sans KR', sans-serif;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};;
}
`;
const THEMES = {
  light: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  dark: {
    backgroundColor: "#121212",
    color: "#ffffff",
  },
};
const Logo = styled.img`
  display: block;
  margin: 16px auto;
  width: 200px;
`;

const Description = styled.div`
  color: #848187;
  text-align: center;
`;

const Container = styled.div`
  width: 400px;
  margin: 40px auto;

  ${Input} {
    margin-bottom: 16px;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
  }

  ${Button} {
    width: 100%;
    margin: 8px 0;
  }
`;

function App() {
  const [theme, setTheme] = useState(THEMES["light"]);
  const handleSelectChange = (e) => {
    const nextThemeName = e.target.value;
    setTheme(THEMES[nextThemeName]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <select onChange={handleSelectChange}>
          <option value="light">라이트 모드</option>
          <option value="dark">다크 모드</option>
        </select>
        <GlobalStyle />
        <Logo src={codeitLogo} alt="codeit" />
        <Description>
          회원이 아니신가요? <Link href="#">회원가입 하기</Link>
        </Description>
        <form>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="styled@codeit.kr"
          />
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호"
          />
          <Button type="submit">로그인 하기</Button>
        </form>
        <KakaoButton />
      </Container>
    </ThemeProvider>
  );
}

export default App;
