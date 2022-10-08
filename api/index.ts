import gql from "graphql-tag";

export const HelloWord = gql`
    query {
        hello
    }
`;

export * from "./paths/user.api";
export * from "./paths/auth.api";
