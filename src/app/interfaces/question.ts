import { QuestionComment } from "./question-comment";
import { Vote } from "./vote";

export interface Question {
    text: string;
    type: 'multi-choice' | 'two-choice' | 'custom-choice';
    categories: string[];
    votes?: Vote[];
    comments?: QuestionComment;
}
