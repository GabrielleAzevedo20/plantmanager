import React from 'react';
import {  Comodoss } from '../../components/Comodos';
import { Comodos, Container, Text, User, UserGreeting, UserInfo, UserName, UserPhoto, UserWrapper } from './styles';

export function Plant03() {
    const comodos = ["Sala", "Quarto", "Cozinha", "Banheiro"]
    return (
        <Container>
            <UserWrapper>
                <UserInfo>
                    <User>
                    <UserGreeting>Olá</UserGreeting>
                    <UserName>Gabrielle</UserName>
                    </User>

                    <UserPhoto source={{ uri: 'https://avatars.githubusercontent.com/u/67234590?v=4' }}/>
                </UserInfo>

            </UserWrapper>

            <Text>Em qual ambiente você quer colocar sua planta?</Text>

            <Comodos>
                {comodos.map(nota => (
                    <Comodoss comodos={String(nota)} />
                ))}
            </Comodos>

        </Container>
    );
}