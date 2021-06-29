import styled from "styled-components/native";
import { StatusBar, Platform } from "react-native";

export const Button = styled.TouchableOpacity`
  top: ${Platform.OS === "ios"
    ? StatusBar.currentHeight + 60 + "px"
    : 5 + "px"};
  position: absolute;
  margin: 0 10px;
`;
