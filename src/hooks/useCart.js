import { useEffect, useState } from "react"
import { setStoreDb } from "../utilitise/fake";

const useCart = products => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) {
            const saveStore = setStoreDb();
            let storeCart = [];
            for (const key in saveStore) {
                const added = products.find(product => product.key === key);
                if (added) {
                    const quantity = saveStore[key];
                    added.quantity = quantity;
                    storeCart.push(added);
                }
            }
            setCart(storeCart);
        }

    }, [products])
    return [cart, setCart];
}
export { useCart };