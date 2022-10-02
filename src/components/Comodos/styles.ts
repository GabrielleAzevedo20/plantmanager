import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
    width: ${RFValue(70)}px;
    margin-right: 5px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 10px 0;
`;

export const Comodos = styled.Text`
    font-size: ${RFValue(8)}px;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.bold};
`;