import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Image, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/color/colors';
export default Product = ({route, navigation}) =>{
    const { data } = route.params; 
    return(
    
             <View style={styles.headercontainermain}>
                    {/* product header */}
                <View style={styles.headercontainer}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <View style={styles.headerleft}>
                        <Feather name="arrow-left" size={37} color={colors.textDark} />
                    </View>
                    </TouchableOpacity>
                    <View style={styles.headerright}>
                        <Feather name="shopping-cart" size={30} color={colors.textDark} />
                    </View>
                    </View>

                    {/* product main image */}
                <View style={styles.imageWrapper}>
                    <Image source={data.mainimg} style={styles.imageWrapper} />
                </View>
                <View style={styles.productDetailsContainer}>
                    <View style={styles.productpricecartWrapper}>
                        <View style={styles.cartBtn}>
                            <Feather name="plus" size={15} color={colors.background} style={styles.plusIcon}/>
                            <Text style={styles.cartCount}>1</Text>
                            <Feather name="minus" size={15} color={colors.background} style={styles.minusIcon} />
                        </View>
                    
                        <Text style={styles.pricestyle}>${data.price}</Text>
                    </View>
                    
                    <View style={styles.ingredientsWrapper}>
                        <Text style={styles.ingredientTitle}>Ingredients</Text>
                        <View style={styles.ingredientsListWrapper}>
                            <Text>{data.ingredients.join('       ')}</Text>
                        </View>
                        <View>
                            <Text style={styles.descriptionTitle}>Description</Text>
                            <Text style={styles.descriptionLines}>{data.description}</Text>
                        </View>
                    </View>
                    <View style={styles.addtocartWrapper}>
                    <TouchableOpacity  onPress={()=>navigation.navigate('Carts',{data:data})}>
                    <View style={styles.addtocartBtn}><Text style={styles.addtocartText}>Add to Cart</Text></View>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        

    )
}

const styles = StyleSheet.create({
    headercontainermain:{
        flex:1     
    },
    headercontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        paddingTop:25,
        backgroundColor:colors.background,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10
    },
    imageWrapper:{
        width:'100%',
        height:300
    },
    productDetailsContainer:{
        width:'100%',
        height:413,
        backgroundColor:colors.background,
        borderTopLeftRadius:70,
        borderTopRightRadius:70,
        position:'absolute',
        top:'45%',
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
    pricestyle:{
        fontFamily:'Nunito-SemiBold',
        fontSize:16,
        marginVertical:10,
        color:colors.primary
    },
    productpricecartWrapper:{
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    ingredientsWrapper:{
        paddingHorizontal:20
    },
    ingredientTitle:{
        fontFamily:'Nunito-Bold',
        fontSize:16,
        color:colors.textDark,   
    },
    bullet:{
        width:7,
        height:7,
        borderRadius:7,
        backgroundColor:colors.textLight
    },
    ingredientList:{
        marginRight:20
    },
    ingredientsListWrapper:{
        marginTop:8
    },
    descriptionTitle:{
        fontFamily:'Nunito-Bold',
        fontSize:16,
        color:colors.textDark,
        marginTop:26
    },
    descriptionLines:{
        fontFamily:'Nunito-Regular',
        fontSize:12,
        color:colors.textDark
    },
    addtocartWrapper:{
        alignItems:'center'
    },
    cartCount:{
        fontSize:12,
        fontFamily:'Nunito-SemiBold',
        color:colors.background
    },
    addtocartBtn:{
        width:157,
        height:30,
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
   
});