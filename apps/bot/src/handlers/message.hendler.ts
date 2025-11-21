import { messages, MessagePath, MessageCategories, MessageKeys } from "lib/messages";

export function msg(path: MessagePath): string {
    const [category, key] = (path as string).split(".") as [
        MessageCategories,
        MessageKeys<MessageCategories>
    ];

    return messages[category][key as keyof typeof messages[typeof category]];
}