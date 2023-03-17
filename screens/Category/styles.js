import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal:'3%'
    },
    whattodocontainer:
    {
        backgroundColor: '#fff',
        elevation: 4,
        padding: '3%',
        width: '100%',
        borderRadius: 20,
        marginBottom: '5%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
      },
    text1:
    {
        marginTop:'3%',
        color: 'black',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        
      
      },
      image1:
      {
        width: '50%',
        height: 200
    },
    categorycard: {
        backgroundColor: '#fff',
        elevation: 4,
        padding: 50,
        width: '100%',
        borderRadius: 20,
        marginBottom: '5%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
      },
      cardtext:
      {
        color: 'black',
        fontSize: 16,
        flexWrap:'wrap',
        marginHorizontal:'8%',
        textAlign:'center'
      },
      cardimage:
      {
        width: "40%" ,
        height: '100%'}

      
});
export default styles;