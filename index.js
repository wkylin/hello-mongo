const { prisma } = require('./generated/prisma-client');
async function main() {
    const newUser = await prisma.createUser({
        name: 'Alice',
    });
    console.log(`Create new user: ${newUser.name} (ID: ${newUser.id})`);

    const allUsers = await prisma.users();
    console.log(allUsers);

    const newPost = await prisma.createPost({
        title: 'prisma mongodb'
    })
    const allPosts = await prisma.posts();
    console.log(allPosts);

};

main().catch(e => console.log(e));