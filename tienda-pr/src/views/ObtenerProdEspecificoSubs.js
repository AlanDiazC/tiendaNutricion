import { useLayoutEffect } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../config/fbconfig";

const ObtenerProductos = ({ data, setData, setFlag, id, cantidad = 1 }) => {
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
            let precioID = null;
            for (var j = 0; j < precioData.docs.length; j++) {
              if (
                precioData.docs[j]._document.data.value.mapValue.fields.interval
                  .stringValue == "month"
              ) {
                precioID = precioData.docs[j];
              }
            }
            setData({
              ...data,
              producto0: {
                nombre: prod[i].data().name,
                imagen: prod[i].data().imagens,
                descripcion: prod[i].data().description,
                precio: precioID?.data().unit_amount / 100,
                uso: prod[i].data().uso,
                tabla: prod[i].data().tabla,
                articulos: prod[i].data().articulos,
                beneficiosAdulto: prod[i].data().beneficiosAdulto,
                beneficiosAtl: prod[i].data().beneficiosAtl,
                beneficiosPrinc: prod[i].data().beneficiosPrinc,
                preguntas: prod[i].data().Preguntas,
                priceID: String(precioID?._document.key.path.segments).substr(
                  -30
                ),
                quantity: cantidad,
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
