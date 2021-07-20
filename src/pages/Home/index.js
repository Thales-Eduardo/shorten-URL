import React, { useState, useCallback } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Modal,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import StatusBarPage from "../../components/StatusBarPage";
import Menu from "../../components/Menu";
import ModalLink from "../../components/ModalLink";

import api from "../../services/api";
import { saveLink } from "../../utils/storage";

import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Sutitle,
  Title,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText,
} from "./styled";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [isInput, setIsInput] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [data, setData] = useState({});

  const handleShortLink = useCallback(() => {
    setLoading(true);
    try {
      const response = await api.post("/shorten", {
        long_url: isInput,
      });
      setData(response.data);
      setIsModal(true);

      saveLink("links", response.data);

      Keyboard.dismiss();
      setLoading(false);
      setIsInput("");
    } catch (err) {
      console.log(err.message);
      alert("shiih deu ruim!");
      Keyboard.dismiss();
      setIsInput("");
      setLoading(false);
    }
  }, [setLoading, setData, setIsModal, saveLink, setIsInput, Keyboard]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={["#1ddbb9", "#132742"]}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <StatusBarPage backgroundColor="#1ddbb9" barStyle="light-content" />
        <Menu />

        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "position"}
          enabled
        >
          <ContainerLogo>
            <Logo
              source={require("../../assets/logo.png")}
              resizeMode="contain"
            />
          </ContainerLogo>

          <ContainerContent>
            <Title>URL shortener</Title>
            <Sutitle>Cole seu link para incurtalo.</Sutitle>

            <ContainerInput>
              <BoxIcon>
                <Feather name="link" size={22} color="#fff" />
              </BoxIcon>
              <Input
                placeholder="Cole seu link aqui"
                placeholderTextColor="#fff"
                keyboardAppearance="dark"
                autoCorrect={false}
                autoCapitalize="none"
                KeyboardType="url"
                value={isInput}
                onChangeText={(text) => setIsInput(text)}
              />
            </ContainerInput>

            <ButtonLink onPress={handleShortLink}>
              {loading ? (
                <ActivityIndicator color="#000" size={24} />
              ) : (
                <ButtonLinkText>Gerar Link</ButtonLinkText>
              )}
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={isModal} transparent animationType="slide">
          <ModalLink onClose={() => setIsModal(false)} data={data} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default Home;
