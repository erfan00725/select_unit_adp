"use client";
import React, { useEffect } from "react";
import SearchFilterBar from "@/components/ui/Filters/SearchFilterBar";
import { PageType } from "@/types/General";
import DataTable from "@/components/ui/DataTable";
import {
  d_ListConfig,
  defaultListLimit,
  ListGeneralReturnType,
  ListStaticConfigType,
} from "@/constants/configs/ListPageConfigs";
import { errorCheck } from "@/lib/errorCheck";
import Pagination from "@/components/ui/common/Pagination";
import { NoData } from "../../common/NoData";
import Loading from "@/components/common/Loading";

type Props = {
  searchParams: { [key: string]: string | undefined };
  params: { type: PageType };
  staticConfig: ListStaticConfigType;
};

const ListPage = ({ searchParams, params, staticConfig }: Props) => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<ListGeneralReturnType>();

  const type = params.type;

  useEffect(() => {
    setLoading(true);
    if (d_ListConfig[type]) {
      d_ListConfig[type]({ searchParams })
        .then((res) => {
          setData(res);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [searchParams]);

  errorCheck(data?.error);

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return <NoData />;
  }

  return (
    <>
      <SearchFilterBar
        resultsCount={data?.pagination?.total}
        filterOptions={staticConfig.filterOptions}
        searchPlaceholder={staticConfig.searchPlaceholder}
      />
      <DataTable {...data} />
      <Pagination
        currentPage={data.pagination?.currentPage || 1}
        itemsPerPage={data.pagination?.limit || defaultListLimit}
        totalItems={data.pagination?.total || 0}
        baseUrl={data.baseUrl}
      />
    </>
  );
};

export default ListPage;
