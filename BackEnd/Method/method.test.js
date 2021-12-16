const questionsData = require("../Data/questionsData");
const methods = require("./method");
const rankData = require("../Data/rankData");

describe('test back', () => {
    test('length questions is valid', () => {
            expect(methods.getQuestions.length).toBe(questionsData.length);
    });
    test("find question by id", () => {
        expect(methods.getQuestionById(3)).toMatchObject(questionsData[3]);
        expect(methods.getQuestionById(7)).toBeUndefined();
    });
    test('length rank is valid', () => {
        expect(methods.getRank.length).toBe(rankData.length);
    })
    test('add a new rank', () => {
        expect(methods.getRank.length).toBe(0);
        methods.addRank("name_test", 3);
        expect(methods.getRank.length).toBe(1);
    })

})
