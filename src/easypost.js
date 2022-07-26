// Step 1: Create To and From Addresses

const Easypost = require('@easypost/api');
const api = new Easypost('EZTK7747c4d7bb5046479cd237ee70edcd6d3Kl6842VvS3GfP9rsEdS7g');

const fromAddress = new api.Address({
  /*company: 'Runbed',
  street1: 'CHIMALPOPOCA 294, TRANSITO, 06820',
  street2: 'D 201',
  city: 'Mexico City',
  state: 'Cuauhtemoc',
  //Colonia: 'Col. Transito',
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
    //Colonia: 'Col. Margaritas',
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

console.log(toAddress.state);

// Step 2: Create a Parcel

const parcel = new api.Parcel({
    /*length: 9,
    width: 6,
    height: 2,*/
    predefined_package: 'Parcel',
    weight: 10,
});
  
parcel.save().then(console.log);

// Step 3: Create a Shipment and Get Rates

const shipment = new api.Shipment({
to_address: toAddress,
from_address: fromAddress,
parcel: parcel,
carrier_accounts: ['ca_3982ca1355a641feab0cf105e7426a76', 'ca_05d72b3b91e34e099713e50e82d06803', 'ca_96145f88be3e4894bd1f6a796f46c795',
'ca_24fb2b4413ed46deb804b021a680a3f2'],
mode: 'test',
});

shipment.save().then(
  console.log
);

// Step 4: Buy and Generate a Shipping Label

// If you do not have a saved shipment yet, you must save it first:
shipment.save().then(s =>
  s.buy(shipment.lowestRate(['USPS'], ['First']))
    //.then(console.log)
);