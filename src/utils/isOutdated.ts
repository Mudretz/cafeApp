export function isOutdated(date: number): boolean {
    if (Date.now() - date > 10*60*1000) {
        return true
    }
    return false
}