import { AxiosResponse } from "axios";
import { QueryKey, useMutation, useQueryClient } from "react-query";
import { IResponseData } from "../models/axios.type";

export const useMutationTemplate = <T, R = IResponseData>(
  mutationQuery: (data: T) => Promise<AxiosResponse<R>>,
  queryKey?: QueryKey,
  onSuccess?: (response: AxiosResponse<R>) => void,
  onError?: (data: unknown) => void
) => {
  const queryClient = useQueryClient();

  return useMutation((data: T) => mutationQuery(data), {
    onSuccess: (response) => {
      if (onSuccess) onSuccess(response);
      return queryClient.invalidateQueries(queryKey);
    },
    onError: (data) => {
      if (onError) onError(data);
    },
  });
};
