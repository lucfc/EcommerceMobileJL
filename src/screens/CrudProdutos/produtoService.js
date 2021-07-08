import api from '../../services/api';

export default class produtoService {

    getProdutosSmall() {
        return api.get('/produto').then(res => res.data);
    }

    getProdutos() {
        return api.get('/produto').then(res => res.data);
    }

    getProdutosWithOrdersSmall() {
        return api.get('data/produto-orders-small.json').then(res => res.data);
    }
}