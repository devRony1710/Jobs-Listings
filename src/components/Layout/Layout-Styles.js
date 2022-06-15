import styled from "styled-components";

export const Header = styled.header`
  height: 150px;
  width: 100vw;
  background-image: url('https://res.cloudinary.com/ronyaab/image/upload/v1655292161/jobs-listings/bg-header-desktop_fqg46e.svg');
  background-repeat: no-repeat;
  background-size: cover;
`

export const Footer = styled.footer`
  height: 50px;
  width: 100vw;
  background-color: hsl(180, 29%, 50%);
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #FFF;
    font-weight: bold;
  }
`