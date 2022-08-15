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

        const precio0 = collection(db, `productos/${prod[0].id}/prices`);
        const precio0Data = await getDocs(precio0);
        const precio0Doc = precio0Data.docs;
        //alert(prod.length)
        var n = -1;
        var len = prod.length;

        for (var i = 0; i < len; i++) {
          n += 1;
          const precio = collection(db, `productos/${prod[i].id}/prices`);
          const precioData = await getDocs(precio);
          const precioDoc = precioData.docs;
          data[i] = {
            id: prod[n].id,
            nombre: prod[n].data().name,
            imagen: prod[n].data().images[0],
            descripcion: prod[n].data().description,
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
