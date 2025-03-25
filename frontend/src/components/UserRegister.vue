<template>
    <div class="register-container">
        <h2 class="my-4">Create Account</h2>

        <form @submit.prevent="handleRegister" class="register-form">
            <!-- Name -->
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" v-model="name" id="name" class="form-control" required />
            </div>

            <!-- Email -->
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" v-model="email" id="email" class="form-control" required />
            </div>

            <!-- Password -->
            <div class="form-group">
                <label for="password">Password:</label>

                <div class="input-group">
                    <input v-model="password" id="password" class="form-control" :type="showPassword ? 'text' : 'password'" required />

                    <span class="view-password" @click="togglePasswordVisibility">
                        <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
                    </span>
                </div>
            </div>

            <!-- Confirm Password -->
            <div class="form-group">
                <label for="confirmPassword">Confirm Password:</label>

                <div class="input-group">
                    <input v-model="confirmPassword" id="confirmPassword" class="form-control" :type="showConfirmPassword ? 'text' : 'password'" required />

                    <span class="view-password" @click="toggleConfirmPasswordVisibility">
                        <i :class="showConfirmPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
                    </span>
                </div>
            </div>

            <p class="mt-3">Already have an account? <router-link to="/login">Login here</router-link></p>

            <div style="display: flex; justify-content: flex-end">
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "UserRegister",

    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            showPassword: false,
            showConfirmPassword: false,
        };
    },

    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },

        toggleConfirmPasswordVisibility() {
            this.showConfirmPassword = !this.showConfirmPassword;
        },

        async handleRegister() {
            if (this.password !== this.confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            if (this.password.length < 8) {
                alert("Password must be at least 8 characters");
                return;
            }

            try {
                const res = await axios.post("/register", {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                });

                const user = {
                    name: res.data.user.name,
                    email: res.data.user.email,
                };

                if (res.status === 201) {
                    localStorage.setItem("user", JSON.stringify(user));

                    alert("Account created successfully");

                    this.$router.push("/login");
                }
            } catch (error) {
                alert(`${error.response.data.message} ! Pls try again`);
            }
        },
    },
};
</script>

<style scoped>
.register-container {
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
