export interface User {
    id: string;
    name: string;
    image: string;
    description: string;
    voteCount: number;
    votePower: number;
    delegatedToId: string;
    delegatedFromIds: string[];
    groupIds: string[];
    voteIds: string[];
}
