import styled from "styled-components"

export default function Section ({image}) {
    return (
        <Container image={image}>
            <Title>
                <h1>Model 3</h1>
                <h2>Order Online for Touchless Delivery</h2>
            </Title>
            <Buttons>
                <LeftButton> 
                    <h1>Custom Order</h1>
                </LeftButton>
                <RightButton>
                    <h1> Existing Inventory </h1>
                </RightButton>
            </Buttons>
        </Container>
    )
}

const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    background-image: url( ${props => props.image} );
    background-repeat: no-repeat;
    background-attachment: fixed; 
    background-size: cover;
    background-position: center;
`
const Title = styled.div`
    padding: 10vh;
    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 15px;

    h1 {
        font-size: 40px;
        color: #171a20;
    }
    h2 {
        font-size: 16px;
        color:#36393e;
    }
`
const Buttons = styled.div`
    padding: 10vh;
    display: flex;
    gap: 25px;
   
`

const LeftButton = styled.div`
   height: 40px;
   width: 260px;

   display: flex;
   text-align: center;
   align-items: center;
   justify-content: center;

   border: 3px solid none;
   border-radius: 6px;

   background: #3c3e43;

   color: white;

   &:hover {
    cursor: pointer;
   }

`

const RightButton = styled(LeftButton)`
    background: #e8e8e6;
    color: black;
   
`