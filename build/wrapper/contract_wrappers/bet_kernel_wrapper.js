'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var contracts = require('guesser-contracts');
var contract = require('truffle-contract');

var BetKernel = function () {
  function BetKernel(web3) {
    _classCallCheck(this, BetKernel);

    this.web3 = web3;
    this.betKernel = contract(contracts.BetKernel);
    this.instance = null;
  }

  _createClass(BetKernel, [{
    key: 'init',
    value: async function init() {
      try {
        await this.betKernel.setProvider(this.web3.eth.currentProvider);
        this.instance = await this.betKernel.deployed();
      } catch (err) {
        throw err;
      }
    }
  }, {
    key: 'network',
    value: function network() {
      return this.web3.eth.net.getNetworkType();
    }
  }, {
    key: 'address',
    value: function address() {
      return this.instance.address;
    }

    // Events

  }, {
    key: 'LogBetEntry',
    value: async function LogBetEntry() {
      var betEvent = this.instance.LogBetEntry();
      betEvent.watch(function (error, response) {
        console.log(response);
      });
    }

    // Registry Setter

  }, {
    key: 'setBetRegistry',
    value: async function setBetRegistry(address, sender) {
      try {
        await this.instance.setBetRegistry(address, { from: sender });
      } catch (err) {
        throw err;
      }
    }
  }, {
    key: 'betRegistry',
    value: function betRegistry() {
      return this.instance.betRegistry.call();
    }
  }, {
    key: 'paused',
    value: function paused() {
      return this.instance.paused.call();
    }

    // Bet Kernel

  }, {
    key: 'createBet',
    value: async function createBet(kernelProxy, paymentsProxy, paymentsToken, oracleProxy, termsProxy, terms, title, sender) {
      var salt = Math.random() * 9007199254740991; // Js max number
      try {
        var betResult = await this.instance.createBet.call(kernelProxy, paymentsProxy, paymentsToken, oracleProxy, termsProxy, terms, title, salt, { from: sender });

        await this.instance.createBet(kernelProxy, paymentsProxy, paymentsToken, oracleProxy, termsProxy, terms, title, salt, { from: sender });

        return betResult;
      } catch (err) {
        throw err;
      }
    }
  }, {
    key: 'placeBet',
    value: async function placeBet(betHash, option, number, sender) {
      try {
        var playerBetHash = await this.instance.placeBet.call(betHash, option, number, { from: sender });
        await this.instance.placeBet(betHash, option, number, { from: sender });

        return playerBetHash;
      } catch (err) {
        throw err;
      }
    }
  }, {
    key: 'getProfits',
    value: async function getProfits(betHash, playerBetHash, sender) {
      try {
        await this.instance.getProfits(betHash, playerBetHash, { from: sender });
      } catch (err) {
        throw err;
      }
    }
  }]);

  return BetKernel;
}();

exports.default = BetKernel;