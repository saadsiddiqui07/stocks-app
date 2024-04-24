import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    padding: 18,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#090909',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 20,
  },
  backBtn: {
    backgroundColor: '#e2e8f0',
    padding: 10,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
});

export default styles;
