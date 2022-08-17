# Pricing

### POSTGet Price(s)

> https://sandbox.99minutos.com/api/v3/pricing

Check the price of your shipment

Payload Parameters
- **country**: Country name based on ISO 3166-1

  - string
  - options: [ 'COL', 'MEX', 'PER', 'CHL' ]
  - required

- **deliveryType** optional: Indicate the Delivery Type which can be SameDay(SMD), NextDay (NXD), 99minutos(99M), Co2Free (CO2F), Reverse(RET). Be careful submitting accepted abbreviations.
  - string
  - example: SMD
  - allowed values: [ SMD, NXD, 99M, CO2F, RET ]

- **size**: Size of the itme. Refers to allowed values in the item schema detailed above.
  - optional. If is not given, the response contain all sizes.
  - string
  - allowed values: [ xs, s, m, l, xl ]

| Value | Weight (grams)|
|---|---|
| x	| g - 1000g |
| s	| 1001g - 3000g |
| m	| 3001g - 5001g |
| l	| 5001g - 15000g |
| xl |	15001g - 25000g |