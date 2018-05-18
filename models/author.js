'use strict';

module.exports = (sequelize, DataTypes) => {
    const authorSchema = sequelize.define('author', {
        authorId: {
            type: DataTypes.UUIDV4
        },
        firstName: {
            type: DataTypes.STRING,
            validate: {
                is: /^[a-z]+$/i,
                len: [2, 100]
            }
        },
        familyName: {
            type: DataTypes.STRING,
            validate: {
                is: /^[a-z]+$/i,
                len: [2, 100]
            }
        },
        dateOfBirth: {
            type: DataTypes.DATE
        },
        dateOfDeath: {
            type: DataTypes.DATE
        }
    })
    return authorSchema;
}