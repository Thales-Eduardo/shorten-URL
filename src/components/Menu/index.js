import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Button } from './styled';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <Button onPress={() => navigation.openDrawer()}>
      <Feather name="menu" size={48} color="#fff" />
    </Button>
  );
};

export default Menu;

//para abrir e fechar a navegação.
