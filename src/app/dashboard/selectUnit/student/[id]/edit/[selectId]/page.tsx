import React, { Suspense } from "react";
import StudentInfoCard from "@/components/ui/DetailPage/StudentInfoCard";
import { SelectUnitFormFetch } from "@/components/ui/pages/selectUnit/SelectUnitFormFetch";
import Loading from "@/components/common/Loading";
import PageHeader from "@/components/ui/common/PageHeader";
import { notFound } from "next/navigation";

// Define the Props type for the component
// It includes params and searchParams which are Promises resolving to objects
// containing id and other search parameters

// Define the SelectUnitEditPage component
// This component fetches the student ID from the params and renders the page
// It includes a PageHeader, a StudentInfoCard, and a SelectUnitFormFetch component
// The components are wrapped in Suspense to handle loading states

// Export the SelectUnitEditPage component as the default export

// This component is responsible for rendering the edit page for selecting units
// It uses the StudentInfoCard and SelectUnitFormFetch components to display
// student information and the form for selecting units

// The component is wrapped in a Suspense component to handle loading states
// The fallback component is a Loading component

// The component is exported as the default export of the module

type Props = {
  params: Promise<{ id: string; selectId: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

const SelectUnitEditPage = async ({ params }: Props) => {
  const id = (await params).id;
  const selectId = (await params).selectId;

  if (!selectId || !id) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="ویرایش انتخاب واحد"
        description="اطلاعات دوره را ویرایش کنید"
      />

      {/* Student Information Card */}
      <Suspense fallback={<Loading />}>
        <StudentInfoCard studentId={id} />
      </Suspense>

      {/* Select Unit Form */}
      <Suspense fallback={<Loading />}>
        <SelectUnitFormFetch studnetId={id} selectUnitId={selectId} />
      </Suspense>
    </div>
  );
};

export default SelectUnitEditPage;
