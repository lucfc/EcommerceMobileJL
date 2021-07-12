import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Modalize } from 'react-native-modalize';

import { styles } from './styles'
import ProdutoService from '../../../services/produtoService';

export const DeleteProductModal = ({ modalizeRefDelete, produtoDelete, reload, setReload, modeBoolean }) => {

    const handleCloseModal = () => {
        setErro(false)
        modalizeRefDelete.current.close();
    };

    const [nome, setNome] = useState(produtoDelete.nome)

    const [erro, setErro] = useState(false)

    const produtoService = new ProdutoService();

    useEffect(() => {
        setNome(produtoDelete.nome)
    }, [produtoDelete])

    const deleteAndClose = () => {
        produtoService.deleteProdutos(produtoDelete.id).then(res => {
            setErro(false)
            setReload(!reload)
            modalizeRefDelete.current.close()
        }
        ).catch(()=> setErro(true));
    };

    return (
        <>
            <Modalize
                ref={modalizeRefDelete}
                closeOnOverlayTap={true}
                modalHeight={400}
                handlePosition='inside'
                handleStyle={{ backgroundColor: 'transparent' }}
                modalStyle={{
                    backgroundColor: modeBoolean ? '#000' : '#fff',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    padding: 30,
                }}>
                <View style={{ alignItems: 'center' }}>
                    <View>
                        <Text
                            style={[styles.text, { color: modeBoolean ? '#fff' : '#000' }]}>Tem certeza que deseja deletar "{nome}" ?
                        </Text>
                    </View>
                    <View style={styles.containerButtons}>
                        <TouchableOpacity style={ styles.buttonSim } onPress={() => { deleteAndClose()}} >
                            <Text style={ styles.textButtonSim }>Sim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.buttonNao} onPress={() => handleCloseModal()} >
                            <Text style={ styles.textButtonNao }>Não</Text>
                        </TouchableOpacity>
                    </View>
                    { erro ? <Text style={styles.textError}>*Não é possivel deletar um produto original do site.</Text> : <></>}
                </View>
            </Modalize>
        </>
    );
};