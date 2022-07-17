const add: string = 'ADD';
const remove: string = 'REMOVE_PHONE';
const show: string = 'SHOW';

let phoneBook = new Map<string, Array<string>>;


export let phoneBookHandler = function (command: string): string[] | boolean | string | null {
    let tokens: string[] = command.split(' ');
    switch (tokens[0]) {
        case (add):
            handleAdd(tokens[1], tokens[2].split(','));
            break;
        case (remove):
            return handleRemove(tokens[1]);
        case (show):
            return handleShow();
        default:
            throw new Error('Wrong command');
    }
    return null;
};

function handleAdd(name: string, phones: string[]) {
    if (phoneBook.has(name)) {
        phones.forEach(ph => phoneBook.get(name)!.push(ph));
    } else {
        phoneBook.set(name, phones);
    }
}

function handleRemove(phone: string): boolean {
    let flg: boolean = false;
    Array.from(phoneBook.entries()).some((e) => {
        if (e[1].indexOf(phone) !== - 1) {
            e[1].splice(e[1].indexOf(phone), 1);
            if(e[1].length === 0) phoneBook.delete(e[0]);
            flg = true;
            return true;
        }
    })
    return flg;
}

function handleShow(): string[] {
    let res: string[] = [];
    phoneBook = new Map([...phoneBook.entries()].sort((l, r) => {
        if(l[0] < r[0]) return -1;
        else if(l[0] >  r[0]) return 1;
        else return 0;
    }));
    phoneBook.forEach((v, k) => {
        res.push(k + ': ' + v.join(', '));
    });
    return res;
}
