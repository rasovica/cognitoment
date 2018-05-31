<template>
    <div>
        <label for="username">username:</label>
        <input id="username" v-model="username"/>
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password"/>
        <button v-on:click="login">Login</button>
    </div>
</template>

<script>
    import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: '',
            };
        },
        mounted() {
            console.log(this.$store.state.user);
        },
        methods: {
            login() {
                const self = this;

                const authenticationData = {
                    Username: self.username,
                    Password: self.password,
                };

                const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

                const poolData = {
                  UserPoolId: self.$store.state.UserPoolId,
                  ClientId: self.$store.state.ClientId,
                };

                const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

                const userData = {
                    Username: self.username,
                    Pool: userPool,
                };

                const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

                cognitoUser.authenticateUser(authenticationDetails, {
                    onSuccess(result) {
                        self.$store.commit('setUser', result);
                        self.$router.push({name: 'home'});
                    },
                    onFailure(error) {
                        console.log(error);
                    },
                });
            },
        },
    };
</script>

<style scoped>

</style>