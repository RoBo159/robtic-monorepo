export interface dataProps {
    _id: string;
    name?: string;
    category?: string;
    description?: string
    form?: boolean;
    formId?: string | null
}

export const data : dataProps[] = [
    {
        _id: "1",
        name: "test",
        category: "1304497912541216821",
        description: "test test test",
        form: true,
        formId: "11"
    }, {
        _id: "2",
        name: "testo",
        description: "test test test for another one",
        form: false,
        formId: null
    }, {
        _id: "4",
        name: "testoti",
        description: "test test test for another one",
        form: true,
        formId: "22"
    },
]

export const formData = [
    {
        _id: "11",
        name: "test",
        questionsId: ["111", "112", "113"],
    },
    {
        _id: "22",
        name: "tested",
        questionsId: ["111", "113"],
    },
]

export const questionData = [
    {
        _id: "111",
        label: "question1",
        style: 1,
        placeholder: "test este tsfds"
    },
    {
        _id: "112",
        label: "question2",
        style: 2,
        placeholder: "test este tsfds"
    },
    {
        _id: "113",
        label: "question3",
        style: 2,
        placeholder: "test este tsfds wow"
    }
]