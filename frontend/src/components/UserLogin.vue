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

                <div class="input-group">
                    <input :type="showPassword ? 'text' : 'password'" v-model="password" id="password" class="form-control" required />

                    <span class="view-password" @click="togglePasswordVisibility">
                        <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
                    </span>
                </div>
            </div>

            <p class="mt-3">Don't have an account? <router-link to="/register">Register here</router-link></p>

            <div style="display: flex; justify-content: flex-end">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    inject: ["showToast"],

    name: "UserLogin",

    data() {
        return {
            email: "",
            password: "",
            showPassword: false,
        };
    },

    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },

        async handleLogin() {
            try {
                const res = await axios.post("/login", {
                    email: this.email,
                    password: this.password,
                });

                if (res.status === 200) {
                    this.showToast("success", "Login successful");

                    const user = {
                        name: res.data.user.name,
                        email: res.data.user.email,
                    };

                    localStorage.setItem("user", JSON.stringify(user));

                    this.$emit("login-success");

                    this.$router.push("/profile");
                }
            } catch (error) {
                this.showToast("danger", `${error.response.data.message} ! Pls try again`);
            }
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

.view-password {
    cursor: pointer;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
