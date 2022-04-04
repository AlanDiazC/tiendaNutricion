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
        const precio1 = collection(db, `productos/${prod[1].id}/prices`);
        const precio1Data = await getDocs(precio1);
        const precio1Doc = await precio1Data.docs;

        const precio2 = collection(db, `productos/${prod[2].id}/prices`);
        const precio2Data = await getDocs(precio2);
        const precio2Doc = await precio2Data.docs;
        // for (var i = 0; i < prod.length; i++) {
        setData({
          ...data,
          producto0: {
            id: prod[0].id,
            nombre: prod[0].data().name,
            imagen: prod[0].data().images[0],
            descripcion: prod[0].data().description,
            precio: precio0Doc[0].data().unit_amount / 100,
            precioId: precio0Doc[0].id,
          },
          producto1: {
            id: prod[1].id,
            nombre: prod[1].data().name,
            imagen: prod[1].data().images[0],
            descripcion: prod[1].data().description,
            precio: precio1Doc[0].data().unit_amount / 100,
            precioId: precio1Doc[0].id,
          },
          producto2: {
            id: prod[2].id,
            nombre: prod[2].data().name,
            imagen: prod[2].data().images[0],
            descripcion: prod[2].data().description,
            precio: precio2Doc[0].data().unit_amount / 100,
            precioId: precio2Doc[0].id,
          },
        });
        //}
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
