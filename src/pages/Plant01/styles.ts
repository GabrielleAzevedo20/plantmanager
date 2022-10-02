import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) =>  theme.colors.background};
`;

export const Content = styled.View`
    width: 100%;
    height: ${RFPercentage(70)}px;
    padding: 25px 0;
    margin: 0 auto;
    align-items: center;
    margin-top: ${RFValue(50)}px;

    justify-content: center;
`;


export const Icon = styled(Ionicons)`
    color: ${({ theme }) => theme.colors.success};
    font-size: ${RFValue(50)}px;
    padding-bottom: 24px;
`;

export const Text = styled.Text`
    width: 60%;
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const InputName = styled.TextInput`
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 0 60px 0 60px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
`;