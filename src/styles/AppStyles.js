import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    main: {
        flex: 1
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
    androidHeader:{
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
        color: 'grey',
    },
    nameAdress: {
        flexDirection: 'column',
        flex: 8
    },
    info: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    egds: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    input: {
        // marginBottom: 30,
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#000',
        borderBottomWidth: 4,
        borderColor: '#ddd',
        backgroundColor: '#f5f5f5'
    }
})