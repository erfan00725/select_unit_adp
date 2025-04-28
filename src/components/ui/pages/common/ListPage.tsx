import React from "react";
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

type Props = {
  searchParams: { [key: string]: string | undefined };
  params: { type: PageType };
  staticConfig: ListStaticConfigType;
};

const ListPage = async ({ searchParams, params, staticConfig }: Props) => {
  const type = params.type;
  let pageData: ListGeneralReturnType | undefined;

  if (d_ListConfig[type]) {
    pageData = await d_ListConfig[type]({ searchParams });
  }
  errorCheck(pageData?.error);

  if (!pageData) {
    return <NoData />;
  }

  return (
    <>
      <SearchFilterBar
        resultsCount={pageData?.pagination?.total}
        filterOptions={staticConfig.filterOptions}
        searchPlaceholder={staticConfig.searchPlaceholder}
      />
      <DataTable {...pageData} />
      <Pagination
        currentPage={pageData.pagination?.currentPage || 1}
        itemsPerPage={pageData.pagination?.limit || defaultListLimit}
        totalItems={pageData.pagination?.total || 0}
        baseUrl={pageData.baseUrl}
      />
    </>
  );
};

export default ListPage;
