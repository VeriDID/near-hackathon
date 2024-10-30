"use client";

import { HStack, Table, Text, VStack } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { FaLessThan } from "react-icons/fa";
// import { InvitationSubPages } from "../main/InvitationsPage"

export default function ProofRequestsTable({
  setShowProofRequestDetails,
  setProofRequestValues,
}: {
  setShowProofRequestDetails: Dispatch<SetStateAction<boolean>>;
  setProofRequestValues: Dispatch<
    SetStateAction<{
      name: string;
      type: string;
      assets: string;
      strategy: string;
      //   material_changes: string;
      holdings: string;
      managers: string;
    }>
  >;
}) {
  // const [showProofRequestDetails,setShowProofRequestDetails]=useState(false)
  return (
    // <Table.ScrollArea borderWidth="1px" maxW="xl">
    <>
      <Table.Root
        unstyled={true}
        size="lg"
        w={"full"}
        border={"1px solid #D3D3D3"}
        box-shadow="0px 4px 4px 0px #1B1B1B1A"
      >
        <Table.Header
          bg={"#F8F8F8"}
          w={"full"}
          justifyContent={"space-between"}
          alignItems={"center"}
          color={"black"}
        >
          <Table.Row fontSize={"16px"} fontWeight={"semibold"}>
            <Table.ColumnHeader ps={"1.5rem"} py={"0.5rem"} textAlign={"left"}>
              Name
            </Table.ColumnHeader>
            <Table.ColumnHeader ps={"1.5rem"} py={"0.5rem"} textAlign={"left"}>
              Type
            </Table.ColumnHeader>
            <Table.ColumnHeader ps={"1.5rem"} py={"0.5rem"} textAlign={"left"}>
              Assets
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body w={"full"}>
          {items.map((item) => (
            <Table.Row
              onClick={() => {
                // setInvitationSubPage(InvitationSubPages["Edit Fund"])
                setProofRequestValues((prev) => {
                  return {
                    ...prev,
                    name: item.name,
                    type: item.type,
                    assets: item.assets.toString(),
                    strategy: item.strategy,
                    holdings: item.holdings,
                    managers: item.manager,
                  };
                });
                setShowProofRequestDetails(true);
              }}
              w={"full"}
              justifyContent={"space-between"}
              alignItems={"center"}
              key={item.id}
              cursor={"pointer"}
              _hover={{ bg: "#F8F8F8", color: "black" }}
            >
              <Table.Cell ps={"1.5rem"} py={"0.5rem"} textAlign={"left"}>
                {item.name}
              </Table.Cell>
              <Table.Cell ps={"1.5rem"} py={"0.5rem"} textAlign={"left"}>
                {item.type}
              </Table.Cell>
              <Table.Cell ps={"1.5rem"} py={"0.5rem"} textAlign="left">
                {item.assets}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
    // </Table.ScrollArea>
  );
}

const items = [
  {
    id: 1,
    name: "Bedrock Growth Fund",
    type: "Mutual",
    assets: "356MM",
    holdings: "ASLT, FRVN, AMXR",
    manager: "T. Simpson",
    strategy: "Growth",
  },
  {
    id: 2,
    name: "DOW Exchange Fund",
    type: "ETF",
    assets: "230MM",
    holdings: "PRTY, FHRI, XTFS, HTHF",
    manager: "T. Loung",
    strategy: "Long-term",
  },
  {
    id: 3,
    name: "Whitestone Labour Sponsored Fund",
    type: "Specialized",
    assets: "127MM",
    holdings: "PRTY, BVST",
    manager: "F. Pattision",
    strategy: "Tax-benefit",
  },
  {
    id: 4,
    name: "West Coast Resource Fund",
    type: "Mutual",
    assets: "420MM",
    holdings: "HTHF, YRUO, FTGY",
    manager: "S. Mal",
    strategy: "Growth",
  },
];
