import React from "react";
import { Button } from "../../components/Button";
import { Container, Content, Icon, Text1, Text2 } from "./styles";

export function Plant02() {
    return (
        <Container>
            <Content>
                <Icon name="smile-beam" />
                <Text1>Prontinho</Text1>
                <Text2>Agora vamos começar a cuidar das suas platinhas com muito cuidado.</Text2>
                <Button button="Começar" />
            </Content>
        </Container>
    )
}