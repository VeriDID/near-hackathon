import { NearLedgerService } from "../ledger";
import {
  AgentContext,
  DidDocument,
  DidResolver,
  DidResolverService,
  inject,
  injectable,
  Logger,
  ParsedDid,
} from "@credo-ts/core";

export interface EthereumDidResolveOptions {
  did: string;
  network: string;
}

@injectable()
export class NearDIDResolver implements DidResolver {
  private ledgerService: NearLedgerService;
  allowsCaching: boolean;
  allowsLocalDidRecord: boolean;
  public supportedMethods: string[];
  constructor(ledgerService: NearLedgerService) {
    this.ledgerService = ledgerService;
    this.allowsCaching = true;
    this.allowsLocalDidRecord = true;
    this.supportedMethods = ["near"];
  }
  public async resolve(
    agentContext: AgentContext,
    did: string,
    parsed: ParsedDid
  ): Promise<DidResolutionResult> {
    try {
      const ledgerService = agentContext.dependencyManager.resolve(
        NearLedgerService
      );
      const document = await ledgerService.getDIDDocument(did);
      console.log(document, "document");
      if (!document) {
        return this.errorResponse("DID document not found");
      }
      const didDocument:DidDocument = new DidDocument(document);
      return {
        didDocument: document,
        didDocumentMetadata: {},
        didResolutionMetadata: {
          contentType: "application/did+ld+json",
        },
      };
    } catch (error: any) {
      console.error(error);
      return this.errorResponse("Error resolving DID");
    }
  }

  public async resolveResource(agentContext: AgentContext, did: string): Promise<DidResolutionResult> {
    try {
      const ledgerService = agentContext.dependencyManager.resolve(
        NearLedgerService
      );
      const document = await ledgerService.getSchema(did);
      console.log(document, "document");
      if (!document) {
        return this.errorResponse("DID document not found");
      }
      return {
        didDocument: document,
        didDocumentMetadata: {},
        didResolutionMetadata: {
          contentType: "application/did+ld+json",
        },
      };
    } catch (error: any) {
      console.error(error);
      return this.errorResponse("Error resolving DID");
    }
  }

  

  private errorResponse(message: string): DidResolutionResult {
    return {
      didDocument: null,
      didDocumentMetadata: {},
      didResolutionMetadata: {
        error: "notFound",
        message: message,
      },
    };
  }
}

export interface DidResolutionResult {
  didDocument: any; // This would typically be the parsed DID document
  didDocumentMetadata: object;
  didResolutionMetadata: {
    error?: string;
    message?: string;
    contentType?: string;
  };
}
