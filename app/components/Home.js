/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image as Icon,
    ScrollView,
    Dimensions,
    TextInput,
    



} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#00CED1',
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    name: {
        fontSize: 22,
        color: '#fff',
        fontWeight: '600',
    },
    userInfo: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    body: {
        backgroundColor: '#fff',
        height: 500,
        alignItems: 'center',
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    menuBox: {
        backgroundColor: '#00CED1',
        width: Dimensions.get('window').width / 2.5,
        height: Dimensions.get('window').width / 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        elevation: 10,
        borderRadius: 10,
    },
    icon: {
        width: 60,
        height: 60,
    },
    info: {
        fontSize: 22,
        color: '#fff',
        fontWeight: '600',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.name}>Hi, User</Text>
                    <Text style={styles.userInfo}>Welcome to your dashboard</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <View style={styles.menuBox}>
                        <TouchableOpacity style={styles.button} onPress={() => alert('Coming Soon')}>
                            <Icon
                                name='user'
                                type='font-awesome'
                                color='#fff'
                                size={50}
                            />
                            <Text style={styles.info}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity style={styles.button} onPress={() => alert('Coming Soon')}>
                            <Icon
                                name='users'
                                type='font-awesome'
                                color='#fff'
                                size={50}
                            />
                            <Text style={styles.info}>Users</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity style={styles.button} onPress={() => alert('Coming Soon')}>
                            <Icon
                                name='file-text'
                                type='font-awesome'
                                color='#fff'
                                size={50}
                            />
                            <Text style={styles.info}>Reports</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity style={styles.button} onPress={() => alert('Coming Soon')}>
                            <Icon
                                name='config'
                                type='font-awesome'
                                color='#fff'
                                size={50}
                            />
                            <Text style={styles.info}>Settings</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default HomeScreen;

