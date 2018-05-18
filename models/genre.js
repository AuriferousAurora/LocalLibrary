const Sequelize = require('sequelize');

const genreSchema = sequelize.define('book', {
    genreid: {
        type: Sequelize.UUIDV4
    },
    name: {
        type: Sequelize.STRING,
        validate: {
            len: [3, 100]
        } 
    }
}, { getterMethods: {
        url() {
            return '/catalog/genre' + this.id;
            }
        } 
});

genreSchema.associate = (db) => {
    genreSchema.belongsTo(db.author,
        {
            foreignKey: 'bookId'
        }
)};


genreSchema.Sequelize = Sequelize;

module.exports = genreSchema;

