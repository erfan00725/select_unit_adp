import { toast } from "react-toastify";
import { ZodError } from "zod";
import errorMassages, { successMassages } from "@/constants/massages";
import { useRouter } from "next/navigation";
import {
  AddFunction,
  SubmitFunction,
  UpdateFunction,
  ValidateFunction,
} from "@/types/Form";

type SubmitOptions<T> = {
  /** The ID of the entity being updated (optional, for update operations) */
  id?: string | bigint;
  /** The form data to be validated and submitted */
  formData: Record<string, any>;
  /** The validation function to use */
  validateFn: ValidateFunction<T>;
  /** The function to call for submitting the data */
  submitFn: SubmitFunction<T>;
  /** The entity type name (for error and success messages) */
  entityName: string;
  /** The URL to redirect to after successful submission */
  redirectUrl?: string;
  type?: "add" | "update";
};

/**
 * A reusable hook for form submission with validation, error handling, and redirection
 */
export function useFormSubmit<T>() {
  const router = useRouter();

  /**
   * Handles form submission with validation and error handling
   */
  const submitForm = async <T>({
    id,
    formData,
    validateFn,
    submitFn,
    entityName,
    redirectUrl,
    type,
  }: SubmitOptions<T>) => {
    console.log(formData);
    // Validate the form data
    const { success, data, error } = validateFn(formData);

    console.log(data);

    // Handle validation errors
    if (!success || !data || (error as ZodError)) {
      if ((error as ZodError)?.errors?.length > 0)
        console.log((error as ZodError).errors);
      toast.error(
        errorMassages.invalidData(
          entityName,
          (error as ZodError).errors[0].message || "اعتبارسنجی ناموفق بود"
        )
      );
      return false;
    }

    try {
      // Convert ID to BigInt if provided
      const bigIntId = id ? BigInt(id) : undefined;
      let result;

      // Submit the data - handle both update and add function types
      if (bigIntId) {
        // For update operations (with ID)
        result = await (submitFn as UpdateFunction<T>)(
          bigIntId,
          data as unknown as T
        );
      } else {
        // For add operations (without ID)
        result = await (submitFn as AddFunction<T>)(data as unknown as T);
      }

      // Handle submission errors
      if (result.error) {
        toast.error(errorMassages.baseErrorMassage(result.error));
        return false;
      }

      switch (type) {
        case "update":
          toast.success(successMassages.updateSuccess(entityName));
          break;
        case "add":
          toast.success(successMassages.addSuccess(entityName));
        default:
          toast.success(successMassages.updateSuccess(entityName));
          break;
      }
      // Show success message

      // Redirect if URL provided
      if (redirectUrl) {
        router.push(redirectUrl);
      }

      return true;
    } catch (error) {
      // Handle unexpected errors
      toast.error(errorMassages.baseErrorMassage(String(error)));
      console.log("err: ", error);
      return false;
    }
  };

  return { submitForm };
}
