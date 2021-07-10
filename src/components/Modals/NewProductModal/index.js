import React, { useEffect, useState } from 'react';
import { TextInput, Text, View, Image, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

import { styles } from './styles'
import ProdutoService from '../../../screens/CrudProdutos/produtoService';

import exit from '../../../assets/icons/exit.png';
import confirm from '../../../assets/icons/confirm.png';

export const NewProductModal = ({ modalizeRef1, reload, setReload }) => {

    const [nome, setName] = useState('')
    const [descricao, setDescricao] = useState('')
    const [idCategoria, setCategoria] = useState(0)
    const [idFuncionario, setFuncionario] = useState(0)
    const [qtdEstoque, setQtdEstoque] = useState(0)
    const [valor, setValor] = useState(0)
    const [colorBoolean, setColorBoolean] = useState(true)

    const produtoService = new ProdutoService();

    useEffect(() => {
        if (nome !== '' && descricao !== '' && idCategoria !== 0 && idFuncionario !== 0 && qtdEstoque !== 0 && valor !== 0) {
            setColorBoolean(false)
        } else {
            setColorBoolean(true)
        }
    }, [nome, descricao, idCategoria, idFuncionario, qtdEstoque, valor])

    const produto = {
        descricao: descricao,
        idCategoria: idCategoria,
        idFuncionario: idFuncionario,
        nome: nome,
        qtdEstoque: qtdEstoque,
        valor: valor
    }

    const handleCloseModal = () => {
        setName('')
        setDescricao('')
        setCategoria(0)
        setFuncionario(0)
        setQtdEstoque(0)
        setValor(0)
        setColorBoolean(true)
        modalizeRef1.current.close();
    }

    const saveProductsAndClose = () => {
        produtoService.postProdutos(produto).then(res => {
            handleCloseModal()
            setReload(!reload)
        }).catch(e => { console.log(e) })
    }

    return (
        <Modalize ref={modalizeRef1}
            closeOnOverlayTap={true}
            modalHeight={800}
            handlePosition='inside'
            handleStyle={{ backgroundColor: 'transparent' }}
            modalStyle={{
                backgroundColor: '#fff',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,

            }}>
            <View style={styles.containerGeral}>
                <TouchableOpacity style={styles.containerExit} onPress={() => handleCloseModal()}>
                    <Image style={styles.exitImage} source={exit} />
                </TouchableOpacity>
                <View style={styles.containerName}>
                    <Text style={styles.text}>Nome</Text>
                    <TextInput style={styles.inputName} onChangeText={(value) => setName(value)}></TextInput>
                </View>
                <View style={styles.containerDescription}>
                    <Text style={styles.text}>Descrição</Text>
                    <TextInput style={styles.inputDescription} onChangeText={(value) => setDescricao(value)}></TextInput>
                </View>
                <View style={styles.containerTwoItems}>
                    <View style={styles.containerItem}>
                        <Text style={styles.text}>Qtd. de estoque</Text>
                        <TextInput style={styles.inputItems} keyboardType={'numeric'} onChangeText={(value) => setQtdEstoque(value)}></TextInput>
                    </View>
                    <View style={styles.containerItem}>
                        <Text style={styles.text}>IdCategoria</Text>
                        <TextInput style={styles.inputItems} keyboardType={'numeric'} onChangeText={(value) => setCategoria(value)}></TextInput>
                    </View>
                </View>
                <View style={styles.containerTwoItems}>
                    <View style={styles.containerItem}>
                        <Text style={styles.text}>Valor</Text>
                        <TextInput style={styles.inputItems} keyboardType={'numeric'} onChangeText={(value) => setValor(value)}></TextInput>
                    </View>
                    <View style={styles.containerItem}>
                        <Text style={styles.text}>IdFuncionário</Text>
                        <TextInput style={styles.inputItems} keyboardType={'numeric'} onChangeText={(value) => setFuncionario(value)}></TextInput>
                    </View>
                </View>
                <TouchableOpacity disabled={colorBoolean} onPress={() => saveProductsAndClose()} style={[styles.containerConfirm, {borderColor: !colorBoolean ? '#4BBE23' : '#535353'}]}>
                    <Text style={[styles.text,{color: !colorBoolean ? '#4BBE23' : '#636363'}]}>Salvar</Text>
                    <Image source={confirm} style={{width: 30,height:30, tintColor: !colorBoolean ? '#4BBE23' : '#636363' }} />
                </TouchableOpacity>
            </View>
        </Modalize>
    )
}

