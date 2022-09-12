import styled from 'styled-components';
import logo from '../assets/images/tesla-logo.png'

export default function Header () {
    return (
        <Container>
            <img src={logo} alt="logo" />
            <NavItems>
                <h1>Model S</h1>
                <h1>Model 3</h1>
                <h1>Model x</h1>
                <h1>Model y</h1>
                <h1>Solar Roof</h1>
                <h1>Solar Panels</h1>
            </NavItems>
            <Menu>
                <h1>Shop</h1>
                <h1>Account</h1>
                <h1>Menu</h1>
            </Menu>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    position: fixed;
    padding: 20px 40px;
   
    display: flex;
    justify-content: space-between;

    img {
        width: 120px;
        height: 12px;

    }

    h1{
        font-size: 14px;
        transition: border-color 0.5s, background-color 0.5s, color 0.5s

        &:hover {

        }
            background-color: #fff
            border-color: transparent
            color: #444

    }
`

const NavItems = styled.div`
    width: 600px;

    justify-content: center;
    display: flex;

    gap: 25px;

`

const Menu = styled.div`
    padding-right:70px;

    gap: 25px;
    display: flex;
`