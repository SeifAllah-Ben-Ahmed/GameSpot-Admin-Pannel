const DarkModeReducer = (state, { type }) => {
  switch (type) {
    case 'LIGHT':
      return {
        darkMode: false,
      };
    case 'DARK':
      return {
        darkMode: true,
      };

    case 'TOGGLE':
      console.log(!state.darkMode);
      return {
        darkMode: !state.darkMode,
      };

    default:
      return state;
  }
};

export default DarkModeReducer;
