import { Platform, StyleSheet } from 'react-native';
import { HEIGHT } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#e2e8f0',
    paddingHorizontal: 18,
  },
  contentContainer: {
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 10,
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBEBEB',
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'ios' ? 12 : 0,
    // marginHorizontal: 12,
    borderRadius: 10,
    gap: 15,
    alignSelf: 'center',
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#EBEBEB',
    flex: 1,
    color: '#000',
    fontSize: 15,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
  tagLine: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
  },
  subText: {
    color: 'gray',
    fontWeight: '400',
    fontSize: 15,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: HEIGHT * 0.1,
  },
});

export default styles;
