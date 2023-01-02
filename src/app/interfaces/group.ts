export interface Group {
    id: string;
    name: string;
    description: string;
    image: string;
    userIds: string[];
    questionIds: string[];
    inviteOnly: boolean;
}
