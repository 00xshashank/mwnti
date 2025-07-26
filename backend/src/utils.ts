export const generateRandomId = (length: number): string => {
    const vocab = "abcdefghijklmnopqrstuvwxyz0987654321";
    const l = vocab.length;

    let i: number;
    let rStr: string = "";
    for (i = 0; i<=length; i++) {
        rStr += vocab[Math.random() * (l - 1)];
    }

    return rStr;
}