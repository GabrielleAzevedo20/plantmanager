import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled.TouchableOpacity`
    width: 34%;
    background-color: ${({ theme}) => theme.colors.success};
    border-radius: ${RFValue(15)}px;
    align-items: center;
    padding: ${RFValue(3)}px;
`;

export const TitleButton = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
`;