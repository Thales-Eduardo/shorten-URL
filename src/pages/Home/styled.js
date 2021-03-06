import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { theme } from '../../global/theme';

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === 'ios' ? 35 + 'px' : 10 + 'px'};
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ContainerContent = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === 'ios' ? 25 + '%' : 15 + '%'};
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${theme.colors.primary};
`;

export const Sutitle = styled.Text`
  font-size: 18px;
  color: ${theme.colors.primary};
  padding-bottom: 10%;
`;

export const ContainerInput = styled.View`
  align-items: center;
  flex-direction: row;
  border-radius: 7px;
  margin: 15px 0px;
  padding-left: 15px;
  padding-right: 15px;

  width: 100%;
`;

export const BoxIcon = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  width: 11%;
  height: 60px;
  border-bottom-left-radius: 7px;
  border-top-left-radius: 7px;
  background-color: ${theme.colors.transparent};
`;

export const Input = styled.TextInput`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 10px;
  height: 60px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  background-color: ${theme.colors.transparent};
  font-size: 17px;
  color: ${theme.colors.primary};
`;

export const ButtonLink = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 54px;

  margin: 0 15px;
  width: 91.3%;
  border-radius: 7px;
  background-color: ${theme.colors.primary};
  margin-bottom: 30px;
`;

export const ButtonLinkText = styled.Text`
  font-size: 18px;
  color: ${theme.colors.primary20};
`;
