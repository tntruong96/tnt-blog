import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
  }
`;

export const HeaderLogo = styled.div`
  width: 100%;
  grid-column: 1/2;
  grid-row: 1 / span 2;
  display: flex;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  /* grid-column: 2/3;
  grid-row: 1 / span 3; */
  justify-items: center;
  justify-content: center;

  & ol {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      margin: 0 2rem;
    }
    li.active {
      text-decoration: underline;
    }
  }
`;

export const HeaderAuthen = styled.div`
  grid-column: 3;
  grid-row: 1/2;
`;

export const HamburgerButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  span {
    z-index: 10;
    display: block;
    width: 10px;
    height: 3px;
    background-color: #333;
    content: "";
    transition: 0.5s;
    &::before {
      display: block;
      width: 15px;
      height: 3px;
      background-color: #333;
      content: "";
      margin-top: 7px;
      transition: 0.5s;
    }

    &::after {
      display: block;
      width: 20px;
      height: 3px;
      background-color: #333;
      content: "";
      margin-top: 5px;
      transition: 0.5s;
    }
  }

  span.open {
    width: 20px;
    /* transition: width 0.5s ease-in-out; */
    transform: rotate(50deg);
    background-color: #fff;

    &::before {
      display: block;
      width: 0px;
      height: 3px;
      background-color: #fff;
      content: "";
      margin-top: 7px;
      transform: scale(0);
      transition: 0.5s;
    }

    &::after {
      display: block;
      width: 20px;
      height: 3px;
      background-color: #fff;
      content: "";
      margin-top: 5px;
      transform: translate(0px, -15px) rotate(-100deg);
    }
  }

  @media screen and (min-width: 640px) {
    display: none;
  }
`;

export const Aside = styled.aside`
  visibility: hidden;
  transform: translate(400px);
  height: 200vh;
  width: 400px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  transition: 0.5s;

  nav {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    ol {
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      width: 100%;
      height: 500px;
      padding: 1rem;
      li {
        height: 50px;
        margin: 0 2rem;
        color: gray;

      }
      li.active {
        text-decoration: underline;
        color: #fff;
      }
    }
  }

  &.open {
    visibility: visible;
    display: flex;
    justify-content: center;
    height: 200vh;
    width: 250px;
    min-width: 200px;
    background-color: rgb(15, 20, 30);
    transform: translate(0);
    transition: 0.5s;
    /* padding: 1rem; */
  }
`;
