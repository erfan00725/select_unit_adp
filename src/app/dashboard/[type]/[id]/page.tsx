import React, { Suspense } from "react";
import PageHeader from "@/components/ui/common/PageHeader";
import Loading from "@/components/common/Loading";
import DeleteConfirm from "@/components/ui/DetailPage/DeleteConfirm";
import { PageType } from "@/types/General";
import { DetailPage } from "@/components/ui/pages/common/DetailPage";
import { s_DetailPageConfigs } from "@/constants/configs/DetailPageConfigs";

const LessonDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string; type: PageType }>;
}) => {
  const paramsRes = await params;
  const id = paramsRes.id;
  const type = paramsRes.type;

  const s_config = s_DetailPageConfigs[type];
  const deleteConfig = s_config ? s_config.deleteConfig : null;
  const title = s_config ? s_config.title : null;

  return (
    <div>
      {title && <PageHeader title={title} />}
      {deleteConfig && <DeleteConfirm id={id} {...deleteConfig} />}
      <Suspense fallback={<Loading />}>
        <DetailPage id={id} type={type} />
      </Suspense>
    </div>
  );
};

export default LessonDetailPage;
