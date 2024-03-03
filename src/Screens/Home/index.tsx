import React, { useState } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { Enderecos } from '../../models/Enderecos'

const Home = () => {

    const [endereco, setEndereco] = useState(Array<Enderecos>);

    const getEndereco = async () => {
        const enderecoURL = 'https://viacep.com.br/ws/09852730/json/';

        await fetch(enderecoURL)
            .then((response) => response.json())
            .then(data => {
                setEndereco(data)
            })
            .catch((err) => console.log(err))
    }

    return (
        <SafeAreaView>
            <Text>Cep: {endereco.cep}</Text>
            <Text>Logradouro: {endereco.logradouro}</Text>
            <Text>Complemento: {endereco.complemento}</Text>
            <Text>Bairro: {endereco.bairro}</Text>
            <Text>endereco: {endereco.localidade}</Text>
            <Text>UF: {endereco.uf}</Text>
            <Text>IBGE: {endereco.ibge}</Text>
            <Button title="Buscar Bairro" onPress={() => getEndereco()}></Button>
        </SafeAreaView>
    );
};

export default Home;