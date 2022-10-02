import React from "react";
import { Container, TitleButton } from "./styles";

interface Props {
    button: string;
}

export function Button({ button }: Props) {
    return (
        <Container>
            <TitleButton>{button}</TitleButton>
        </Container>
    )
}