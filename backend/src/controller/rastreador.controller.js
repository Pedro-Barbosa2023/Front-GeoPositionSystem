
const Rastreador = require("../model/Rastreador")

module.exports = {
    async index(req, res) {
        const Rastreador = await Rastreador.find();

        res.json(Rastreador)
    },

    async detail(req, res) {
        const { _id } = req.params
        const Rastreador = await Rastreador.findOne({ _id });

        res.json(Rastreador)
    },

    async delete(req, res) {
        const { _id } = req.params
        const Rastreador = await Rastreador.findByIdAndDelete({ _id });

        res.json({ Message: "Excluido com Sucesso" })
    },

    async create(req, res) {
        const {
            latitude,
            longitude,
            altura
        } = req.body;

        let dataCreate = {};

        dataCreate = {
            latitude,
            longitude,
            altura
        } // vars vindo do corpo
        const RastreadorCreate = await Rastreador.create(dataCreate) // criando o Rastreador atraves das var que vem do corpo
        return res.status(200).json(RastreadorCreate)

    },

    async update(req, res) {
        const {
            _id,
            latitude,
            longitude,
            altura
        } = req.body;

        let dataUpdate = {};

        dataUpdate = {
            _id,
            latitude,
            longitude,
            altura
        } // vars vindo co corpo
        RastreadorUpdate = await Rastreador.findByIdAndUpdate({ _id }, dataUpdate, { new: true }) // criando o Rastreador atraves das var que vem do corpo
        return res.status(200).json(RastreadorUpdate)

    }
}