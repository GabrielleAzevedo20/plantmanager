import React from "react";
import { Container , Comodos } from './styles';

interface ComodosProps {
    comodos: string;
}

export function Comodoss ({ comodos }: ComodosProps) {
    return (
        <Container>
            <Comodos>{comodos}</Comodos>
        </Container>
    )
}