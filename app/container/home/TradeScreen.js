import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import useWebSocket from 'react-use-websocket';
import {DataTable} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  txt:{
    textAlign: 'center'
  }
});
function TradeScreen({navigation}) {
  const trades = useSelector((state) => state.message.trades);
  const dispatch = useDispatch();
  const {sendMessage, lastMessage} = useWebSocket(
    'wss://api-pub.bitfinex.com/ws/2',
  );

  useEffect(() => {
    let msg = JSON.stringify({
      event: 'subscribe',
      channel: 'trades',
      symbol: 'tBTCUSD'
    })
    sendMessage(msg);
  }, []);

  useEffect(() => {
    let parsed = lastMessage ? JSON.parse(lastMessage.data) : [];
    if (!parsed.event && parsed != null) {
      dispatch.message.addTrades(parsed);
    }
  }, [lastMessage]);

  return (
    <SafeAreaView style={styles.container}>
      {/*<FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => {console.log(item); return item.toString()}}
      />*/}
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={styles.txt}>Time</DataTable.Title>
            <DataTable.Title>Price</DataTable.Title>
            <DataTable.Title>Amount</DataTable.Title>
          </DataTable.Header>
          {trades.reverse().map((trade) => (
            <DataTable.Row>
              <DataTable.Cell numeric>{trade[0]}</DataTable.Cell>
              <DataTable.Cell numeric>{trade[2]}</DataTable.Cell>
              <DataTable.Cell numeric>{trade[3]}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TradeScreen;
