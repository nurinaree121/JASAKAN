import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TextInput, Pressable, TouchableOpacity, FlatList } from 'react-native';
import { Message, SearchNormal, Home, Category, Shop, Notification, Global, Box } from 'iconsax-react-native'; 
import { fontType, colors } from './src/theme';

const categories = [
  { id: '1', title: 'Jasa Elektronik' },
  { id: '2', title: 'Jasa Pertukangan' },
  { id: '3', title: 'Jasa Rumah Tangga' },
];

const ListBlog = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.listBlog}>
      {blogData.map((blog, index) => (
        <View key={index} style={itemHorizontal.cardItem}>
          <ImageBackground
            style={itemHorizontal.cardImage}
            resizeMode="cover"
            imageStyle={{ borderRadius: 15 }}
            source={{ uri: blog.image }}>
            <View style={itemHorizontal.cardContent}>
              <View style={itemHorizontal.cardInfo}>
                <Text style={itemHorizontal.cardTitle}>{blog.title}</Text>
                <Text style={itemHorizontal.cardText}>{blog.date}</Text>
              </View>
              <View style={itemHorizontal.cardIcon}>
                {/* Removed Receipt21 */}
              </View>
            </View>
          </ImageBackground>
        </View>
      ))}
    </ScrollView>
  );
};

const blogData = [
  {
    title: 'Aksi Bersih Pantai di Tanjung Bayang',
    date: 'Nov 10, 2023',
    image: 'https://i.pinimg.com/474x/62/1e/7f/621e7f063c8f919a6b6b38bae402ac14.jpg',
  },
  {
    title: 'Kegiatan Tanam Pohon Bersama Komunitas',
    date: 'Nov 10, 2023',
    image: 'https://i.pinimg.com/474x/75/76/14/757614a938d3462d1d495b48c3ba6525.jpg',
  },
  {
    title: 'Edukasi Pengolahan Sampah Rumah Tangga',
    date: 'Nov 10, 2023',
    image: 'https://i.pinimg.com/474x/21/04/6e/21046eb75c410bdae1c13c772b83a910.jpg',
  },
];

const data = [
  {
    id: '1',
    category: 'Kantong Plastik',
    title: 'Kantong Plastik 1kg',
    harga: 'Rp.100K-Rp.200K',
    review: 89,
    image: 'https://i.pinimg.com/474x/c0/b6/bf/c0b6bf279322ee25c716157578d7a6c1.jpg',
  },
  {
    id: '2',
    category: 'Kantong Plastik',
    title: 'Kantong Plastik 1kg',
    harga: 'Rp.100K-Rp.200K',
    review: 89,
    image: 'https://i.pinimg.com/474x/c0/b6/bf/c0b6bf279322ee25c716157578d7a6c1.jpg',
  },
  {
    id: '3',
    category: 'Kantong Plastik',
    title: 'Kantong Plastik 1kg',
    harga: 'Rp.100K-Rp.200K',
    review: 89,
    image: 'https://i.pinimg.com/474x/c0/b6/bf/c0b6bf279322ee25c716157578d7a6c1.jpg',
  },
  {
    id: '4',
    category: 'Kantong Plastik',
    title: 'Kantong Plastik 1kg',
    harga: 'Rp.100K-Rp.200K',
    review: 89,
    image: 'https://i.pinimg.com/474x/c0/b6/bf/c0b6bf279322ee25c716157578d7a6c1.jpg',
  },
  {
    id: '5',
    category: 'Kantong Plastik',
    title: 'Kantong Plastik 1kg',
    harga: 'Rp.100K-Rp.200K',
    review: 89,
    image: 'https://i.pinimg.com/474x/c0/b6/bf/c0b6bf279322ee25c716157578d7a6c1.jpg',
  },

];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={{ flexDirection: "row", alignItems: "center" , justifyContent: 'center'}}>
      <Text style={[styles.title, {justifyContent: 'center'}]}>JasaKan</Text>
      </View>
      </View>
      <View style={searchBar.container}>
        <TextInput style={searchBar.input} placeholder="Search" />
        <Pressable style={searchBar.button}>
          <SearchNormal size={20} color={colors.white()} />
        </Pressable>
      </View>
      <ListBlog />
      <View style={styles.listCategory}>
      <Text style={[styles.titleKategori, ]}>Kategori</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <View key={category.id} style={categoryStyles.item}>
              <Text style={categoryStyles.title}>{category.title}</Text>
            </View>
          ))}
          <TouchableOpacity style={categoryStyles.seeAll}>
            <Text style={categoryStyles.seeAllText}>Lihat Semua Jasa</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardItem}>
            <Image style={styles.cardImage} source={{ uri: item.image }} />
            <View style={styles.cardContent}>
              <View style={styles.header}>
                <View style={styles.textContainer}>
                  <Text style={styles.cardCategory}>{item.category}</Text>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                </View>
                {/* Removed Receipt21 */}
                </View>
                <View style={styles.cardInfo}>
                  <View style={styles.hargaContainer}>
                    <Box size={10} color={colors.white()} />
                    <Text style={styles.cardText}> {item.harga}</Text> {/* Teks Stok */}
                  </View>
                  <View style={styles.reviewContainer}>
                    <Message size={10} color={colors.white()} />
                    <Text style={styles.cardText}>Review {item.review}</Text> {/* Teks Review */}
                  </View>
                </View>
              </View>
            </View>
        )}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen(),
    justifyContent: 'space-between',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    lineHeight: 18,
  },
  titleKategori: {
    fontSize: 18,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    lineHeight: 22,
    marginLeft: 10,
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: colors.black(),
    padding: 8,
    borderRadius: 8,
  },

  cardItem: {
    flexDirection: 'row',
    backgroundColor: colors.darkGreen(),
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  textContainer: {
    width: '70%',
  },
  cardCategory: {
    fontSize: 12,
    color: colors.white(),
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white(),

  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  hargaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  cardText: {
    fontSize: 12,
    color: colors.white(),
    marginRight: 50,
  },
});

const categoryStyles = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.darkGreen(),
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'center', // Center the content
    flex: 1, // Allow items to take equal space
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.white(),
  },
  seeAll: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeAllText: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    color: colors.black(),
  },
});

const searchBar = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    backgroundColor: colors.darkGreen(),
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
  },
  button: {
    backgroundColor: colors.darkGreen(),
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 250,
    marginHorizontal: 10,
    marginBottom: 100,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 20,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 1,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
