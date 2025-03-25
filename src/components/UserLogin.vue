<template>
    <div class="login-container">
        <h2 class="my-4">Login</h2>

        <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" v-model="email" id="email" class="form-control" required />
            </div>

            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" v-model="password" id="password" class="form-control" required />
            </div>

            <p class="mt-3">Don't have an account? <router-link to="/register">Register here</router-link></p>

            <div style="display: flex; justify-content: flex-end">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "UserLogin",

    data() {
        return {
            email: "",
            password: "",
        };
    },

    methods: {
        handleLogin() {
            const userName = this.email.split("@")[0];

            const user = {
                email: this.email,
                name: userName.charAt(0).toUpperCase() + userName.slice(1),
            };

            localStorage.setItem("user", JSON.stringify(user));

            this.$emit("login-success");
            this.$router.push("/profile");
        },
    },
};
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
}

.form-group {
    margin-bottom: 1rem;
}
</style>
