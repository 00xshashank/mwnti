import redis from 'redis';
import { CreateQuizParams, Question, Quiz } from './types';
import { generateRandomId } from './utils';

const redisClient = redis.createClient({
    url: 'redis://localhost:6379'
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

const connectDb = async () => {
    await redisClient.connect();
    console.log("Client connected.");
};

const putValue = async (key: string, value: string | string[]) => {
    return redisClient.put(key, value);
}

export const createQuiz = async (params: CreateQuizParams): Promise<number> => {
    const prev = await redisClient.get(`quiz:${params.quizName}`);

    if (prev === null) {
        var questionIds: string[] = [];

        params.questions.forEach(async (ques: Question) => {
            var optionIds: string[] = [];

            ques.options.forEach(async (opt: string) => {
                let random: string = generateRandomId(10);
                optionIds.push(random);
                let res = await putValue(`option:${random}`, opt);
            });

            let randomId = generateRandomId(10);
            questionIds.push(randomId);
            let res = await putValue(`question:${randomId}`, optionIds);
        })

        const result = await putValue(`quiz:${params.quizName}`, questionIds);
    } else {
        return 1;
    }

    return 0;
};

export {
    connectDb
};