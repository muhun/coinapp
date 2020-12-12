import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

const EvCard = ({title, category, onPress}) => (
  <Card onPress={onPress}>
    <Card.Content>
      <Title>{title}</Title>
      <Paragraph>{category}</Paragraph>
    </Card.Content>
  </Card>
);

function HomeScreen({navigation}) {
  const menu = [
    {
      title: ' Orders',
      category: 'BTCUSD',
      id: 1,
    },
    {
      title: ' Trades',
      category: 'BTCUSD',
      id: 2,
    },
  ];
  const renderItem = ({item}) => (
    <EvCard
      title={item.title}
      category={item.category}
      onPress={() => {
        let uri = item.id === 1 ? 'Order' : 'Trade';
        navigation.navigate(uri, {
          menu: item.title,
        });
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menu}
        renderItem={renderItem}
        keyExtractor={(item) => item.title.toString()}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
