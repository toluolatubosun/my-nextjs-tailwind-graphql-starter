import { DocumentNode } from "graphql";
import { useQuery } from "@tanstack/react-query";

import $http from "../api/xhr";

import type { QueryKey, UseQueryOptions } from "@tanstack/react-query";

interface query {
    query: DocumentNode;
    variables?: object;
}

const useGQLQuery = (key: QueryKey, { query, variables = {} }: query, config: UseQueryOptions<any, any> = {}) => {
    const fetchData = async () => {
        return await $http.request(query, variables);
    };

    return useQuery(key, fetchData, config);
};

export default useGQLQuery;
