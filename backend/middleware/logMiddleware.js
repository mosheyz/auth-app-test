export const log = (req, res, next) => {
    console.log(`${req.method} ${req.url} Called`)
    next()
}