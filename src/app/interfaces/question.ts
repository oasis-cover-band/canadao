import { QuestionComment } from "./question-comment";
import { User } from "./user";
import { Vote } from "./vote";

export interface Question {
    id: number;
    text: string;
    type: 'multi-choice' | 'two-choice' | 'custom-choice';
    categories: string[];
    votedUsers: User['id'][];
    votes?: Vote[];
    comments?: QuestionComment;
}
