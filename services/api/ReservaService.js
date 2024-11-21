import axiosInstance from "../AxiosInstance";

export class ReservaService {
    constructor(http = axiosInstance) {
        this.http = http
    }

    async getHorariosReservadosFromFuncionarioInDay(funcionarioId, dia){
        try {
            const response = await this.http.get(`reserva/${funcionarioId}/${dia}`)
            return response;
        } catch (error) {
            if (error.response && error.response.status !== 200) {
                throw new Error('Erro ao buscar reservas. Verifique os dados enviados');
            } else {
                throw new Error('Erro no servidor: Tente novamente mais tarde');
            }
        }
    }

    async postNewReserva(CreateReservaRequest){
        try{
            const response = await this.http.post('reserva/criar-reserva', CreateReservaRequest)
            return response;
        } catch (error) {
            if (error.response && error.response.status !== 200) {
                throw new Error('Erro ao criar reserva. Verifique os dados enviados');
            } else {
                throw new Error('Erro no servidor: Tente novamente mais tarde');
            }
        }
    }
}