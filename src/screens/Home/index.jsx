import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { SearchNormal,  Global } from 'iconsax-react-native';
import { CategoryList, ListBlog,JasaList } from '../../components';
import { blogData, dataJasa, categories } from '../../data';
import { fontType, colors } from '../../theme';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter blog data based on search query
  const filteredBlogData = blogData.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
);

  // Filter product data based on search query
  const filteredDataJasa = dataJasa.filter(jasa =>
    jasa.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.title, { marginLeft: 5 }]}>JasaKan.com</Text>
        </View>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Cari"
          value={searchQuery} // Bind the input value to the state
          onChangeText={setSearchQuery} // Update state on input change
        />
        <Pressable style={styles.button}>
          <SearchNormal size={20} color={colors.white()} />
        </Pressable>
      </View>
      <ListBlog blogData={filteredBlogData} /> {/* Use filtered blog data */}
      <CategoryList categories={categories} />
      <JasaList dataJasa={filteredDataJasa} /> {/* Use filtered product data */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    justifyContent : 'center'
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily:'Pjs-ExtraBold',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Pjs-ExtraBold', // Adjust according to your fontType
    color: colors.black(),
    textAlign : 'center'
  },
  searchBar: {
    marginHorizontal: 24,
    backgroundColor: colors.warmYellow(),
    borderColor: colors.grey(0.2),
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    height: 40,
    padding: 10,
    width: '90%',
    color : colors.black(),
  },
  button: {
    backgroundColor: colors.deepOrangeYellow(),
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});