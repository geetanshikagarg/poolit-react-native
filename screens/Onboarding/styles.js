import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal:'3%'
    },
    container:
    {   
        justifyContent:'center',
        marginTop:100
    },
    welcometopoolit:
    {   backgroundColor: 'green',
        padding: 20,
        width: '100%',
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    welcometopoolittext:
    {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    logocontainer:
    {
        padding:100, 
        marginTop:100
    },
    logo:
    {   height:100,
        padding:100, 
        marginTop:100
    }

});
export default styles;