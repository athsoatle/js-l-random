export let normalize = function (tags: string[]): string {
    return tags.map((s) => s.toLowerCase)
        .filter((val, index, self) => self.indexOf(val) === index)
        .join(',');
}