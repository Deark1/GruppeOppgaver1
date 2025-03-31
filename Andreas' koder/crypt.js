import bcrypt from 'bcrypt';

const password = 'myPassword';

const hash = await bcrypt.hash(password, 12);
console.log({
    password,
    hash
})

let test = await bcrypt.compare(password, hash);
console.log({
    test
})
