import React, { Suspense } from "react";
import PageHeader from "@/components/ui/common/PageHeader";
import { PageType } from "@/types/General";
import { notFound } from "next/navigation";
import Loading from "@/components/common/Loading";
import ListPage from "@/components/ui/pages/common/ListPage";
import {
  ListStaticConfigType,
  s_ListConfig,
} from "@/constants/configs/ListPageConfigs";

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
  params: Promise<{ type: PageType }>;
};

// TODO: search functionality dont work porperly( specially in selectUnits)

const Page = async ({ searchParams, params }: Props) => {
  const type = (await params).type;
  const config: ListStaticConfigType | null = s_ListConfig[type] || null;

  if (!config) {
    return notFound();
  }

  return (
    <div>
      <PageHeader title={config.title} description={config.description} />
      <Suspense fallback={<Loading />}>
        <ListPage
          params={await params}
          searchParams={await searchParams}
          staticConfig={config}
        />
      </Suspense>
    </div>
  );
};

export default Page;
