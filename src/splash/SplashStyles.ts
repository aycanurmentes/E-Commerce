import { StyleSheet } from 'react-native';
const SplashStyles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  imageContainer: {
    height: 320, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: '800',
    fontFamily: 'Montserrat',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#A8A8A9',
    fontWeight: '600',
    fontFamily: 'Montserrat',
    lineHeight: 24,
    textAlign: 'center',
  },
  bottomContainer: { 
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 24,
    paddingHorizontal: 0,
  },
   pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default SplashStyles;