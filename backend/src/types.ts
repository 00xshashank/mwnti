export type Question = {
    question: string,
    options: string[],
    correctOption: string
};

export type CreateQuizParams = {
    hostname: string,
    quizName: string,
    questions: Question[]
};

export type User = {
    id: string, 
    uname: string,
    quizId: string,
    latest: number,
    points: number
}

export type Quiz = CreateQuizParams & {
    currentQues: number,
    votes: number[],
    leaderBoard: User[]
}