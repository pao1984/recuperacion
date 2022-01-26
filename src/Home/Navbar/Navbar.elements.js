import styled from "styled-components";



export const NavbarContainer = styled.div`
text-decoration: none;
width: 100%;
height: 80px;
position: sticky;
top: 0;
z-index: 99;
background: #000000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
`;
export const NavbarWrapper = styled.div`
margin: auto;
width: 100%;
max-width: 1300px;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

export const IconLogo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-family: "Oswald";
font-size: 1.2rem;
color: #fff;
paddin-left: 2rem; 

`;

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 960px){
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #fff;
}
`;

export const MenuItem = styled.li`

height: 100%;
padding: 0.5rem 1.5rem;
display: flex;
justify-content: center;
align-items: center;
font-family: 1.2rem;
font-size: 'Oswald';
font-weight: 400;

&:hover{
   
    border-bottom: 0.3rem solid #fff;
    transition: 0.4s ease-in;
    border-radius: 5px; 
}

@media screen and (max-width: 960px){
    width: 100%;
    height: 75px;
}

`;

export const MenuItemLink = styled.a`
text-decoration: none;
color: #fff;
font-weight:300;
margin-right:10px;
text-decoration:underline;
`;

export const IconLogoMobile = styled.div`
display: none;

@media screen and (max-width: 960px){
    display: flex;
    color: #fff;
    font-size: 2rem;
    padding-right: 1rem;
}
`;
