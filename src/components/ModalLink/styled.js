import styled from 'styled-components/native';
import { theme } from '../../global/theme';

export const ModalContainer = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.primary};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0px;
`;

export const LinkArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${theme.colors.secondary};
`;
export const LongUrl = styled.Text`
  font-size: 17px;
  color: ${theme.colors.primary10};
  margin-bottom: 30px;
`;

export const ShortLinkArea = styled.TouchableOpacity`
  height: 55px;
  width: 100%;
  background-color: ${theme.colors.background};
  border-radius: 7px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const ShortLinkUrlText = styled.Text`
  width: 90%;
  color: ${theme.colors.primary};
  font-size: 17px;
`;
