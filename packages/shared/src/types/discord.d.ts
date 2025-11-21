type Field = {
    label: string;
    value: string;
    inLinke?: boolean;
}

interface EmbedData {
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

type LogsChannelProps = {
    close: string,
    delete: string,
    open: string,
    reOpen: string,
    transcript: string,
    claim: string,
}

interface channelProps {
    category: string;
    logs: LogsChannelProps;
}

export {
    // ---- Discord Embeds
    Field,
    EmbedData,

    // ---- Discord Channels
    LogsChannelProps,
    channelProps
}
