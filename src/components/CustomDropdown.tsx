/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';


const CustomDropdown = ({list,updateProfile}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState(list);
  const [selected,setSelected] = useState('Select Health Issue');
  const [choosed,setChoosed] = useState(false);


  const handleSelection=(item:String)=>{
    setSelected(item)
    updateProfile(item,'issue')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropDownSelector} onPress={() => { setIsClicked(!isClicked) }}>
        <Text>{selected}</Text>
      </TouchableOpacity>
      {isClicked ? (
        <View style={styles.dropDownArea}>
          <TextInput style={styles.searchInput} placeholder='Search'/>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.issueItem} onPress={handleSelection(item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%'
  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 100,
    alignSelf: 'center'
  },
  dropDownSelector: {
    width: '80%',
    height: 50,
    borderBottomWidth:1,
    borderColor: 'black',
    alignSelf: 'center',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  dropDownArea: {
    width: '90%',
    height: 300,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: '#fff',
    elevation: 5,
    alignSelf: 'center'
  },
  searchInput: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom:10,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop: 20,
    padding: 15
  },
  issueItem: {
    width: '90%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#8e8e8e',
    alignSelf: 'center',
    justifyContent: 'center',
  }
});

export default CustomDropdown;
