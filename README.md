# Decentralized Verifiable Investment Fund Reporting
In this project we set out to build a prototype of a decentralized reporting system that can be used in the investment fund industry to comply with reporting regulations.  North American and European regulations on investment fund products require regular reporting.  
- Fund managers need to provide reports on their funds  to regulators and dealers
- Dealers need to provide reports to their customers
- Regulators need to review and approve funds
- Reporting needs to cover; fund type, investment strategy, holdings, material changes, performance, and list fund managers
All of this needs to be timestamped, verifiable, and show provenance

## Project components
- Web interfaces for Investment Fund Company, Regulator, and Dealer
- Server for connecting agents and issuing and verifying credentials
- Verifiable Data Registry with NEAR smart contracts for
 - Decentralized Identifiers (DID) and DID Documents
 - Credential Schemas
 - Credential Definitions
Self-Sovereign Identity (SSI) uses agent-based decentralization with a blockchain acting as a decentralized certificate authority
- We have used the Credo-ts project to handle AnonCreds credential types and DIDComm communication
- We built smart contracts to use NEAR as a Verifiable Data Registry (VDR)
- We developed the web and server components using Next.js and Nest.js

## How does the system work?
1. The server is used to launch SSI agents
2. The agents are connected using DIDComm
3. Each issuer needs to have a public DID on the VDR
4. Credentials need to have a credential definition and credential definitions are dependent on a credential schema
5. Credentials can be issued across the connection
6. Proof presentations can be requested across the connection to verify using the VDR to fetch public keys and schemas




