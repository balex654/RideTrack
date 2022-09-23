export function EmptyValidator(value: string, message: string, errors: string[]): void {
    if (value === '') {
        AddToList(message, errors);
    }
    else {
        RemoveFromList(message, errors);
    }
}

export function LengthValidator(value: string, length: number, message: string, errors: string[]): void {
    if (value.length > length) {
        AddToList(message, errors);
    }
    else {
        RemoveFromList(message, errors);
    }
}

export function MatchValidator(value1: string, value2: string, message: string, errors: string[]) {
    if (value1 !== value2) {
        AddToList(message, errors);
    }
    else {
        RemoveFromList(message, errors);
    }
}

function AddToList(message: string, list: string[]): void {
    if (!list.includes(message)) {
        list.push(message);
    }
}

function RemoveFromList(message: string, list: string[]): void {
    if (list.includes(message)) {
        list = list.filter(e => e === message);
    }
}