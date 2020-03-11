class ContratanteAPI {

    getContratante() {
        return fetch('http://localhost:8000/api/contratante')
            .then(res => res.json())
    }

    getContratanteEmail() {
        return fetch('http://localhost:8000/api/contratante/email')
            .then(res => res.json())
    }
}

export default ContratanteAPI;