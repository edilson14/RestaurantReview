import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
    color: '#0066CC',
    fontWeight: '300'
  },
  androidHeader: {
    padding: 20,
    paddingTop: 30,
    fontSize: 26,
    textAlign: 'center',
    color: '#0066CC'
  },
  name: {
    color: 'black',
    fontSize: 20
  },
  adressText: {
    color: 'grey'
  },
  nameAdress: {
    flexDirection: 'column',
    flex: 8,
    padding: 5
  },
  egds: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    minWidth: 50,
    borderRadius: 50
  },
  stars: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    minWidth: 50,
    color: '#FFD64C'
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 4,
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5'
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff'
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4
  },
  image: {
    marginTop: 30,
    alignItems: 'center'
  }
})
