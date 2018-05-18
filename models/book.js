'use strict';

module.exports = (sequelize, dataTypes) => {
    const bookSchema = Sequelize.define('book', {
        bookId: {
            type: Sequelize.UUIDV4
        },
        title: {
            type: Sequelize.STRING,
            validate: {
                len: [1, 100]
            }
        },
        summary: {
            type: Sequelize.STRING,
            validate: {
                len: [1, 100]
            }
        },
        isbn: {
            type: Sequelize.STRING,
            validate: {
                len: [1, 100]
            }
        }
    });

    bookSchema.associate = (models) => {
        bookSchema.belongsTo(models.author,
            {
                foreignKey: 'authorId'
            }
    )};

    bookSchema.associate = (models) => {
        bookSchema.belongsTo(models.genre,
            {
                foreignKey: 'genreId'
            }
    )};
    return bookSchema;
}

