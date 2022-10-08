import React from "react";

import { userGetMe } from "../api";
import useGQLQuery from "./use-gql-query";

const useUser = () => {
    const [userData, setUserData] = React.useState<null | object | any>(null);

    const { isLoading, isError } = useGQLQuery(
        ["auth-user"],
        { query: userGetMe, variables: {} },
        {
            onSuccess: (data: any) => {
                setUserData(data.me);
            },
            onError: (error: any) => {
                console.log(error.response ?? error.message);
            }
        }
    );

    return {
        isError,
        isLoading,
        user: userData
    };
};

export default useUser;
