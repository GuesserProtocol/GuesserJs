import BetRegistry from './contract_wrappers/bet_registry_wrapper';
import ProxyRegistry from './contract_wrappers/proxy_registry_wrapper';
import RegistrySetter from './contract_wrappers/registry_setter_wrapper';
import BetKernel from './contract_wrappers/bet_kernel_wrapper';
import BetPayments from './contract_wrappers/bet_payments_wrapper';
import BetOracle from './contract_wrappers/bet_oracle_wrapper';
import BetTerms from './contract_wrappers/bet_terms_wrapper';

import ERC20BetKernelProxy from './contract_wrappers/bet_kernel_proxies/ERC20_bet_kernel_proxy';
import ERC721BetKernelProxy from './contract_wrappers/bet_kernel_proxies/ERC721_bet_kernel_proxy';
import ERC20BetPaymentProxy from './contract_wrappers/bet_payments_proxies/ERC20_bet_payment_proxy';
import ERC721BetPaymentProxy from './contract_wrappers/bet_payments_proxies/ERC721_bet_payment_proxy';
import BetOwnerBasedOracle from './contract_wrappers/bet_oracle_proxies/bet_owner_based_oracle_wrapper';
import OwnerBasedOracle from './contract_wrappers/bet_oracle_proxies/owner_based_oracle_wrapper';
import OwnerBasedTermsProxy from './contract_wrappers/bet_terms_proxies/owner_based_wrapper';
import TimeBasedTermsProxy from './contract_wrappers/bet_terms_proxies/time_based_terms_wrapper';

export default class Wrappers {
  constructor(web3) {
    this.web3 = web3;
    // Core Contracts
    this.betRegistry = new BetRegistry(web3);
    this.proxyRegistry = new ProxyRegistry(web3);
    this.registrySetter = new RegistrySetter(web3);
    this.betKernel = new BetKernel(web3);
    this.betPayments = new BetPayments(web3);
    this.betOracle = new BetOracle(web3);
    this.betTerms = new BetTerms(web3);

    // Proxy Contracts
    this.ERC20BetKernelProxy = new ERC20BetKernelProxy(web3);
    this.ERC721BetKernelProxy = new ERC721BetKernelProxy(web3);
    this.ERC20BetPaymentProxy = new ERC20BetPaymentProxy(web3);
    this.ERC721BetPaymentProxy = new ERC721BetPaymentProxy(web3);
    this.betOwnerBasedOracle = new BetOwnerBasedOracle(web3);
    this.ownerBasedOracle = new OwnerBasedOracle(web3);
    this.ownerBasedTermsProxy = new OwnerBasedTermsProxy(web3);
    this.timeBasedTermsProxy = new TimeBasedTermsProxy(web3);
  }

  async init() {
    // Core Contracts
    await this.betRegistry.init();
    await this.proxyRegistry.init();
    await this.registrySetter.init();
    await this.betKernel.init();
    await this.betPayments.init();
    await this.betOracle.init();
    await this.betTerms.init();

    // Proxy Contracts
    await this.ERC20BetKernelProxy.init();
    await this.ERC721BetKernelProxy.init();
    await this.ERC20BetPaymentProxy.init();
    await this.ERC721BetPaymentProxy.init();
    await this.betOwnerBasedOracle.init();
    await this.ownerBasedOracle.init();
    await this.ownerBasedTermsProxy.init();
    await this.timeBasedTermsProxy.init();
  }
}
