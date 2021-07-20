import React, { useCallback } from "react";
import {
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Share,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import clipboard from "expo-clipboard";

import {
  ModalContainer,
  Container,
  Header,
  LinkArea,
  Title,
  LongUrl,
  ShortLinkArea,
  ShortLinkUrlText,
} from "./styled";

const ModalLink = ({ onClose, data }) => {
  const CopyLink = useCallback(() => {
    clipboard.setString(data.link);
    alert("Link copiado com sucesso!");
  }, [clipboard]);

  const handleShare = useCallback(async () => {
    try {
      const result = await Share.share({
        message: `Link: ${data.link}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("activityType");
        } else {
          console.log("Compartilhou");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("modal fechado");
      }
    } catch (err) {
      console.log(err.message);
    }
  }, [Share]);

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>
      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" color="#212743" size={30} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleShare}>
            <Feather name="share" color="#212743" size={30} />
          </TouchableOpacity>
        </Header>

        <LinkArea>
          <Title>Link Encurtado:</Title>
          <LongUrl numberOfLines={1}>{data.long_url}</LongUrl>

          <ShortLinkArea activeOpacity={1} onPress={CopyLink}>
            <ShortLinkUrlText numberOfLines={1}>{data.link}</ShortLinkUrlText>

            <TouchableOpacity onPress={CopyLink}>
              <Feather name="copy" color="#fff" size={25} />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  );
};

export default ModalLink;
