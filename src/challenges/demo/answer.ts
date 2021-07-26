/**
 * In this challenge, you should sort the list of topics based on their upvotes!
 * 
 * @param topics Unsorted list of topics
 * @returns Sorted list of topics
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ topics }: { topics: Topic[] }): Topic[] {
    return topics.sort((a, b) => a.upvotes > b.upvotes ? 1 : -1);
}


// used interfaces, do not touch
export interface Topic {
    name: string;
    upvotes: number;
}