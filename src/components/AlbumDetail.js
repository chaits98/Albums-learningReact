import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection style={styles.cardSelection}>
                <View style={styles.thumbnailContainer}>
                    <Image 
                    source={{ uri: props.album.thumbnail_image }} 
                    style={styles.thumbnailImage}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.artistTextStyle}>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image source={{ uri: props.album.image }} style={styles.albumImage} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(props.album.url)}>
                    Buy Now!
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    cardSelection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 5
    },
    thumbnailImage: {
        height: 50,
        width: 50
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    artistTextStyle: {
        fontSize: 18
    },
    albumImage: {
        height: 300,
        flex: 1,
        width: null,
        padding: 10
    }
};

export default AlbumDetail;
