import { useContext } from "react";
import styled from "styled-components";
import { SearchInput, Button, Avatar } from "evergreen-ui";
import { useMediaQuery } from "../hooks/mediaQuery";
import { userContext } from "../hooks/context";

export const Navbar = () => {
  const Nav = styled.div`
    height: 5vh;
    border-bottom: 0.03em solid grey;
    padding-left: 1em;
    padding-right: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const LoginButtons = styled.div`
    display: flex;
  `;
  const UserDetails = styled.div`
    display: flex;
    align-items: center;
  `;
  const user = useContext(userContext);
  const [isMobile, isTab, _] = useMediaQuery();
  return (
    <Nav>
      <span style={{ color: "teal", fontSize: '1.5em' }}>ReactBook</span>
      {!isTab && !isMobile && (
        <SearchInput
          style={{ width: 700 }}
          placeholder="Search for your friends"
        />
      )}
      {!isTab && !isMobile && !user.name && (
        <LoginButtons>
          <Button
            marginRight={16}
            onClick={() => user.setUser({ ...user, name: "Iresh Sharma" })}
          >
            LogIn
          </Button>
          <Button marginRight={16} appearance="primary">
            SignUp
          </Button>
        </LoginButtons>
      )}
      {!isTab && !isMobile && user.name && (
        <UserDetails>
          <span style={{ fontStyle: '1em' }}>{user.name}</span>
          <Avatar name={user.name} src={user.img} style={{ margin: '0 0.5em 0 0.5em' }} size={40} />
        </UserDetails>
      )}
    </Nav>
  );
};
