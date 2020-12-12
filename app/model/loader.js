export default {
  namespace: 'loader',
  state: {
    loading: false,
    error: {},
  },
  reducers: {
    loading(state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    doneLoading(state) {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
};
