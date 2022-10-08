import React from "react";
import { useRouter } from "next/router";
import { hasCookie } from "cookies-next";

import { userGetMe } from "../api";
import { Loading } from "../components";
import useGQLQuery from "./use-gql-query";

import type { NextRouter } from "next/router";

const withAuth = (WrappedComponent: React.FC) => {
    const NewComponent = () => {
        const router: NextRouter = useRouter();

        // Check if user has access token
        const hasAccessToken = hasCookie("access_token");

        React.useEffect(() => {
            if (!hasAccessToken) {
                // If auth token is not in cookie, redirect to login page
                router.push("/");
            }
        }, []);

        // If auth token is in cookie, check if it is valid
        const { isLoading } = useGQLQuery(
            ["auth-user"],
            { query: userGetMe, variables: {} },
            {
                onError: (error: any) => {
                    const message = error.response ? error.response.errors[0].message : error.message;
                    // Handle invalid auth token error and redirect somewhere
                    router.push("/");
                },
                enabled: hasAccessToken
            }
        );

        return isLoading ? <Loading isParent={true} /> : <WrappedComponent />;
    };

    return NewComponent;
};

export default withAuth;
