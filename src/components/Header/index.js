import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { ModeContext } from '../../contexts/ContextDarkLight';
import {useNavigation} from '@react-navigation/native';

import IconBack from '../../assets/icons/backArrow.png';
import IconLogo from '../../assets/icons/logo.png';
import IconDark from '../../assets/icons/darkMode.png';
import IconLight from '../../assets/icons/lightMode.png';

export const Header = () => {

    const navigation = useNavigation();
    const { modeBoolean, setModeBoolean } = useContext(ModeContext);

    return (
        <View
            style={[
                styles.containerHeader,
                { borderColor: modeBoolean ? '#fff' : 'black' },
            ]}>
            <View style={styles.containerHeaderBack}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('BemVindo')}>
                    <Image
                        source={IconBack}
                        style={[
                            styles.back,
                            { tintColor: modeBoolean ? '#fff' : 'black' },
                        ]}
                    />
                    <Text
                        style={[
                            styles.headerText,
                            { color: modeBoolean ? '#fff' : 'black' },
                        ]}>
                        Voltar
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerHeaderImageLogo}>
                <TouchableOpacity>
                    <Image
                        source={IconLogo}
                        style={[
                            styles.logo,
                            { tintColor: modeBoolean ? '#fff' : 'black' },
                        ]}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.containerHeaderImageMode}>
                <TouchableOpacity onPress={() => setModeBoolean()}>
                    <Image
                        source={modeBoolean ? IconLight : IconDark}
                        style={styles.switchModeDarkLight}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}