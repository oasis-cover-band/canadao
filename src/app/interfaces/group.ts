export interface Group {
    id: string;
    name: string;
    description: string;
    userIds: string[];
    questionIds: string[];
    inviteOnly: boolean;
}
