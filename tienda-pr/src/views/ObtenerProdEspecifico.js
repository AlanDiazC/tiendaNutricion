import { useLayoutEffect } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../config/fbconfig";

const ObtenerProductos = ({ data, setData, setFlag, id }) => {
  useLayoutEffect(() => {
    const getLevel = async () => {
      try {
        const usersCollectionReference = collection(db, "productos");
        const loggedUserData = await getDocs(usersCollectionReference);
        //   console.log("REFERENCIA", usersCollectionReference);
        const prod = await loggedUserData.docs;

        for (var i = 0; i < prod.length; i++) {
          if (prod[i].id == id) {
            const precio = collection(db, `productos/${prod[i].id}/prices`);
            const precioData = await getDocs(precio);
            setData({
              ...data,
              producto0: {
                nombre: prod[i].data().name,
                imagen: prod[i].data().images[0],
                descripcion: prod[i].data().description,
                precio: precioData.docs[0].data().unit_amount / 100,
              },
            });
          }
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
