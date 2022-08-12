import { useLayoutEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../config/fbconfig";

const ObtenerProductos = ({ data, setData, setFlag }) => {
  useLayoutEffect(() => {
    const getLevel = async () => {
      try {
        const productsCollectionReference = collection(db, "productos");
        const productsData = await getDocs(productsCollectionReference);
        //   console.log("REFERENCIA", usersCollectionReference); `clientes/${auth.currentUser.uid}/checkout_sessions`
        const prod = productsData.docs;
        
        for (var i = 0; i < 2; i++) {
          console.log(prod[i].id);
          const precio = collection(db, `productos/${prod[i].id}/prices`);
          const precioData = await getDocs(precio);
          const precioDoc = precioData.docs;
          data[i] = {
            id: prod[i].id,
            nombre: prod[i].data().name,
            imagen: prod[i].data().images[0],
            descripcion: prod[i].data().description,
            precio: precioDoc[0].data().unit_amount / 100,
            precioId: precioDoc[0].id,
            quantity: 1,
          };
        }
        setFlag(true);
      } catch (e) {
        console.log(e);
        return null;
      }
    };
    getLevel();
  }, []);
  return null;
};

export default ObtenerProductos;
