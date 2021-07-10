import React, { useEffect, useState } from 'react';
import { TextInput, Text, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Modalize } from 'react-native-modalize';

import { styles } from './styles'
import ProdutoService from './screens/CrudProdutos/produtoService';

import exit from './assets/icons/exit.png';
import confirm from './assets/icons/confirm.png';

export const Teste = ({ modalizeRef2, reload, setReload, produtoUpdate }) => {

    const [nome, setNome] = useState(produtoUpdate.nome)
    const [descricao, setDescricao] = useState(produtoUpdate.descricao)
    const [idCategoria, setCategoria] = useState(produtoUpdate.idCategoria)
    const [idFuncionario, setFuncionario] = useState(produtoUpdate.idFuncionario)
    const [qtdEstoque, setQtdEstoque] = useState(produtoUpdate.qtdEstoque)
    const [valor, setValor] = useState(produtoUpdate.valor)
    const [colorBoolean, setColorBoolean] = useState(false)

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
        setNome('')
        setDescricao('')
        setCategoria(0)
        setFuncionario(0)
        setQtdEstoque(0)
        setValor(0)
        setColorBoolean(true)
        modalizeRef2.current.close();
    }

    const updateProductsAndClose = () => {
        produtoService.putProdutos(produto).then(res => {
            console.log(produto)
            handleCloseModal()
            setReload(!reload)
        }).catch(e => { console.log(e) })
    }

    return (
            <KeyboardAvoidingView behavior='padding'>
                <View style={styles.containerGeral}>
                    <TouchableOpacity style={styles.containerExit} onPress={() => handleCloseModal()}>
                        <Image style={styles.exitImage} source={exit} />
                    </TouchableOpacity>
                    <View style={styles.containerName}>
                        <Text style={styles.text}>Nome</Text>
                        <TextInput style={styles.inputName} defaultValue={produtoUpdate.nome} onChangeText={(data) => setNome(data)}></TextInput>
                    </View>
                    <View style={styles.containerDescription}>
                        <Text style={styles.text}>Descrição</Text>
                        <TextInput style={styles.inputDescription} defaultValue={produtoUpdate.descricao} onChangeText={(data) => setDescricao(data)}></TextInput>
                    </View>
                    <View style={styles.containerTwoItems}>
                        <View style={styles.containerItem}>
                            <Text style={styles.text}>Qtd. de estoque</Text>
                            <TextInput style={styles.inputItems} defaultValue={produtoUpdate.qtdEstoque.toString()} keyboardType={'numeric'} onChange={(data) => setQtdEstoque(data)}></TextInput>
                        </View>
                        <View style={styles.containerItem}>
                            <Text style={styles.text}>IdCategoria</Text>
                            <TextInput style={styles.inputItems} defaultValue={produtoUpdate.idCategoria.toString()} keyboardType={'numeric'} onChange={(data) => setCategoria(data)}></TextInput>
                        </View>
                    </View>
                    <View style={styles.containerTwoItems}>
                        <View style={styles.containerItem}>
                            <Text style={styles.text}>Valor</Text>
                            <TextInput style={styles.inputItems} defaultValue={produtoUpdate.valor.toString()} keyboardType={'numeric'} onChangeText={(data) => setValor(data)}></TextInput>
                        </View>
                        <View style={styles.containerItem}>
                            <Text style={styles.text}>IdFuncionário</Text>
                            <TextInput style={styles.inputItems} defaultValue={produtoUpdate.idFuncionario.toString()} keyboardType={'numeric'} onChangeText={(value) => setFuncionario(value)}></TextInput>
                        </View>
                    </View>
                    <TouchableOpacity disabled={!colorBoolean} onPress={() => updateProductsAndClose()} style={[styles.containerConfirm, { borderColor: colorBoolean ? '#4BBE23' : '#535353' }]}>
                        <Text style={[styles.text, { color: colorBoolean ? '#4BBE23' : '#636363' }]}>Salvar</Text>
                        <Image source={confirm} style={{ width: 30, height: 30, tintColor: colorBoolean ? '#4BBE23' : '#636363' }} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
    )
}