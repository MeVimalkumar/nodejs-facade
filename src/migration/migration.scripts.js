const faker = require('faker');
const mongoose = require('mongoose');
const UserSchema = require('../modules/user/user.schema');
const users = [];
const UserModel = mongoose.model("User", UserSchema);

async function bulkInsertUsers() {
    try {
        const userCount = await UserModel.count().exec();
        if (userCount)
            return;

        let index = 0;
        while (index < 100) {
            index += 1;
            users.push({ name: faker.name.findName(), email: faker.internet.email() });
            await UserModel.insertMany(users);
            console.log('Users added to the system');
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { bulkInsertUsers };