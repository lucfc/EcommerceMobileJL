import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";

export const ModalTeste = ({ modalizeRef }) => {

    const handleCloseModal = () => {
        modalizeRef.current.close();
    };

    return (
        <>
            <Modalize
                ref={modalizeRef}
                closeOnOverlayTap={true}
                modalHeight={450}
                handleStyle={{ backgroundColor: "#7159c1" }}
                handlePosition={"inside"}
                modalStyle={{
                    backgroundColor: "#F0F2F5",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    padding: 30,
                }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 24,
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: "Poppins-Bold",
                            color: "#363F5F",
                        }}>
                        Cadastrar transação
                    </Text>
                    <TouchableOpacity onPress={() => handleCloseModal()}>
                        <Text>Fechar modal </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 8 }}>
                    <InputNewTransaction
                        placeholder={"Título"}
                        value={title}
                        onChange={e => setTitle(e.nativeEvent.text)}
                    />
                </View>
                <View style={{ marginBottom: 8 }}>
                    <InputNewTransaction
                        placeholder={"Valor"}
                        keyboardType={"numeric"}
                        value={amount.toString()}
                        onChange={e => setAmount(e.nativeEvent.text)}
                    />
                </View>
                <View
                    style={{
                        marginBottom: 8,
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                    <TouchableOpacity
                        style={{
                            borderWidth: 2,
                            width: 160,
                            height: 56,
                            borderColor: `${type === "deposit" ? "#33CC95" : "#969CB3"}`,
                            borderRadius: 5,
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                        }}
                        onPress={() => {
                            setType("deposit");
                        }}>
                        <EntradasIcon width={30} height={30} />
                        <Text
                            style={{
                                fontSize: 16,
                                fontFamily: "Poppins-Regular",
                                color: "#363F5F",
                            }}>
                            Entrada
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            borderWidth: 2,
                            width: 160,
                            height: 56,
                            borderColor: `${type === "withdraw" ? "#E62E4D" : "#969CB3"}`,
                            borderRadius: 5,
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                        }}
                        onPress={() => {
                            setType("withdraw");
                        }}>
                        <SaidasIcon width={30} height={30} />
                        <Text
                            style={{
                                fontSize: 16,
                                fontFamily: "Poppins-Regular",
                                color: "#363F5F",
                            }}>
                            Saída
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 24 }}>
                    <InputNewTransaction
                        placeholder={"Categoria"}
                        value={category}
                        onChange={e => setCategory(e.nativeEvent.text)}
                    />
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#33CC95",
                        height: 56,
                        borderRadius: 5,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Text
                        onPress={() => newTransaction()}
                        style={{
                            color: "#FFFF",
                            fontSize: 16,
                            fontFamily: "Poppins-Regular",
                        }}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </Modalize>
        </>
    )
}