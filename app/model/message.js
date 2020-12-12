export default {
  namespace: 'messages',
  state: {
    orders: [],
    trades: [],
  },
  reducers: {
    addOrders(state, payload) {
      let snapshot = [];
      if (payload[1].length === 3) {
        snapshot = state.orders;
        snapshot = snapshot.filter((item) => item[0] !== payload[1][0]);
        snapshot = [...snapshot, ...[payload[1]]];
      } else {
        snapshot = [...payload[1]];
      }
      snapshot = snapshot.filter(
        (item) => !(item[1] === 0 && (item[2] === 1 || item[2] === -1)),
      );
      return {
        ...state,
        orders: snapshot,
      };
    },
    addTrades(state, payload) {
      if (payload.length === 0) {
        return state;
      }
      let data = [];
      if (payload.length === 3) {
        data = state.trades;
        let exist = data.filter((i) => i[0] === payload[2][0]);
        data = exist.length === 0 ? [...data, ...[payload[2]]] : data;
      } else {
        data = Array.isArray(payload[1]) ? [...payload[1]] : [];
      }
      return {
        ...state,
        trades: data,
      };
    },
  },
  effects: (dispatch) => ({
    async fetchMessages(topicId) {},
  }),
};
