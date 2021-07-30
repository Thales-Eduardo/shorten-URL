import React, { useState, useEffect } from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';
import ListItem from '../../components/ListItem';
import StatusBarPage from '../../components/StatusBarPage';

import { useStorage } from '../../hooks/Storage';

import {
  Container,
  Title,
  ListLinks,
  Aviso,
  ContainerEmpty,
  WarningText,
} from './styled';

const MyLinks = () => {
  const isFocused = useIsFocused();
  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [isModal, setIsModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const { getLinksSave, deleteLink } = useStorage();

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('links');
      setLinks(result);
      setLoading(false);
    }
    getLinks();
  }, [isFocused]);

  function handleItem(item) {
    setData(item);
    setIsModal(true);
  }

  async function handleDelete(id) {
    const result = await deleteLink(links, id);
    setLinks(result);
  }

  return (
    <Container>
      <StatusBarPage backgroundColor="#132742" barStyle="light-content" />
      <Menu />

      <Title>Meus Links</Title>
      <Aviso>Arraste para o lado esquerdo para deletar o link</Aviso>

      {loading && (
        <ContainerEmpty>
          <ActivityIndicator color="#fff" size={24} />
        </ContainerEmpty>
      )}

      {!loading && links.length === 0 && (
        <ContainerEmpty>
          <WarningText>Você ainda não tem nenhum link 😢</WarningText>
        </ContainerEmpty>
      )}

      <ListLinks
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListItem
            data={item}
            selectedItem={handleItem}
            deleteItem={handleDelete}
          />
        )}
        contentContainerStyled={{ paddingBottom: 25 }}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={isModal} transparent animationType="slide">
        <ModalLink onClose={() => setIsModal(false)} data={data} />
      </Modal>
    </Container>
  );
};

export default MyLinks;
