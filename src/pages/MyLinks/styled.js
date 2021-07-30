import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { theme } from '../../global/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  margin-top: ${Platform.OS === 'ios' ? 35 + '%' : 20 + '%'};
  margin-left: 20px;
  font-size: 33px;
  font-weight: bold;
  color: ${theme.colors.primary};
`;

export const ListLinks = styled.FlatList``;

export const Aviso = styled.Text`
  margin: 10px 0px;
  margin-left: 20px;
  font-size: 13px;
  color: ${theme.colors.primary};
`;

export const ContainerEmpty = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 40%;
`;

export const WarningText = styled.Text`
  font-size: 20px;
  color: ${theme.colors.primary};
`;
