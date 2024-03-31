import { useEffect, useState } from "react";
import { getLinksUser } from "../api";
import "../css/Nav.css";
import logo from "../image/logo.png";
export function navigation(): string {
  if (window.location.pathname === "/shared") {
    return "";
  } else {
    return "sticky-nav";
  }
}
interface UserData {
  profileImageSource: string;
  name: string;
  email: string;
}
function Nav() {
  const [login, setLogin] = useState<UserData | null>(null);

  useEffect(() => {
    const nextlogin = getLinksUser();
    nextlogin.then((data) => {
      setLogin(data);
    });
  }, []);

  if (!login) {
    return (
      <a href="/html/signup.html" target="_self" className="loginBtn">
        로그인
      </a>
    );
  }

  return (
    <nav className={navigation()}>
      <div className="gnb">
        <a href="/" target="_self">
          <img className="logo" src={logo} alt="Linkbrary 로고"></img>
        </a>
        <div className="login">
          <img
            className="loginImg"
            src={login.profileImageSource}
            alt={login.name}
          ></img>
          <span className="emailname">{login.email}</span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
