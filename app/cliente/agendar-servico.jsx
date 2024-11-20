import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { parse, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ServicoService } from '../../services/api/ServicoService';
import { ReservaService } from '../../services/api/ReservaService';


const AgendarServico = () => {
  const servicoService = new ServicoService();
  const reservaService = new ReservaService();

  const searchParams = useLocalSearchParams();
  const { funcionarioId, funcionarioNome, dataSelecionada } = searchParams;

  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);

  const [servicos, setServicos] = useState([]);
  const [selectedServico, setSelectedServico] = useState(null);
  const [profissional, setProfissional] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicos = await servicoService.getServicosByFuncionarioId("47d6be8d-c9e3-4bf4-b24a-83f6ee35e18e");
        setServicos(servicos.data);

        const reservasOcupadas = await reservaService.getHorariosReservadosFromFuncionarioInDay("47d6be8d-c9e3-4bf4-b24a-83f6ee35e18e", "2022-02-16")
        console.log(reservasOcupadas.data);

        const horariosDisponiveis = gerarHorariosDisponiveis(reservasOcupadas.data);
        console.log(horariosDisponiveis)
        
        setHorariosDisponiveis(horariosDisponiveis);

      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [funcionarioId, dataSelecionada]);

  const gerarHorariosDisponiveis = (ocupados) => {
    const horarios = [];
    for (let hora = 8; hora < 18; hora++) {
      if (hora === 12) continue;
      horarios.push(`${hora}:00`);
      horarios.push(`${hora}:22`);
    }
    const ocupadosFormatados = ocupados.map(item => {
      const horario = item.diaHorario;
      const date = parse(horario, "dd/MM/yyyy hh:mm:ss a", new Date());
      return format(date, "HH:mm");
    });
    return horarios.filter(horario => !ocupadosFormatados.includes(horario));
  };



  const confirmarAgendamento = (horario) => {
    if (selectedServico) {
      alert(`Serviço agendado: ${selectedServico.nomeServico} com ${funcionarioNome} no dia ${dataSelecionada} às ${horario}`);
      router.back();
    } else {
      alert('Selecione um serviço antes de confirmar o agendamento.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Agendar com {funcionarioNome}</Text>
      <Text style={styles.subtitle}>Data: {dataSelecionada}</Text>

      <Text style={styles.subtitle}>Selecione um Serviço:</Text>
      <FlatList
        data={servicos}
        keyExtractor={(item) => item.servicoId.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.servicoItem} onPress={() => setSelectedServico(item)}>
            <Text style={selectedServico?.servicoId === item.servicoId ? styles.servicoSelected : styles.servicoName}>
              {item.nomeServico} - R${item.precoServico}
            </Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.subtitle}>Horários Disponíveis:</Text>
      <FlatList
        data={horariosDisponiveis}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.horarioItem}>
            <Text>{item}</Text>
            <Button title="Agendar" onPress={() => confirmarAgendamento(item)} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  servicoItem: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
  },
  servicoName: {
    fontSize: 16,
  },
  servicoSelected: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  horarioItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
});

export default AgendarServico;
