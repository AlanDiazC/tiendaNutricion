var https = require('follow-redirects/https');
var fs = require('fs');


// Este token expira despues de una hora de ser generado, todo el rato lo cambio cuando expira
// se genera con el options_token y postData_token
const access_token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzphZjYxMDBiNy0xNDYzLTRkN2QtYTE4Ny0xNGY5Mjk0MjBjOTIifQ.eyJhdWQiOlsiZGV2ZWxvcGVycy45OW1pbnV0b3MuY29tIl0sImNsaWVudF9pZCI6Ijg1NmNhYjllLWU3NzUtNGJkMi05OWQwLTZiNDQ2MWQzYTAyYiIsImV4cCI6MTY1OTkxMDI3MiwiZXh0Ijp7fSwiaWF0IjoxNjU5OTA2NjcyLCJpc3MiOiJodHRwczovL2F1dGguOTltaW51dG9zLmRldi8iLCJqdGkiOiIxZWFmMzI2Zi1hNjM4LTQwMWEtODRlZC1kNzhiOTczZmVjYzIiLCJuYmYiOjE2NTk5MDY2NzIsInNjcCI6W10sInN1YiI6Ijg1NmNhYjllLWU3NzUtNGJkMi05OWQwLTZiNDQ2MWQzYTAyYiJ9.il2Aqa4Wp0vpvoM9IwqcWJHrQ485xzre9e1T0BX0wZXSq6niyIhvPsfWb30AxDhWLTLH6FN2jMJxj1CV7fzOv0v5s3-DrptiSDok8hrsYPvAQMfQFdTBolUy91bNrSq0PQ68wmssWQYT2S_xewRDtvnWucrZf4hkhccttUhi0vYkZy6Cxc59nhyLL8PNFyuzw7mddcYH7YJ3MhsN0xhGnbiBJq2TGEPbMWzAXGDNX46zCn-97_UQr3PlAfls78EH5G-K6my-JVRyWvFNfxdCG0KXDdyDAqfQ0R_1FTIK0s5QStf8k0YHikoUzT-dGh6zvMDcxY3GM3h9oH3CgousqzrNmXJ-V6v_VWXuBBPy_iWGkTFai1B69N-z8wg_hwB1QKHIJHTqB7ODph6VpGetJwVXsDUW_jgdd1xPHdhekSP4XSzWIgX9Bb25yyag3EeCnMcjEswb1r-3Ui5rJNYMD3SWEEaNzIewjpLG5_5WK8drlV0KcX_0eeKjB5yhhNZV4iE6cSJf9KljOmk1NRBaj6fhOAgsOjCAPF8ZZC4JqpHvaF4iIlpMylOoXzjxdT8qv0dc4jSp1qmNhWox2OXKxy3FviimwtFSslKOAq-rkSb1ppoMmDWDOOFRDvqyWPaD_wvs26ftWGoSUVjJkgyXnbG-pvonA66jPGiQ-V6ZNAs'

var options_token = {
  'method': 'POST',
  'hostname': 'sandbox.99minutos.com',
  'path': '/api/v3/oauth/token',
  'headers': {
    'Content-Type': 'application/json'
  },
  'maxRedirects': 20
};


