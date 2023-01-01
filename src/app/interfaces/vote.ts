export interface Vote {
    id: string;
    userId: string;
    questionType: 'multi-choice' | 'two-choice' | 'custom-choice';
    voteOption: number;
}
