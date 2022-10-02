import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FontAwesome5 } from '@expo/vector-icons'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme}) => theme.colors.background};
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

export const Icon = styled(FontAwesome5)`
    color: ${({ theme }) => theme.colors.success};
    font-size: ${RFValue(50)}px;
    padding-bottom: 24px;
`;

export const Text1 = styled.Text`
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Text2 = styled.Text`
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-bottom: ${RFValue(40)}px;}
`;