<template>
    <div>
        <label for="username">Username:</label>
        <input id="username" v-model="username">
        <br>
        <label for="email">Email:</label>
        <input id="email" v-model="email">
        <br>
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password">
        <br>
        <button v-on:click="signup">Sign up!</button>
    </div>
</template>

<script>

    import {CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';

    export default {
        name: 'Signup',
        data() {
            return {
                email: '',
                username: '',
                password: '',
            };
        },
        methods: {
            signup() {
                const dataEmail = {
                  Name: 'email',
                  Value: this.email,
                };

                const attributeEmail = new CognitoUserAttribute(dataEmail);

                const userPool = new CognitoUserPool({
                   UserPoolId: this.$store.state.UserPoolId,
                   ClientId: this.$store.state.ClientId,
                });

                userPool.signUp(this.username, this.password, [attributeEmail], null, (err, result) => {
                    if (err) {
                        console.log(err);
                        return;
                    }

                    this.$store.dispatch('setUser', result).catch(reject);
                    this.$router.push('home');
                });
            },
        },
    };
</script>

<style scoped>

</style>