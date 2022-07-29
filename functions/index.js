const functions = require("firebase-functions");
const Easypost = require('@easypost/api');

// Clave de easypost (esta es la mia (Mena) de test, reemplazar por la de produccion de quien sea)
const api = new Easypost('EZTK7747c4d7bb5046479cd237ee70edcd6d3Kl6842VvS3GfP9rsEdS7g');

exports.shippingDetails = functions.https.onCall((data, context) => {

  //Lo ideal seria que 'data' contenga la informacion de from address, to address, parcel y las carrier accounts
  const fromAddress = new api.Address({
    /*company: 'Runbed',
    street1: 'CHIMALPOPOCA 294, TRANSITO, 06820',
    street2: 'D 201',
    city: 'Mexico City',
    state: 'Cuauhtemoc',
    country: 'MX',
    zip: '06820',
    phone: '5561412379',
    email: 'runbed@jotos.com'*/
    company: 'EasyPost',
    street1: '417 Montgomery Street',
    street2: '5th Floor',
    city: 'San Francisco',
    state: 'CA',
    zip: '94104',
    phone: '415-528-7555'
  });
  fromAddress.save().then(console.log("DIR FROM: " + fromAddress.street1));
      
  const toAddress = new api.Address({
    /*name: 'Eulaldio Perez',
    company: 'Villas Campestres de Rancho Grande',
    street1: 'CHAPULTEPEC 3012, MARGARITAS, 32300',
    street2: 'Edificio rojo',
    city: 'Ciudad Juarez',
    state: 'Chihuahua',
    country: 'MX',
    zip: '32300',
    phone: '656.616-6010',
    email: 'tumba_burras7000@gmail.com'*/
    name: 'George Costanza',
    company: 'Vandelay Industries',
    street1: '1 E 161st St.',
    city: 'Bronx',
    state: 'NY',
    zip: '10451'
  });
  toAddress.save().then(console.log("DIR TO: " + toAddress.street1));
      
  // Paso 2: Crear un paquete
      
  const parcel = new api.Parcel({
    /*length: 9,
    width: 6,
    height: 2,*/
    predefined_package: 'Parcel',
    weight: 10,
  });
        
  parcel.save().then(console.log);
      
  // Paso 3: Crear un envio y obtener tarifas 
      
  const shipment = new api.Shipment({
    to_address: toAddress,
    from_address: fromAddress,
    parcel: parcel,
    // Los carrier accounts son los id de las cuentas que se tienen, por ejemplo, DHL, UPS, Estafeta, etc
    carrier_accounts: ['ca_3982ca1355a641feab0cf105e7426a76', 'ca_05d72b3b91e34e099713e50e82d06803', 'ca_96145f88be3e4894bd1f6a796f46c795',
    'ca_24fb2b4413ed46deb804b021a680a3f2'],
    mode: 'test',
  });

  // En el objeto shipment hay un arreglo llamado 'rates' que es el que contiene todas las tarifas generadas
  // dentro de 'rates', las variables 'carrier' es el carrier, 'rate' es el precio y 'service' el tipo de servicio de dicha carrier
  shipment.save().then(
    console.log
  );
      
  // Paso 4: Comprar y generar una etiqueta de envio
      
  shipment.save().then(s =>
    // El primer argumento es la carrier seleccionada y el segundo es el servicio escogido de dicha carrier
    s.buy(shipment.lowestRate(['USPS'], ['First']))
    //.then(console.log)
  );

  return data;
});
