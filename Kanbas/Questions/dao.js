import model from "./model.js";

export const findAllQuestions = () => {
    return model.find();
}

export const findQuestionsByQuiz = (quizID) => {
    console.log("looking for questions by this quizId", quizID)
    return model.find({ quizID: quizID});
}

export const addQuestion = (question) => {
    delete question._id;
    return model.create(question);
}

export const editQuestion = (questionID, question) => {
    return model.updateOne({_id: questionID}, { $set: question});
}

export const deleteQuestion = (questionID) => {
    return model.deleteOne({_id: questionID});
}