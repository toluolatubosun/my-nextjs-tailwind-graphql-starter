import gql from "graphql-tag";

export const authRegister = gql`
    mutation authRegister($input: RegisterInput!) {
        authRegister(input: $input) {
            user {
                name
                email
            }
            token {
                accessToken
                refreshToken
            }
        }
    }
`;

export const authLogin = gql`
    mutation authLogin($input: LoginInput!) {
        authLogin(input: $input) {
            user {
                name
                email
            }
            token {
                accessToken
                refreshToken
            }
        }
    }
`;

export const authRefreshAccessToken = gql`
    mutation authRefreshAccessToken($refreshToken: String!) {
        accessToken: authRefreshAccessToken(refreshToken: $refreshToken)
    }
`;
