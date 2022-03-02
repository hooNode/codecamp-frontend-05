import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import PDetailPage from "./Pdetail";
import { useRouter } from "next/router";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      tags
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      seller {
        email
        name
        picture
      }
      buyer {
        email
        name
      }
      createdAt
    }
  }
`;

export default function DetailContainerPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query.board),
    },
  });

  useEffect(() => {
    setIsLoading(true);
    if (data) {
      setIsLoading(false);
      console.log(data?.fetchUseditem?.images);
    }
  }, [data]);

  return <PDetailPage data={data} isLoading={isLoading} />;
}
