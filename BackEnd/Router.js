const methods = require("./Method/method")
const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());

    app.get('/questionsList', (req, res) => {
        res.send(methods.getQuestions);
    })

    app.post('/question', (req, res) => {
        res.send(methods.getQuestionById(req.body.id))
    })

    app.get('/rank', (req, res) => {
        res.send(methods.getRank);
    })

    app.post('/addRank', (req, res) => {
        const {name, score} = req.body;
        res.send(methods.addRank(name, score))
    })
}

