import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router' 

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown: false}}/>
        <Stack.Screen name='(auth)' options={{headerShown: false}}/>
        <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
        <Stack.Screen name='criar-reserva' options={{headerShown: false}}/>
        <Stack.Screen name='promocao-page' options={{headerShown: false}}/>
        <Stack.Screen name='CriarReserva' options={{headerShown: false}}/>
        <Stack.Screen name='EditarUsuario' options={{headerShown: false}}/>
        <Stack.Screen name='VerAgendamento' options={{headerShown: false}}/>
        <Stack.Screen name='PaginaSalao' options={{headerShown: false}}/>
        <Stack.Screen name='CanselamentoHorario' options={{headerShown: false}}/>
        <Stack.Screen name='CriarFuncionario' options={{headerShown: false}}/>
        <Stack.Screen name='ListarFuncionarios' options={{headerShown: false}}/>
        <Stack.Screen name='AdicionarServico' options={{headerShown: false}}/>
        <Stack.Screen name='ListarServicos' options={{headerShown: false}}/>
        <Stack.Screen name='CriarPromocao' options={{headerShown: false}}/>
        <Stack.Screen name='VisualizarPromocoes' options={{headerShown: false}}/>
        <Stack.Screen name='ProgramarDisponibilidade' options={{headerShown: false}}/>

    </Stack>
  )
}

export default RootLayout