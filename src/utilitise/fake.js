
const addToDb = (id) => {
    const exists = getDb();
    let shopping_cart = {};
    if (!exists) {
        shopping_cart[id] = 1;
    } else {
        shopping_cart = JSON.parse(exists);
        if (shopping_cart[id]) {
            const newShop = shopping_cart[id] + 1;
            shopping_cart[id] = newShop;
        } else {
            shopping_cart[id] = 1;
        }
    }
    updateDb(shopping_cart);
}

const getDb = () => localStorage.getItem('shopping_cart');
const updateDb = product => {
    localStorage.setItem('shopping_cart', JSON.stringify(product));
}

const removeDb = id => {
    const exists = getDb();
    if (!exists) {

    } else {
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];
        updateDb(shopping_cart);
    }
}

const setStoreDb = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
}
const clearDb = () => {
    localStorage.removeItem('shopping_cart');
}

export { addToDb, removeDb, setStoreDb, clearDb };