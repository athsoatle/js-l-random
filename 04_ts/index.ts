export let getHashTags = function (str: string): string[] {
    return str.match(/(^|\s)(#[a-z\d-]+)/ig) == null
        ? []
        : str.match(/(^|\s)(#[a-z\d-]+)/ig).map((s) =>
            s.trim().slice(1)
        );
}