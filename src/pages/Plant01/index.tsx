import React from 'react';
import { Text } from 'react-native';
import { Button } from '../../components/Button';

import { Container, Content, Icon, InputName } from './styles';

export function Plant01() {
  return (
    <Container>
      <Content>
        <Icon name="happy" />
        <Text>Como podemos chamar você?</Text>

        <InputName placeholder="Digite um nome"></InputName>

        <Button button='Salvar' />
      </Content>
    </Container>
  );
}