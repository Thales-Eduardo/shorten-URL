import React, { useCallback } from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { ContainerButton, Title, ActionContainer } from "./styled";

const ListItem = ({ data, selectedItem, deleteItem }) => {
  function RightActions() {
    return (
      <ActionContainer onPress={() => deleteItem(data.id)}>
        <Feather name="trash" color="#fff" size={24} />
      </ActionContainer>
    );
  }

  return (
    <View>
      <Swipeable renderRightActions={RightActions}>
        <ContainerButton activeOpacity={0.9} onPress={() => selectedItem(data)}>
          <Feather name="link" color="#fff" size={24} />
          <Title numberOfLines={1}>{data.long_url}</Title>
        </ContainerButton>
      </Swipeable>
    </View>
  );
};

export default ListItem;
