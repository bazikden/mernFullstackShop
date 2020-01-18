module.exports = {
    PORT:process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://baz:12345@cluster0-hryhf.mongodb.net/test?retryWrites=true&w=majority',
    jwtSecret:"Shop_SecretCode"
}