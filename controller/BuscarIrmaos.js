import banco from '../db.js';

const buscarIrmaos = (req, res) => {
    const iniciais = req.params.iniciais;

    if (iniciais == '*') {
        var query = "SELECT * FROM irmaos ORDER BY nome;";
    } else {
        var query = "SELECT * FROM irmaos WHERE nome LIKE '" + iniciais + "%' ORDER BY nome;";
    };

    banco.query(query, (erro, data) => {
        if (erro) return res.json(erro);
        return res.status(200).json(data);
    })
};

export default buscarIrmaos;