export interface IPhoneFeedItem {
    id: string;
    user: string;
    avatar: string;
    content: string;
    image?: string;
    likes: number;
    comments: number;
}

export interface IScrollSectionProps {
    className?: string;
}
