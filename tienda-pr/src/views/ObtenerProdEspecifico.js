import { useLayoutEffect } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../config/fbconfig";

const ObtenerProductos = ({ data, setData, setFlag, id }) => {
  useLayoutEffect(() => {
    const getLevel = async () => {
      try {
        const usersCollectionReference = collection(db, "productos");
        const loggedUserData = await getDocs(usersCollectionReference);
        const prod = await loggedUserData.docs;
        var len = prod.length;
        // console.log("REFERENCIA", id);

        for (var i = 0; i < len; i++) {
          
          if (prod[i].id == id) {
            const precio = collection(db, `productos/${prod[i].id}/prices`);
            const precioData = await getDocs(precio);
            console.log(prod[i].data())
            setData({
              ...data,
              producto0: {
                nombre: prod[i].data().name,
                imagen: prod[i].data().metadata.imagens,
                descripcion: prod[i].data().description,
                precio: precioData.docs[0].data().unit_amount / 100,
                uso: prod[i].data().metadata.uso,
                tabla: prod[i].data().tabla,
                articulos: prod[i].data().metadata.articulos,
                beneficiosAdulto: prod[i].data().metadata.beneficiosAdulto,
                beneficiosAtl: prod[i].data().metadata.beneficiosAtl,
                beneficiosPrinc: prod[i].data().metadata.beneficiosPrinc,
                preguntas: prod[i].data().metadata.Preguntas,
                priceID: String(
                  precioData.docs[0]._document.key.path.segments
                ).substr(-30),
                quantity: 1,
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
