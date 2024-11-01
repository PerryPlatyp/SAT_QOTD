export default function Question(array, questionId){
    let obj = array.filter(item => item.questionId === questionId);
    return obj
}