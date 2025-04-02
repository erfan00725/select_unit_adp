import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import Loading from "@/components/common/Loading";
import PageHeader from "@/components/ui/PageHeader";
import { EntityDetailPage, EntityData } from "./EntityDetailPage";
import { InfoPageConfig } from "@/types/General";

/**
 * Higher-order component that creates a detail page for an entity
 *
 * @param fetchFunction - Function to fetch the entity data by ID
 * @param entityKey - The key in the entity data that contains the actual entity
 * @param configGenerator - Function to generate the InfoPageConfig from the entity
 * @param pageTitle - Title for the page header
 * @returns A component that renders a detail page for the entity
 */
export function withEntityDetailPage<
  TParams extends { id: string },
  TEntity,
  TData extends EntityData<
    Partial<Record<TEntityKey, TEntity | null | undefined>>
  >,
  TEntityKey extends string
>(
  fetchFunction: (id: bigint) => Promise<TData>,
  entityKey: TEntityKey,
  configGenerator: (entity: TEntity) => InfoPageConfig,
  pageTitle: string
) {
  // Return a component that takes the params from the route
  return async function EntityDetailPageWrapper({
    params,
  }: {
    params: TParams;
  }) {
    // Fetch the entity data
    const entityData = await fetchFunction(BigInt(params.id));

    // Check if the entity exists
    if (!entityData[entityKey]) {
      return notFound();
    }

    // Render the detail page
    return (
      <div>
        <PageHeader title={pageTitle} />
        <Suspense fallback={<Loading />}>
          <EntityDetailPage
            entityData={entityData}
            entityKey={entityKey}
            configGenerator={configGenerator}
          />
        </Suspense>
      </div>
    );
  };
}
