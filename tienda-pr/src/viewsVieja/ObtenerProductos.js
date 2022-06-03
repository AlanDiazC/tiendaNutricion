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
        const prod = await productsData.docs;

        const precio0 = collection(db, `productos/${prod[0].id}/prices`);
        const precio0Data = await getDocs(precio0);
        const precio0Doc = await precio0Data.docs;

        for (var i = 0; i < 2; i++) {
          const precio = collection(db, `productos/${prod[i].id}/prices`);
          const precioData = await getDocs(precio);
          const precioDoc = await precioData.docs;
          data[i] = {
            id: prod[i].id,
            nombre: prod[i].data().name,
            imagen: prod[i].data().images[0],
            descripcion: prod[i].data().description,
            precio: precioDoc[0].data().unit_amount / 100,
            precioId: precioDoc[0].id,
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
