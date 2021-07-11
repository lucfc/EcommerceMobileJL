import api from './api';

export default class FuncionarioService {

    getById(id) {
        return api.get(`funcionario/${id}`).then(res => res.data);
    }

}