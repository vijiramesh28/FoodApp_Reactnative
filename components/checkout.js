import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import colors from '../assets/color/colors';
import Feather from 'react-native-vector-icons/Feather';

const Checkout = ({route, navigation}) =>{
    const {data} = route.params;

    return(
        <View style={styles.checkoutContainer}>
             <View style={styles.cartHeader}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <View style={styles.headerLeft}>
                    <Feather name="arrow-left" size={37} color={colors.textDark} style={styles.arrowIcon} />
                    </View>
                </TouchableOpacity>
                <View>
                </View>
            </View>

            <Text style={styles.checkoutTitle}>Checkout</Text>
            <View style={styles.paymentWrapper}>
                <Text style={styles.paymentMethod}><Feather name="circle" size={16} color={colors.textDark} style={styles.circleIcon} /> Paypal</Text>
                <Text style={styles.paymentMethod}><Feather name="circle" size={16} color={colors.textDark} style={styles.circleIcon} /> Cash on Delivery</Text>
                <Text style={styles.paymentMethod}><Feather name="circle" size={16} color={colors.textDark} style={styles.circleIcon} /> UPI</Text>
            </View>
            <View style={styles.checkoutbtnWrapper}>
                <TouchableOpacity onPress={()=>navigation.navigate('Checkout',{data:data})}>
                    <View style={styles.addtocartBtn}><Text style={styles.addtocartText}>Order Now</Text></View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    checkoutContainer:{
        flex:1
    },
    cartHeader:{
        flexDirection:'row',
        backgroundColor:colors.background,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        paddingTop:25,
        paddingLeft:20,
        paddingBottom:11
    },
    checkoutTitle:{
        marginTop:20,
        marginLeft:20,
        fontFamily:'Nunito-Bold',
        fontSize:20,
    },
    paymentWrapper:{
        marginTop:26,
        marginLeft:27,

    },
    paymentMethod:{
        fontFamily:'Nunito-SemiBold',
        fontSize:20,
        color:colors.textDark,
    },
    circleIcon:{
        paddingRight:16
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
})
export default Checkout