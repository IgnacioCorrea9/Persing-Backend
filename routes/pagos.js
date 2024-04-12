
// const express = require("express");
// const router = express.Router();

// var epayco = require('epayco-node')({
//     apiKey: 'a7be0e4b3e0b14d45c3e9998c8ff5fd6',
//     privateKey: 'a3f51cece54f984d0a9dddc2a3ae736a',
//     lang: 'ES',
//     test: true
// });
// const estados = {
//     1: 'Aceptada',
//     2: 'Rechazada',
//     3: 'Pendiente',
//     4: 'Fallida',
//     6: 'Reversada',
//     7: 'Retenida',
//     8: 'Iniciada',
//     9: 'Exprirada',
//     10: 'Abandonada',
//     11: 'Cancelada',
//     12: 'Antifraude'
// };

// router.post('/guardarTarjeta', (req, res) => {
//     // console.log(req.body);
//     let usuarioParam = {
//         name: req.body.usuario.name,
//         email: req.body.usuario.email,
//         city: req.body.usuario.city,
//         address: req.body.usuario.address,
//         cell_phone: req.body.usuario.cell_phone
//     };
//     var credit_info = {
//         "card[number]": req.body.card['number'],
//         "card[exp_year]": req.body.card['exp_year'],
//         "card[exp_month]": req.body.card['exp_month'],
//         "card[cvc]": req.body.card['cvc']
//     }
//     epayco.token.create(credit_info)
//         .then(function (token) {
//             if (token.success) {
//                 // El token se encuentra en token.id
//                 let tokenResultado = token.id;
//                 let franquicia = token.card.name;
//                 var customer_info = {
//                     token_card: tokenResultado,
//                     name: usuarioParam.name,
//                     email: usuarioParam.email,
//                     default: true,
//                     city: req.body.usuario.city,
//                     address: req.body.usuario.city,
//                     phone: '111111111',
//                     cell_phone: '111111111'
//                 }
//                 epayco.customers.create(customer_info)
//                     .then(function (customer) {
//                         console.log('CLIENTE: -------------------------------------------');
//                         console.log(customer);
//                         let tarjeta = {
//                             ultimos: req.body.card['number'].slice(-4),
//                             token: tokenResultado,
//                             epaycoId: customer.data.customerId,
//                             franquicia: franquicia
//                         };
//                         if (customer.success) {
//                             return res.json({ success: true, tarjeta })
//                         } else {
//                             // No se pudo crear el usuario. El error está en customer.data.description
//                             return res.send('Error');
//                         }
//                     })
//                     .catch(function (err) {
//                         // console.log("err: " + err);
//                         return res.send('Error');
//                     });
//             } else {
//                 // Enviar el mensaje de error si no se pudo crear el token. Está en token.data.description
//                 if (token.data.description)
//                     res.send(token.data.description);
//                 else
//                     return res.send('Error');

//             }
//         })
//         .catch(function (err) {
//             // console.log("err: " + err);
//             return res.send('Error');
//         });
// });

// router.post('/realizarPago', (req, res) => {
//     var payment_info = {
//         token_card: req.body.card['token'],
//         customer_id: req.body.card['epaycoId'],
//         doc_type: 'CC',
//         doc_number: '12345678',
//         name: req.body.usuario['name'],
//         last_name: req.body.usuario['last_name'],
//         email: req.body.usuario['email'],
//         bill: req.body.payment['bill'],
//         description: req.body.payment['description'],
//         value: req.body.payment['precio'],
//         tax: req.body.payment['impuesto'],
//         tax_base: req.body.payment['subtotal'],
//         currency: "COP",
//         dues: req.body.payment['dues']
//     }
//     console.log(payment_info);
//     epayco.charge.create(payment_info)
//         .then(function (charge) {
//             console.log('charge:', charge);
//             console.log('estado:', estados[charge.data.cod_respuesta]);
//             if (charge.success) {
//                 // El pago fue exitoso. Debemos guardar el ref_payco, ip, cod_respuesta y estado.
//                 // Actualizamos la transacción en epayco.
//                 console.log('Aceptada');
//                 var pago = {
//                     estado: true,
//                     ref_payco: charge.data.ref_payco,
//                     respuesta: estados[charge.data.cod_respuesta]
//                 };
//                 return res.json({ success: true, payment: pago })
//             } else {
//                 console.log('Rechazada', charge.data.errors)
//                 return res.json({ success: false });
//                 // El pago no fue exitoso. Guardar en Firebase
//             }
//         })
//         .catch(function (err) {
//             // console.log("err: " + JSON.stringify(err));
//         });
// });

// module.exports = router;
