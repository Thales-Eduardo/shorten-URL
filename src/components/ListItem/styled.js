import styled from "styled-components/native";
import { theme } from "../../global/theme";

export const ContainerButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.transparent};
  margin: 7px 15px;
  padding: 12px;
  border-radius: 7px;
`;

export const Title = styled.Text`
  color: ${theme.colors.primary};
  padding-left: 10px;
  padding-right: 10px;
  font-size: 17px;
`;

export const ActionContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin: 7px 10px;
  width: 15%;
  background-color: ${theme.colors.backgroundButton};
  border-radius: 7px;
`;
