"use client";
import React from "react";
import ProductInfoCard, { ProductInfoRow } from "../../ProductInfoCard";
import { errorCheck } from "@/lib/errorCheck";
import { InfoPageConfig } from "@/types/General";

// Generic type for entity data with error handling
export type EntityData<T> = {
  error?: string;
  code?: number;
} & T;

// Props for the EntityDetailPage component
export type EntityDetailPageProps<T, K extends keyof T> = {
  // The entity data returned from the fetch function
  entityData: EntityData<T>;
  // The key in the entity data that contains the actual entity
  entityKey: K;
  // Function to generate the InfoPageConfig from the entity
  configGenerator: (entity: NonNullable<T[K]>) => InfoPageConfig;
};

/**
 * A generic component for displaying entity details
 * This component can be used for any entity type (students, lessons, teachers, etc.)
 */
export function EntityDetailPage<T, K extends keyof T>({
  entityData,
  entityKey,
  configGenerator,
}: EntityDetailPageProps<T, K>) {
  // Check for errors
  const isError = errorCheck(entityData.error);
  if (isError) {
    return null;
  }

  // Get the entity from the data
  const entity = entityData[entityKey];
  if (!entity) {
    return <div>Entity not found</div>;
  }

  // Generate the config for the ProductInfoCard
  const config = configGenerator(entity as NonNullable<T[K]>);

  // Render the ProductInfoCard with the generated config
  return (
    <ProductInfoCard
      id={config.id}
      title={config.title}
      createdAt={config.createdAt}
      modifiedAt={config.modifiedAt}
      InfoRows={config.rows || []}
    />
  );
}
