import * as React from 'react';
import {View, ScrollView, SafeAreaView, Text,Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import color from '../assets/color/colors';
import Feather from 'react-native-vector-icons/Feather';
import CategoriesData from '../assets/data/categoriesData';
import BestSellingData from '../assets/data/bestSellingData';


export default Home = ({navigation}) =>{
    const categoryItem = ({ item }) => {
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('Categories', {item:item})} >
            <View style={[styles.categoryItemWrapper, {  backgroundColor:item.selected?color.secondary:color.background}]}>
                <Image source={item.image} style={styles.CategoryImage} />
                <Text style={[styles.categoryText, {color:item.selected?color.background:color.textDark}]}>{item.title}</Text>
            </View>
            </TouchableOpacity>
        );
       
        };

    return(
        <View style={styles.container}>
            <ScrollView>

                {/* Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/images/userimage.png')} style={styles.ImageWrapper} />
                    <Feather name="menu" size={26} color={color.textDark}></Feather>
                </View>
            </SafeAreaView>

                {/* Title */}
            
            <View style={styles.textWrapper}>
                    <Text style={styles.foodText}>Food for Life</Text>
                    <Text style={styles.textTitle}>Delivery</Text>
            </View>

                {/* search */}
            <View style={styles.searchWrapper}>
                <Feather name="search" size={20} color={color.textDark} />
                <View style={styles.searchInputWrapper}>
                    <Text style={styles.searchText}>Search...</Text>
                </View>
            </View>

                {/* categories */}
                
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoryTitle}>Categories</Text>
                <View style={styles.categoryScrollWrapper}>
                        <FlatList
                        data={CategoriesData}
                        renderItem={categoryItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                   
                    />
                    </View>
            </View>

            {/* Best Selling */}
            <View style={styles.bestSellingWrapper}>
                <Text style={styles.bestSelText}>Best Selling</Text>
                {
                    BestSellingData.map((data,id)=>{
                        return(
                            <TouchableOpacity key={id} onPress={()=>{navigation.navigate('Product', {data:data})}}>
                            <View  style={styles.bestselmainWrapper}>
                                <View style={styles.bestSelWrapper}>
                                    <View style={styles.bestselhead}>
                                        <Image source={require('../assets/images/prize.png')} style={styles.prizeSize}/>
                                        <Text style={styles.bestSelTitle}>{data.title}</Text>
                                    </View>
                                    <Text style={styles.bestSelFeature}>{data.feature}</Text>
                                    <View style={styles.bestSelPrizeWrapper}>
                                        <Text style={styles.bestSelPrize}>${data.price}</Text>
                                    </View>
                                    <View style={styles.bestSelRating}>
                                        <Feather />
                                        <View style={styles.OrderButton}>
                                            <Text style={styles.orderbtnText}>Order Now</Text>
                                        </View>
                                    </View>
                                </View>
                                <Image source={data.selimage} style={styles.bestselImg}/>
                            </View>
                            </TouchableOpacity>

                        )
                    })
                }
                
            </View>

        
           </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 20,
        marginTop:60,
    },  
    TextColor:{
        color:color.primary,
    },
    ImageWrapper:{
        width:40,
        height:40,
       borderRadius:20,
    },
    textWrapper:{
        paddingLeft:20,
        paddingTop:29,
        
    },
    foodText:{
        fontSize:14,
        fontFamily:'Nunito-Regular',
        color:color.textLight,
    },
    textTitle:{
        marginTop:5,
        fontFamily:'Nunito-Bold',
        fontSize:20,
        color:color.textDark,
    },
    searchWrapper:{
        flexDirection:'row',
        paddingHorizontal:20,
        marginTop:20,
        marginBottom:27,
    },
searchInputWrapper:{
    flex:1,
    marginLeft:20,
    borderBottomWidth:2,
    borderBottomColor: color.textLight,
},
searchText:{
    fontFamily:'Nunito-Regular',
    fontSize:12,
    color:color.textLight
},
categoriesWrapper:{
    paddingHorizontal:20,
},
categoryTitle:{
    fontFamily:'Nunito-Bold',
    fontSize:16,
    color:color.textDark,
},
categoryScrollWrapper:{
    paddingTop:16,
    // paddingHorizontal:20,
},  
categoryItemWrapper:{
    width:98,
    height:98,
    marginRight:20,
    borderRadius:5,
    borderColor:color.textLight,
    alignItems:'center',
    shadowColor: color.textDark,
    shadowOffset:{
        width:10,
        height:10,
    },
    
    shadowOpacity:0.6,
    shadowRadius:10,
    elevation:5,
    
},
CategoryImage:{
    width:44,
    height:44,
    marginTop:14,
    marginHorizontal:27,
    marginBottom:6,
},
categoryText:{
    fontFamily:'Nunito-Bold',
    fontSize:14,
    marginBottom:15,
    color:color.background,
},
bestSelText:{
    fontFamily:'Nunito-Bold',
    fontSize:16,
    color:color.textDark,
},
bestselImg:{
    width:141,
    height:78,
},
prizeSize:{
    width:25,
    height:23,
    marginTop:13,
    marginLeft:14
},
bestSellingWrapper:{
    marginTop:31,
    paddingLeft:20,
},
bestselhead:{
    flexDirection:'row',
},
bestselmainWrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:370,
    height:120,
    borderRadius:20,
    backgroundColor: color.background,
    marginTop:11,
    shadowColor: color.textDark,
    shadowOffset:{
        width:10,
        height:10,
    },
    
    shadowOpacity:0.6,
    shadowRadius:10,
    elevation:5,
},
bestSelTitle:{
    fontFamily:'Nunito-Bold',
    fontSize:16,
    marginTop:16,
    marginLeft:10
},
bestSelFeature:{
    fontFamily:'Nunito-Regular',
    fontSize:12,
    marginLeft:54,
    color:color.textLight
},
bestSelPrizeWrapper:{
    width:71,
    height:48,
    borderTopRightRadius:30,
    borderBottomLeftRadius:20,
    backgroundColor:color.primary,
    position:'absolute',
    bottom:-10,
    left:0
},
bestSelPrize:{
    marginVertical:13,
    marginLeft:17,
    marginRight:5,
    fontFamily:'Nunito-Bold',
    fontSize:16,
    color:color.background,
},
bestSelRating:{
    marginLeft:93,

},
OrderButton:{
    width:78,
    height:26,
    borderRadius:5,
    backgroundColor:color.secondary,
    alignItems:'center',
    paddingTop:4
},
orderbtnText:{
    fontFamily:'Nunito-SemiBoldItalic',
    fontSize:12,
    color:color.background,
}


});
