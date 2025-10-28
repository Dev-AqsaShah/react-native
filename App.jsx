import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'react-native/types_generated/index'
import { Button } from 'react-native/types_generated/index'

const App = () => {
  return (
    <View  style={{}}>
      <Text>App</Text>
      <Image 
        style={{width:200, height:300}}
        source={{ url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fgirl-coder&psig=AOvVaw0uEe0kMjDge2HmlfIrEnBV&ust=1761410169241000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjBx62ivZADFQAAAAAdAAAAABAE"}} />
      
      <Button title="Press Me"></Button>

      {/* 2nd option for button  */}

      <Pressable style={{padding:10, backgroundColor:"yellow"}} >
        <Text>Press Me</Text>
      </Pressable>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})