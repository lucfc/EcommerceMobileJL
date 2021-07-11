import api from './api';

export default class produtoService {

    getProdutos() {
        return api.get('produto').then(res => res.data);
    }

    postProdutos(produto) {
        return api.post('produto', produto).then(res => res.data);
    }

    deleteProdutos(id) {
        return api.delete(`produto/${id}`).then(res => res.data)
    }

    putProdutos(produto) {
        return api.put(`produto/${produto.id}`, produto).then(res => res.data)
    }

}