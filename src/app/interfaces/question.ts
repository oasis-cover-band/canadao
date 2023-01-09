import { QuestionComment } from "./question-comment";
import { User } from "./user";
import { Vote } from "./vote";

export interface Question {
    id: string;
    text: string;
    type: 'multi-choice' | 'two-choice' | 'custom-choice';
    options: string[];
    optionsCount: number[];
    topics: string[];
    votedUsers: User['id'][];
    votes: Vote[];
    comments?: QuestionComment;
    timestamp: number;
}
