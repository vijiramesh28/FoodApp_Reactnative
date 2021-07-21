import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList, Image, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/color/colors';
import CategoriesData from '../assets/data/categoriesData';
import ProductData from '../assets/data/productData';
export default Categories = ({route, navigation}) =>{
    const { item } = route.params; 

    const CategoryItem = ({item}) =>{
        return(
            <TouchableOpacity>
                {item.veg ==true ?  
                <View style={styles.vegListOption}>
                        <Text style={styles.vegList}>{item.title}</Text>
                    </View>: <View></View>}
            </TouchableOpacity>
        )
    };

    const NonvegCategoryItem= ({item}) =>{
        return(
            <TouchableOpacity>
                {item.veg ==false ?  
                <View style={styles.vegListOption}>
                        <Text style={styles.vegList}>{item.title}</Text>
                    </View>: <View></View>}
            </TouchableOpacity>
        )
    };
    return(
        <ScrollView>
          
           <View style={styles.headercontainermain}>
               {/* Header */}
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

                {/* Veg  */}
                <View style={styles.vegWrapper}>
                    <Text style={styles.vegTitle}>Veg</Text>
                </View>

                <View>
                <FlatList
                    data={CategoriesData}
                    renderItem={CategoryItem}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
      />
                </View>

                {/* category list */}
                <View style={styles.categoryView}>
                {
                    ProductData.map((product, id)=>{
                        return(
                        
                            <View style={styles.categoryWrapper} key={id}>
                                <Image source={product.mainimg} style={styles.categoryImage} />
                                <Text style={styles.productTitle}>{product.title}</Text>
                                <Text style={styles.productTitle}>${product.price}</Text>
                            </View>
                     
                        )  
                        
                        })
                       
                }
            </View>


                {/* Non Veg  */}
                <View style={styles.vegWrapper}>
                    <Text style={styles.vegTitle}>Non Veg</Text>
                </View>

                <View>
                <FlatList
                    data={CategoriesData}
                    renderItem={NonvegCategoryItem}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
      />
                </View>
                <View style={styles.categoryView}>
                {
                    ProductData.map((product, id)=>{
                        return(
                        
                            <View style={styles.categoryWrapper} key={id}>
                                <Image source={product.mainimg} style={styles.categoryImage} />
                                <Text style={styles.productTitle}>{product.title}</Text>
                                <Text style={styles.productTitle}>${product.price}</Text>
                            </View>
                     
                        )  
                        
                        })
                       
                }
                </View>

        </View>
        </ScrollView>
         
      
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
    vegWrapper:{
        marginTop:26,
        paddingLeft:20
    },
vegTitle:{
    fontFamily: 'Nunito-Bold',
    fontSize:20,
    color:colors.textDark
},
vegListOption:{
    padding:4,
    borderRadius:5,
    backgroundColor:colors.primary,
    marginRight:13,
    alignContent:'center',
    marginTop:15,
    marginLeft:20,
    shadowColor:colors.primary,
    shadowOffset:{
        width:20,
        height:20,
    },
    shadowOpacity:0.7,
    shadowRadius:10,
    elevation:10
    
    
},
vegList:{
    fontFamily:'Nunito-SemiBold',
    fontSize:14,
    color:colors.background,
    alignSelf:'center'
},
categoryImage:{
    width:86,
    height:64
},
categoryView:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    paddingLeft:20,
    marginTop:20
},
categoryWrapper:{
    backgroundColor:colors.secondary,
    marginRight:20,
    paddingTop:5,
    paddingHorizontal:6,
    marginBottom:20,
    borderRadius:5,
    paddingBottom:10
},
productTitle:{
    fontFamily:'Nunito-Bold',
    fontSize:11,
    color:colors.background
},

});
