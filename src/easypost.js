// Step 1: Create To and From Addresses

const Easypost = require('@easypost/api');
const api = new Easypost('EZTK7747c4d7bb5046479cd237ee70edcd6d3Kl6842VvS3GfP9rsEdS7g');

const fromAddress = new api.Address({
  company: 'EasyPost',
  street1: '417 Montgomery Street',
  street2: '5th Floor',
  city: 'San Francisco',
  state: 'CA',
  zip: '94104',
  phone: '415-528-7555'
});

fromAddress.save().then(console.log);

const toAddress = new api.Address({
    name: 'George Costanza',
    company: 'Vandelay Industries',
    street1: '1 E 161st St.',
    city: 'Bronx',
    state: 'NY',
    zip: '10451'
});
toAddress.save().then(console.log);

// Step 2: Create a Parcel

const parcel = new api.Parcel({
    length: 9,
    width: 6,
    height: 2,
    weight: 10,
});
  
parcel.save().then(console.log);

// Step 3: Create a Shipment and Get Rates

const shipment = new api.Shipment({
to_address: toAddress,
from_address: fromAddress,
parcel: parcel
});

shipment.save().then(console.log);

shipment.rates.forEach(rate => {
    console.log(rate.carrier);
    console.log(rate.service);
    console.log(rate.rate);
    console.log(rate.id);
});

// Step 4: Buy and Generate a Shipping Label

// If you already have a saved shipment, or a shipment initialized
// with an id:

shipment.buy(shipment.lowestRate(['USPS'], ['First']))
  .then(console.log);

// or

shipment.buy('{RATE_ID}').then(console.log);

// If you do not have a saved shipment yet, you must save it first:
shipment.save().then(s =>
  s.buy(shipment.lowestRate(['USPS'], ['First']))
    .then(console.log)
);

// Print PNG link
console.log(shipment.postage_label.label_url);

// Print Tracking Code
console.log(shipment.tracking_code);
