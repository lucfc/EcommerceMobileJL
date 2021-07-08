import api from '../../services/api';

export default class produtoService {

    getProdutos() {
        return api.get('produto').then(res => res.data);
    }

}