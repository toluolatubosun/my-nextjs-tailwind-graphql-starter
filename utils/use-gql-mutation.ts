import { DocumentNode } from "graphql";
import { useMutation } from "@tanstack/react-query";

import $http from "../api/xhr";

import type { UseMutationOptions } from "@tanstack/react-query";

const useGQLMutation = (query: DocumentNode, config: UseMutationOptions<any, any, any> = {}) => {
    const fetchData = async (variables: object) => {
        return await $http.request(query, variables);
    };

    return useMutation(fetchData, config);
};

export default useGQLMutation;
