
// MODULES
var fs = require('fs')
var path = require('path')
var StellarSdk = require('stellar-sdk');
var Promise = require('bluebird')
require('dotenv').config()
var request = require('request-promise')

var utils = require('./utils')

// SETUP
StellarSdk.Network.useTestNetwork();

// GLOBAL VARS

var keys
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');


// ACTUAL COMMANDS

/*
	Next Steps
	1. ManageOffer for BIT from issuer account
	2. Query orderbook to get price data

	2. Create crossing offer for BIT from buyer account
*/
	

setKeys(function() {

    var BitAsset = new StellarSdk.Asset('BIT', keys.issuer.publicKey())

  utils.XLMForAsset(keys.buyer, BitAsset)
  //
  // current buyer BIT balance = 542.83333
  // current buyer XLM balance = 9742.999
  //
  //
  // Goal, buy 100 BIT
  //
  //
  //  standing prices 0.54545

  //utils.balancesForKey(keys.buyer.publicKey());
  /*

  	server.loadAccount(keys.issuer.publicKey())

		.then(function(account) {
			var transaction = new StellarSdk.TransactionBuilder(account)
				.addOperation(StellarSdk.Operation.manageOffer({
          buying: StellarSdk.Asset.native(),
          selling: BitAsset,
          amount: '5000',
          price: { n: 6, d:11},
				}))
				.build();
			transaction.sign(keys.issuer)
			return server.submitTransaction(transaction);
		}).then(function(result) {
      console.log(result);
    })
    .catch(function(err) {
      throw err;
    })
    */

  //issuer creates offer of BIT/XLM
  //buyer creates offer of XLM/BIT


  //utils.sendPayment({sender: keys.issuer, receiver: keys.buyer, asset: BitAsset, amount: '10'})
	//utils.createTrustLine(BitAsset, keys.buyer)

})
// UTILITY FUNCTIONS

function setKeys(callback) {
  var issuer = StellarSdk.Keypair.fromSecret(process.env.ISSUER_SECRET)
  var buyer  = StellarSdk.Keypair.fromSecret(process.env.BUYER_SECRET)
  var base   = StellarSdk.Keypair.fromSecret(process.env.BASE_SECRET)
  var app         = StellarSdk.Keypair.fromSecret(process.env.APP_SECRET)
  keys = { issuer: issuer, buyer: buyer, base: base, app: app }
  callback();
}




//var trades = server.orderbook(php, StellarSdk.Asset.native()).trades();
// just returns the  result of the below GET request.
// orderbooks are specifically between a pair of asserts 

//setTimeout(function() { console.log(trades); console.log('Waiting on trades')}, 1000)


// just GET this URL and see the orderbook
// https://horizon.stellar.org/order_book?selling_asset_type=credit_alphanum4&selling_asset_code=PHP&selling_asset_issuer=GBUQWP3BOUZX34TOND2QV7QQ7K7VJTG6VSE7WMLBTMDJLLAW7YKGU6EP&buying_asset_type=native'



