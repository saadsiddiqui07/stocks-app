import { StyleSheet } from 'react-native';
import { HEIGHT, WIDTH } from '../../constants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container: {
    padding: 18,
  },
  form: {
    marginTop: HEIGHT * 0.1,
  },
  row: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: WIDTH * 0.8,
  },
  textContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  headline: {
    fontWeight: '800',
    color: '#111827',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Inter-Black',
  },
  subText: {
    color: '#1f2937',
    // textAlign: 'center',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#111827',
    width: WIDTH * 0.8,
    paddingHorizontal: 15,
    paddingVertical: 13,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  input: {
    color: '#000',
    marginVertical: 10,
    height: 40,
    fontSize: 15,
    marginLeft: 15,
    flex: 1,
  },
  bottom: {
    marginTop: 'auto',
    marginBottom: 25,
    gap: 10,
  },
  bottomText: {
    color: '#1f2937',
    textAlign: 'center',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
});

export default styles;
