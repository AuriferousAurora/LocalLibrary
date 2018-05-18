'use strict';

module.exports = (sequelize, DataTypes) => {
    const bookInstanceSchema = sequelize.define('book', {
        imprint: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 100]
            }
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'Maintenance',
            validate: {
                isIn: [['Available', 'Maintenance', 'Loaned', 'Reserved']]
            }
        },
        dueBack: {
            type: DataTypes.DATE,
            default: DataTypes.NOW
        }
    });

    bookInstanceSchema.associate = (models) => {
        bookInstanceSchema.belongsTo(models.book,
            {
                foreignKey: 'bookId'
            }
    )};
    return bookInstanceSchema;
}

