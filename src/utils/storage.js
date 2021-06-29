import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getLinksSave(key) {
  const myLinks = await AsyncStorage.getItem(key);
  let likeSaves = JSON.parse(myLinks) || [];
  return likeSaves;
}

export async function saveLink(key, newLink) {
  let likeStored = await getLinksSave(key);

  const hasLink = likeStored.some((Link) => Link.id === newLink.id);

  if (hasLink) {
    console.log("Esse liki já existe na lista!");
    return;
  }

  likeStored.push(newLink);

  await AsyncStorage.setItem(key, JSON.stringify(likeStored));
  console.log("deu bommmm pohhha");
}

export async function deleteLink(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem("links", JSON.stringify(myLinks));
  console.log("Link deletado com sucesso");

  return myLinks;
}

//depois tirar o log do app
