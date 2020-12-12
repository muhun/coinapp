import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import useWebSocket from 'react-use-websocket';
import {DataTable} from 'react-native-paper';
import Config from '../../constant/config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  scrollBox:{
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    width: '100%',
  },
});

const EvCard = ({item}) => (
  <Card>
    <Card.Content>
      <Title>{item[0]}</Title>
      <Paragraph>
        {item[0]} - {item[1]}- {item[2]}
      </Paragraph>
    </Card.Content>
  </Card>
);

function OrderScreen({navigation}) {
  const orders = useSelector((state) => state.message.orders);
  const dispatch = useDispatch();
  const {sendMessage, lastMessage} = useWebSocket(
    Config.apiBaseUrl
  );

  useEffect(() => {
    let msg = JSON.stringify({
      event: 'subscribe',
      channel: 'book',
      symbol: 'tBTCUSD',
    });
    sendMessage(msg);
  }, []);

  useEffect(() => {
    let parsed = lastMessage ? JSON.parse(lastMessage.data) : [];
    if (!parsed.event && parsed != null) {
      dispatch.message.addOrders(parsed);
    }
  }, [lastMessage]);

  const renderItem = ({item}) => <EvCard item={item} />;


  return (
    <SafeAreaView style={styles.container}>
      {/*<FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => {console.log(item); return item.toString()}}
      />*/}
      <ScrollView>
        <DataTable style={styles.box}>
          <DataTable.Header>
            <DataTable.Title>Total</DataTable.Title>
            <DataTable.Title>Price</DataTable.Title>
          </DataTable.Header>
          {orders.map((order) => (
            <DataTable.Row>
              <DataTable.Cell numeric>{order[2]}</DataTable.Cell>
              <DataTable.Cell numeric>{order[0]}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
}

export default OrderScreen;
