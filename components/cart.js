import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/color/colors';
const Carts = ({route, navigation}) =>{
    const {data} = route.params;
    return(
        <View style={styles.headerContainer}>
            <View style={styles.cartHeader}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <View style={styles.headerLeft}>
                    <Feather name="arrow-left" size={37} color={colors.textDark} style={styles.arrowIcon} />
                    </View>
                </TouchableOpacity>
                <View>
                </View>
            </View>
            <Text style={styles.cartTitle}>Cart</Text>

            <View style={styles.cartListWrapper}>
                <Image source={data.mainimg} style={styles.cartImg}/>
                <Text style={styles.cartListTitle}>{data.title}</Text>
                <View style={styles.cartBtn}>
                            <Feather name="plus" size={15} color={colors.background} style={styles.plusIcon}/>
                            <Text style={styles.cartCount}>1</Text>
                            <Feather name="minus" size={15} color={colors.background} style={styles.minusIcon} />
                 </View>
                 <Text style={styles.cartPrice}>${data.price}</Text>
            </View>
            <View style={styles.cartTotalWrapper}>
                <Text style={styles.cartTotalText}>Total</Text>
                <Text style={styles.cartPrice}>${data.price}</Text>
            </View>
            <View style={styles.checkoutbtnWrapper}>
                <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{data:data})}>
                    <View style={styles.addtocartBtn}><Text style={styles.addtocartText}>Proceed to Checkout</Text></View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        flex:1
    },
    cartHeader:{
        flexDirection:'row',
        backgroundColor:colors.background,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    headerLeft:{
        marginTop:21,
        paddingLeft:20,
        marginBottom:15
    },
    cartTitle:{
        marginVertical:26,
        paddingLeft:20,
        fontFamily:'Nunito-Bold',
        fontSize:20,
        color:colors.textDark
    },
    cartListWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.background,
        padding:12,
        marginHorizontal:20,
        marginTop:35
    },
    cartImg:{
        width:86,
        height:64,
    },
    cartListTitle:{
        fontFamily:'Nunito-SemiBold',
        fontSize:16,
        color:colors.textDark,
        marginLeft:20,
    },
    cartBtn:{
        width:62,
        height:21,
        backgroundColor:colors.primary,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:5,
        marginTop:6,
    },
    cartCount:{
        fontSize:12,
        fontFamily:'Nunito-SemiBold',
        color:colors.background
    },
    cartPrice:{
        fontFamily:'Nunito-SemiBold',
        fontSize:16,
        color:colors.textDark
    },
    cartTotalWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop:12, 
        paddingRight:30
    },
cartTotalText:{
    marginRight:41,
    fontFamily:'Nunito-Bold',
    fontSize:20,
    color:colors.textDark
},
cartPrice:{
    fontFamily:'Nunito-Bold',
    fontSize:20,
    color:colors.textDark
},
addtocartBtn:{
    width:239,
    height:46,
    borderRadius:10,
    backgroundColor:colors.primary,
    justifyContent:'center',
    marginTop:22
},
addtocartText:{
fontFamily:'Nunito-SemiBold',
fontSize:12,
color:colors.background,
alignSelf:'center'
},
checkoutbtnWrapper:{
    alignItems:'center',
}
});
export default Carts;