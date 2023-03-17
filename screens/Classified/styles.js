import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main:
    {
        padding:'5%'
    },
    discover:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '5%',
      },
    searchbar:
    {
        flexDirection: 'row',
        borderColor: '#C6C6C6',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: '2%',
        paddingVertical: '3%',
      },
      searchicon:
      {marginRight: '2%'
    },
    location:
    {
        marginVertical: '4%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    addlocation:
    {
        color: '#0aada8'
    },

    chip:
    {
        marginVertical: '4%',
        flexDirection: 'row',
        justifyContent: 'space-around',

      },
    cardcontainer:
    { 
        flexDirection: 'row', 
        justifyContent:'space-between',
        marginTop:'5%',
    },
    card:
    {
        elevation: 4,
        padding: '5%',
        width: '50%',
        borderRadius: 20,
        marginBottom: '3%',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'space-between'
    },
    cardimg:
    {
        width: '100%',
        height: 80,
    },
    cardtext:
    {
        color: 'black',
       fontSize: 16,
       textAlign:'center'
    },
});
export default styles;