// el 'path' se cambia dependiendo de que funcion se quiere, ubicadas en la api de 99minutos
// el 'authorization' es el token de acceso generado
var options = {
  'method': 'POST',
  'hostname': 'sandbox.99minutos.com',
  'path': '/api/v3/orders',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzphZjYxMDBiNy0xNDYzLTRkN2QtYTE4Ny0xNGY5Mjk0MjBjOTIifQ.eyJhdWQiOlsiZGV2ZWxvcGVycy45OW1pbnV0b3MuY29tIl0sImNsaWVudF9pZCI6Ijg1NmNhYjllLWU3NzUtNGJkMi05OWQwLTZiNDQ2MWQzYTAyYiIsImV4cCI6MTY1OTkzMjc2NywiZXh0Ijp7fSwiaWF0IjoxNjU5OTI5MTY3LCJpc3MiOiJodHRwczovL2F1dGguOTltaW51dG9zLmRldi8iLCJqdGkiOiIwNmM4MGY4MS05ZGE2LTQxMjgtYjFkNi1iMzE2ZDYyM2FlZjMiLCJuYmYiOjE2NTk5MjkxNjcsInNjcCI6W10sInN1YiI6Ijg1NmNhYjllLWU3NzUtNGJkMi05OWQwLTZiNDQ2MWQzYTAyYiJ9.cU35ZSc_yLCr1mbiOoyLKu_CsUSAq2lopM4O88baWOiIRU-UFFCKLRKARgpIiH7M2u1OnxijXRcdUS4gB7uuSI_1E6TZ0BOymtgFsqthV0b2DaGoxWb8TkLnNETFN-Emae8j7EgSpNyvrLiVwnUWl6w-oTtMpd7mAF7xtOe5T1_Wu2naVFIoU5Qf0GFDjjJ5wfOuaM96LD_qKvMno6PolH4FBfbQhDwDQwEuvhXYb1FcRoJjzoWMHU9PFW-0wN_r9T7w5dGvLeT98O8z5gmWv_RLu3hmT1zgwLqN7Sq7VRIFIKff_EQUT6CuEO_vtSY9JmtsKv82hzsAa8D3HVBPx9FjPVBhxTA8E277wvQwcwCCADwUTW6-FMOisaCVUyUFxQa3LRXWB8CyMQGhlGpaLuZw2A4J4KYJED1RG2w7KVVrCBclHM0SigU3SsV8tIKBk1XCwqYUn7wvZwqJV7fl_VOpzwAvjfzKZRCR20SSmXDmTP0F_F6SIQYVRktbvGWrISyWQJNn4grVe-HGwULLn_U8STqKhG_rjMIhhsUXPI2aeDZ9shOX3nXsL3pTyS7B_csu_gh1Z71jvE2ty5XE9k4YeWvd81ORMf0n39mLvCia3lmvOMG-ulDN-0Ga2q197_HmaXozXAk4qI8Ulo5hI8vTF6sn-88hO-OFYBh-b2A'
  },
  'maxRedirects': 20
};

// Todo este bloque se mantiene igual, solo cambiar el argumento 'options' segun se requiera
var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});



// Distintos post de prueba, uno para crear una orden, otro para los tokens de acceso y otro para precios

var postData_pruebaEnvio = JSON.stringify({
  "shipments": [
    {
      "internalKey": "",
      "deliveryType": "NXD",
      "sender": {
        "firstName": "Diego",
        "lastName": "Mena",
        "phone": "+525561412379",
        "email": "diegomeniussss1sec@gmail.com"
      },
      "recipient": {
        "firstName": "Tessa",
        "lastName": "Thompson",
        "phone": "+525528174837",
        "email": "medio_escuchas@gmail.com"
      },
      "origin": {
        "address": "Chimalpopoca 294, Tránsito, Cuauhtémoc, 06820 Ciudad de México, CDMX, México",
        "country": "MEX",
        "reference": "Edificio D 201",
        "zipcode": "06820"
      },
      "destination": {
        "address": "Bosques de Rabat 48, Bosques de Aragón, Nezahualcóyotl, Edo. de México, México",
        "reference": "Hogar de la medio escuchas",
        "country": "MEX",
        "zipcode": "57170"
      },
      "payments": {
        "paymentMethod": "cash",
      },
      "items": [
        {
          "size": "l",
          "description": "Proteina para ponerse mamadisimo aaaaaaaaaaa",
          "weight": 6000,
        }
      ]
    }
  ],
});

var postData_token = JSON.stringify({
  "client_id": "856cab9e-e775-4bd2-99d0-6b4461d3a02b",
  "client_secret": "rU_0tuFgGUO-4e6K15KoKuyo9c"
});

var postData_precios = JSON.stringify({
  "country": "MEX",
  "deliveryType": "NXD",
});

// El write solo se usa cuando se quiere mandar un postData con informacion, en operaciones POST
req.write(postData_pruebaEnvio);

req.end();