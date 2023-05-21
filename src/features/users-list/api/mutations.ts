import { useMutationTemplate } from "@/shared/api/mutation.template";
import { deleteUser, saveUser, updateUser } from ".";

export const useUserMutationD = (onSuccess: () => void) =>
  useMutationTemplate(deleteUser, ["users"], onSuccess);

export const useUserMutationCr = (onSuccess: () => void) =>
  useMutationTemplate(saveUser, ["users"], onSuccess);

export const useUserMutationUp = (onSuccess: () => void) =>
  useMutationTemplate(updateUser, ["users"], onSuccess);
