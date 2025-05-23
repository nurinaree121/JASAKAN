import React from 'react';
import { FlatList, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../theme';
import { Box, Message } from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

const JasaList = ({ dataJasa }) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={dataJasa}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity  style={styles.cardItem} onPress={() => navigation.navigate('DetailPromo', {blogId: item.id})}>
          <Image style={styles.cardImage} source={{ uri: item.image }} />
          <View style={styles.cardContent}>
            <View style={styles.header}>
              <View style={styles.textContainer}>
                <Text style={styles.cardCategory}>{item.category}</Text>
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>
            </View>
            <View style={styles.cardInfo}>
              <View style={styles.stockContainer}>
                <Box size={10} color={colors.white()} />
                <Text style={styles.cardText}>{item.harga}</Text>
              </View>
              <View style={styles.reviewContainer}>
                <Message size={10} color={colors.white()} />
                <Text style={styles.cardText}>Review = {item.review}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  cardItem: {
    flexDirection: 'row',
    backgroundColor: colors.deepOrangeYellow(),
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    width: '70%',
  },
  cardCategory: {
    fontSize: 12,
    color: colors.black(),
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
  stockContainer: {
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
  },
  flatListContainer: {
    paddingBottom: 20,
  },
});

export default JasaList;