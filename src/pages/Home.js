import Header from "../components/Header";

import styled from "styled-components";
import Section from "../components/Section";

export default function Home () {
    return (
        <Container>
            <Section image="https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD" />
            <Section image="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70" />
        </Container>
    )
}

const Container = styled.div `
`