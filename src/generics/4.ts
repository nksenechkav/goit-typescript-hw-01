type PartialUser = Partial<User>;

function createOrUpdateUser(initialValues: PartialUser) {
    
    // Оновлення користувача
    return initialValues;

}

createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
} as PartialUser);