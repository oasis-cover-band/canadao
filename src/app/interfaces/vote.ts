export interface Vote {
    id: string;
    userId: string;
    questionId: string;
    questionType: 'multi-choice' | 'two-choice' | 'custom-choice';
    voteOption: number;
    timestamp: number;
}
