import React, { useEffect, useState } from 'react';
import { TextInput, Text, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Modalize } from 'react-native-modalize';

import { styles } from './styles'
import ProdutoService from '../../../services/produtoService';

import iconExit from '../../../assets/icons/exit.png';
import iconConfirm from '../../../assets/icons/confirm.png';

export const UpdateProductModal = ({ modalizeRefUpdate, reload, setReload, produtoUpdate, modeBoolean }) => {

    const [nome, setNome] = useState(produtoUpdate.nome)
    const [descricao, setDescricao] = useState(produtoUpdate.descricao)
    const [idCategoria, setCategoria] = useState(produtoUpdate.idCategoria)
    const [idFuncionario, setFuncionario] = useState(produtoUpdate.idFuncionario)
    const [qtdEstoque, setQtdEstoque] = useState(produtoUpdate.qtdEstoque)
    const [valor, setValor] = useState(produtoUpdate.valor)
    const [colorBoolean, setColorBoolean] = useState(false)

    const [erro, setErro] = useState(false)

    const produtoService = new ProdutoService();

    useEffect(() => {
        setNome(produtoUpdate.nome)
        setDescricao(produtoUpdate.descricao)
        setCategoria(produtoUpdate.idCategoria)
        setFuncionario(produtoUpdate.idFuncionario)
        setQtdEstoque(produtoUpdate.qtdEstoque)
        setValor(produtoUpdate.valor)
    }, [produtoUpdate])

    useEffect(() => {
        if (nome !== produtoUpdate.nome ||
            descricao !== produtoUpdate.descricao ||
            idCategoria !== produtoUpdate.idCategoria ||
            idFuncionario !== produtoUpdate.idFuncionario ||
            qtdEstoque !== produtoUpdate.qtdEstoque ||
            valor !== produtoUpdate.valor) {
            setColorBoolean(true)
        } else {
            setColorBoolean(false)
        }
    }, [nome, descricao, idCategoria, idFuncionario, qtdEstoque, valor])

    const produto = {
        id: produtoUpdate.id,
        descricao: descricao,
        idCategoria: idCategoria,
        idFuncionario: idFuncionario,
        nome: nome,
        qtdEstoque: qtdEstoque,
        valor: valor
    }

    const handleCloseModal = () => {
        setErro(false)
        modalizeRefUpdate.current.close()
    }

    const updateProductsAndClose = () => {
        produtoService.putProdutos(produto).then(res => {
            setErro(false)
            handleCloseModal()
            setReload(!reload)
        }).catch(() => setErro(true))
    }

    return (
        <Modalize ref={modalizeRefUpdate}
            closeOnOverlayTap={true}
            modalHeight={800}
            handlePosition='inside'
            handleStyle={{ backgroundColor: 'transparent' }}
            modalStyle={{
                backgroundColor: !modeBoolean ? '#fff': 'black',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
            }}>
            <KeyboardAvoidingView behavior='padding'>
                <View style={styles.containerGeral}>
                    <TouchableOpacity style={styles.containerExit} onPress={() => handleCloseModal()}>
                        <Image style={[styles.exitImage,{tintColor: modeBoolean ? '#fff': 'black'}]} source={iconExit} />
                    </TouchableOpacity>
                    <View style={styles.containerName}>
                        <Text style={[styles.text,{color: modeBoolean ? '#fff': 'black'}]}>Nome</Text>
                        <TextInput style={[styles.inputName, {backgroundColor: modeBoolean ? '#fff': '#e9e9e9'}]} defaultValue={produtoUpdate.nome} onChangeText={(data) => setNome(data)}></TextInput>
                        { erro ? <Text style={styles.textError}>*Nome tem que ter entre 6 a 20 caracteres.</Text> : <></>}
                    </View>
                    <View style={styles.containerDescription}>
                        <Text style={[styles.text,{color: modeBoolean ? '#fff': 'black'}]}>Descri????o</Text>
                        <TextInput style={[styles.inputDescription, {backgroundColor: modeBoolean ? '#fff': '#e9e9e9'}]} defaultValue={produtoUpdate.descricao} onChangeText={(data) => setDescricao(data)}></TextInput>
                        { erro ? <Text style={styles.textError}>*Descri????o tem que ter entre 6 a 20 caracteres.</Text> : <></>}
                    </View>
                    <View style={styles.containerTwoItems}>
                        <View style={styles.containerItem}>
                            <Text style={[styles.text,{color: modeBoolean ? '#fff': 'black'}]}>Qtd. de estoque</Text>
                            <TextInput style={[styles.inputItems, {backgroundColor: modeBoolean ? '#fff': '#e9e9e9'}]} defaultValue={produtoUpdate.qtdEstoque.toString()} keyboardType={'numeric'} onChange={(data) => setQtdEstoque(data)}></TextInput>
                            { erro ? <Text style={{color: !modeBoolean ? '#fff': 'black'}}>*Erro</Text> : <></>}                   
                        </View>
                        <View style={styles.containerItem}>
                            <Text style={[styles.text,{color: modeBoolean ? '#fff': 'black'}]}>IdCategoria</Text>
                            <TextInput style={[styles.inputItems, {backgroundColor: modeBoolean ? '#fff': '#e9e9e9'}]} defaultValue={produtoUpdate.idCategoria.toString()} keyboardType={'numeric'} onChange={(data) => setCategoria(data)}></TextInput>
                            { erro ? <Text style={styles.textError}>*Verifique o id da categoria</Text> : <></>} 
                        </View>
                    </View>
                    <View style={styles.containerTwoItems}>
                        <View style={styles.containerItem}>
                            <Text style={[styles.text,{color: modeBoolean ? '#fff': 'black'}]}>Valor</Text>
                            <TextInput style={[styles.inputItems, {backgroundColor: modeBoolean ? '#fff': '#e9e9e9'}]} defaultValue={produtoUpdate.valor.toString()} keyboardType={'numeric'} onChangeText={(data) => setValor(data)}></TextInput>
                            { erro ? <Text style={{color: !modeBoolean ? '#fff': 'black'}}>*Erro</Text> : <></>}                   
                        </View>
                        <View style={styles.containerItem}>
                            <Text style={[styles.text,{color: modeBoolean ? '#fff': 'black'}]}>IdFuncion??rio</Text>
                            <TextInput style={[styles.inputItems, {backgroundColor: modeBoolean ? '#fff': '#e9e9e9'}]} defaultValue={produtoUpdate.idFuncionario.toString()} keyboardType={'numeric'} onChangeText={(value) => setFuncionario(value)}></TextInput>
                            { erro ? <Text style={styles.textError}>*N??o ?? poss??vel mudar o id do funcion??rio original</Text> : <></>} 
                        </View>
                    </View>
                    <TouchableOpacity disabled={!colorBoolean} onPress={() => updateProductsAndClose()} style={[styles.containerConfirm, { borderColor: colorBoolean ? '#4BBE23' : '#535353' }]}>
                        <Text style={[styles.text, { color: colorBoolean ? '#4BBE23' : '#636363' }]}>Salvar</Text>
                        <Image source={iconConfirm} style={{ width: 30, height: 30, tintColor: colorBoolean ? '#4BBE23' : '#636363' }} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Modalize>
    )
}