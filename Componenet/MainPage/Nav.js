import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
export default Nav = ({userInfo,mapEvent}) => (
    <View
            style={{
              flexDirection: "row",
            }}>
            
              <Text style={{flex:0.75,justifyContent:'flex-start',flexDirection:'row'}}> 현재 위치 </Text>
               <TouchableOpacity
               style={{flex:0.22, justifyContent:"flex-end", flexDirection:'row'}}
                activeOpacity={0.5}
                onPress={userInfo}
                >
                <Image
                  style={{ width: 30, height: 30 }}
                  source={{
                    uri:
                      "https://cdn.icon-icons.com/icons2/1776/PNG/512/user1_114209.png"
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={mapEvent} style={{flex:0.13,justifyContent:"space-around",flexDirection:'row'}}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={{
                    uri:
                      "https://cdn.icon-icons.com/icons2/67/PNG/512/map_marker_13571.png"
                  }}
                />
              </TouchableOpacity>
              </View>
)