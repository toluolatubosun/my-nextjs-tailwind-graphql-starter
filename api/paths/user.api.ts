import gql from "graphql-tag";

export const userGetMe = gql`
    query {
        me {
            id
            name
            email
        }
    }
`;
