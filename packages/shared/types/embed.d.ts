export type Field = {
    label: string;
    value: string;
    inLinke?: boolean;
}

export interface EmbedData {
    author?: {
        name: string;
        iconURL?: string;
        iconURLinke?: string;
    };
    title: string;
    titleUrl?: string;
    description: string;
    color?: string;
    footer?: {
        text: string;
        iconURL?: string;
    };
    fields?: Field[]
    thumbnail?: string[];
    image?: string;
}
