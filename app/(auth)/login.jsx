import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await axios.get('http://10.0.2.2:3001/Usuario', { 
                params: { email, senha }
            });
            
            const usuario = response.data.find(user => user.email === email && user.senha === senha);
            
            if (usuario) {
                Alert.alert('Login bem-sucedido', `Bem-vindo, ${usuario.nome}`);
                
                if (usuario.tipo === 'Cliente') {
                    router.push('/home');
                } else if (usuario.tipo === 'Funcionario') {
                    router.push('/PaginaSalao');
                } else if (usuario.tipo === 'Admin') {
                    router.push('/PaginaSalao');
                }
            } else {
                Alert.alert('Erro de login', 'Email ou senha incorretos');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            Alert.alert('Erro', 'Não foi possível conectar ao servidor');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.loginBox}>
                    <Text style={styles.title}>Login</Text>
                    
                    <Image 
                        source={require('../../assets/logo.png')} 
                        style={styles.logo}
                        resizeMode="contain"
                    />

                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Digite seu email"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Text style={styles.label}>Senha</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Digite sua senha" 
                        secureTextEntry
                        value={senha}
                        onChangeText={setSenha}
                    />

                    <TouchableOpacity style={styles.forgotPassword}>
                        <Text style={styles.forgotText}>Esqueci Senha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff', 
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBox: {
        backgroundColor: '#fff',
        width: '85%',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 16,
        marginBottom: 5,
        marginLeft: 10,
        color: '#000',
    },
    input: {
        width: '100%',
        height: 40,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingLeft: 15,
        marginBottom: 20,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 20,
    },
    forgotText: {
        color: '#777',
    },
    loginButton: {
        backgroundColor: '#0099e6',
        width: '100%',
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Login;
