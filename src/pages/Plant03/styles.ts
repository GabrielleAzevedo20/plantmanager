import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) =>  theme.colors.background};
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 80px;
    padding-left: 24px;
    align-items: center;
    padding-right: 24px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const UserPhoto = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: ${RFValue(28)}px;
    margin-left: ${RFValue(150)}px;
`;

export const UserGreeting = styled.Text`   
    color: ${({ theme }) => theme.colors.black};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserName = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Text = styled.Text`
    margin-left: 43px;
    width: 80%;
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Comodos = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    justify-content: space-between;
`;