# Supply Chain DApp

## Description
This repository contains the source code for an Ethereum Supply Chain DApp which aims to demonstrate how a traditional supply chain can be conducted on the blockchain to track and verify the items journey from producer to consumer. The scenario presented here is a coffee supply chain.

### Actors & Actions

* Farmer - Harvests, processes, packs and lists coffee beans for sale.
* Distributor - Purchases coffee beans from farmer and ships coffee bean to retailer.
* Retailer - Receives coffee beans from distributor.
* Consumer - Buys coffee beans from retailer.

The coffee supply chain is outlined in the projects UML diagrams presented below.

## UML Diagrams

## Rinkeby Contract Addresses

* FarmerRole - 0x2EcC21768A4430Cd690f749C60631EbFb49F9401
* DistributorRole - 0x18edC57cdD06f0ED4f42eC3CA9E2615C4E4Fdc6F
* RetailerRole - 0x207b8bEf87e9fe8D1c3acF240125ED75d1df36Dd
* ConsumerRole - 0xF385C48680A1896217F1Ef17bB06CC4866Ed7870
* SupplyChain - 0x687d9d7DC3d6FEc175E815105a55B5510ADc6d56

## DApp User Interface

The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

## Transaction History

* Harvested - 
* Processed - 
* Packed - 
* ForSale - 
* Sold - 
* Shipped - 
* Received - 
* Purchased - 

### Prerequisites

* Truffle: v5.1.1 (core: 5.1.1)
* Node: v11.15.0
* Web3.js: v1.2.2
* Programme version: v1.0

## How to Setup

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/Brad-Behrens/Supply-Chain-DApp.git
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd Supply-Chain-DApp
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS
