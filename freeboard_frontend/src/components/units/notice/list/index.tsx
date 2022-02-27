import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import PListPage from "./Plist";

const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      buyer {
        name
      }
      seller {
        name
      }
      soldAt
      createdAt
    }
  }
`;

export default function ProductListPage() {
  const { data } = useQuery(FETCH_USEDITEMS, {
    variables: {
      page: 1,
    },
  });

  useEffect(() => {
    data?.fetchUseditems.forEach((fetchUseditem) =>
      console.log(fetchUseditem.tags)
    );
  });

  return <PListPage data={data} />;
}
