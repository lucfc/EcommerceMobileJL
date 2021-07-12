import React, { useContext } from 'react';
import { View, Text, Image, Linking, ScrollView } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';

import { ModeContext } from '../../contexts/ContextDarkLight';

export function Contatos() {

    const { modeBoolean } = useContext(ModeContext);

    return (
        <ScrollView style={{ marginBottom: 40, backgroundColor: !modeBoolean ? '#fff' : '#000' }}>
            <Header />
            <View style={[styles.containerDesenvolvedor, { borderColor: modeBoolean ? '#fff' : '#000' }]}>
                <View style={styles.containerImageLink}>
                    <Image style={styles.image} source={{ uri: 'https://avatars.githubusercontent.com/u/82122917?s=400&u=fd00969001ecdb8a53a9f420234f579230370b48&v=4' }} />
                    <View style={styles.containerText}>
                        <Text style={[styles.nome, { color: modeBoolean ? '#fff' : '#000' }]}>Danilo Silva de Oliveira</Text>
                        <Text style={[styles.link, { color: modeBoolean ? '#fff' : 'blue' }]} onPress={() => Linking.openURL('https://github.com/DaniloSilvaNoGit')}>https://github.com/DaniloSilvaNoGit</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.containerDesenvolvedor, { borderColor: modeBoolean ? '#fff' : '#000' }]}>
                <View style={styles.containerImageLink}>
                    <Image style={styles.image} source={{ uri: 'https://avatars.githubusercontent.com/u/82114311?v=4' }} />
                    <View style={styles.containerText}>
                        <Text style={[styles.nome, { color: modeBoolean ? '#fff' : '#000' }]}>Frederico Henrichs Sheremetieff</Text>
                        <Text style={[styles.link, { color: modeBoolean ? '#fff' : 'blue' }]} onPress={() => Linking.openURL('https://github.com/FredHSQ')}>https://github.com/FredHSQ</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.containerDesenvolvedor, { borderColor: modeBoolean ? '#fff' : '#000' }]}>
                <View style={styles.containerImageLink}>
                    <Image style={styles.image} source={{ uri: 'https://avatars.githubusercontent.com/u/82160424?v=4' }} />
                    <View style={styles.containerText}>
                        <Text style={[styles.nome, { color: modeBoolean ? '#fff' : '#000' }]}>João Paulo Granato Lopes</Text>
                        <Text style={[styles.link, { color: modeBoolean ? '#fff' : 'blue' }]} onPress={() => Linking.openURL('https://github.com/jpgranato')}>https://github.com/jpgranato</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.containerDesenvolvedor, { borderColor: modeBoolean ? '#fff' : '#000' }]}>
                <View style={styles.containerImageLink}>
                    <Image style={styles.image} source={{ uri: 'https://avatars.githubusercontent.com/u/82160909?v=4' }} />
                    <View style={styles.containerText}>
                        <Text style={[styles.nome, { color: modeBoolean ? '#fff' : '#000' }]}>José Vitor Rocha Sampaio</Text>
                        <Text style={[styles.link, { color: modeBoolean ? '#fff' : 'blue' }]} onPress={() => Linking.openURL('https://github.com/josevrs')}>https://github.com/josevrs</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.containerDesenvolvedor, { borderColor: modeBoolean ? '#fff' : '#000' }]}>
                <View style={styles.containerImageLink}>
                    <Image style={styles.image} source={{ uri: 'https://avatars.githubusercontent.com/u/40767022?v=4' }} />
                    <View style={styles.containerText}>
                        <Text style={[styles.nome, { color: modeBoolean ? '#fff' : '#000' }]}>Lili Cabral</Text>
                        <Text style={[styles.link, { color: modeBoolean ? '#fff' : 'blue' }]} onPress={() => Linking.openURL('https://github.com/lilica-pt')}>https://github.com/lilica-pt</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.containerDesenvolvedor, { borderColor: modeBoolean ? '#fff' : '#000' }]}>
                <View style={styles.containerImageLink}>
                    <Image style={styles.image} source={{ uri: 'https://avatars.githubusercontent.com/u/75989735?v=4' }} />
                    <View style={styles.containerText}>
                        <Text style={[styles.nome, { color: modeBoolean ? '#fff' : '#000' }]}>Lucas Fonseca de Carvalho</Text>
                        <Text style={[styles.link, { color: modeBoolean ? '#fff' : 'blue' }]} onPress={() => Linking.openURL('https://github.com/lucfc')}>https://github.com/lucfc</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.containerDesenvolvedor, { borderColor: modeBoolean ? '#fff' : '#000' }]}>
                <View style={styles.containerImageLink}>
                    <Image style={styles.image} source={{ uri: 'https://avatars.githubusercontent.com/u/82160707?v=4' }} />
                    <View style={styles.containerText}>   
                        <Text style={[styles.nome, { color: modeBoolean ? '#fff' : '#000' }]}>Rodrigo Torres Wayand</Text>
                        <Text style={[styles.link, { color: modeBoolean ? '#fff' : 'blue' }]} onPress={() => Linking.openURL('https://github.com/Thumbrecks')}>https://github.com/Thumbrecks</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}