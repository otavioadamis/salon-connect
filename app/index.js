import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className='space-y-5 ml-3'>
          <Link href="/login" className='font-bold'>login</Link>
          <Link href="/cadastro" className='font-bold'>cadastro</Link>
          <Link href="/EditarUsuario" className='font-bold'>EditarUsuario</Link>
          <Link href="/criar-reserva" className='font-bold'>Cria reserva</Link>
          <Link href="/home" className='font-bold'>Homepage</Link>
          <Link href="/calendario" className='font-bold'>calendario</Link>
          <Link href="/promocao-page" className='font-bold'>Pagina de Promoção</Link>
          <Link href="/CriarReserva" className='font-bold'>CriarReserva2.0</Link>
          <Link href="/VerAgendamento" className='font-bold'>VerAgendamento</Link>
          <Link href="/PaginaSalao" className='font-bold'>PaginaSalão</Link>
          <Link href="/CanselamentoHorario" className='font-bold'>Canselamento Horario</Link>
          <Link href="/CriarFuncionario" className='font-bold'>Criação Funcionario</Link>
          <Link href="/ListarFuncionarios" className='font-bold'>listar funcionarios</Link>
          <Link href="/AdicionarServico" className='font-bold'>Adicionar Servico</Link>
          <Link href="/ListarServicos" className='font-bold'>Listar Servicos</Link>
          <Link href="/CriarPromocao" className='font-bold'>Criar Promoção</Link>
          <Link href="/VisualizarPromocoes" className='font-bold'>Visualizar Promocoes</Link>
          <Link href="/ProgramarDiponibilidade" className='font-bold'>Programar Disponibilidade</Link>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
