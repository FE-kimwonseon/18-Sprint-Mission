import PandaLogo from "../assets/image/PandaLogo.svg";
import UserProfile from "../assets/image/UserProfile.svg";
import styled from "styled-components";

const Headers = styled.header`
  width: 100%
    height: 70px;
    padding: 0 200px;
    display: flex;
    align-items: center;
    gap: 32px;
    border-bottom: 1px solid #dfdfdf;
  `;
const Gnb = styled.nav`
  display: flex;
  flex: 1;
`;

const Nav = styled.button`
  padding: 21px 15px;
  font-size: 18px;
  font-weight: 700;
`;

const Logo = styled.button``;

function Header() {
  return (
    <Headers>
      <Logo>
        <img src={PandaLogo} alt="로고" />
      </Logo>
      <Gnb>
        <Nav>자유게시판</Nav>
        <Nav>중고마켓</Nav>
      </Gnb>
      <button>
        <img src={UserProfile} alt="프로필 사진" />
      </button>
    </Headers>
  );
}

export default Header;
