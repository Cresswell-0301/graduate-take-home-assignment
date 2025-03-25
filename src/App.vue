<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div class="navbar-brand">Graduate Trainee</div>

                <div v-if="isLoggedIn" style="margin-left: auto">
                    <button class="btn btn-outline-danger" @click="logout">Logout</button>
                </div>
            </div>
        </nav>

        <router-view @login-success="handleLogin"></router-view>
    </div>
</template>

<script>
export default {
    name: "App",

    data() {
        return {
            isLoggedIn: false,
        };
    },

    created() {
        const userLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        this.isLoggedIn = userLoggedIn;
    },

    methods: {
        handleLogin() {
            this.isLoggedIn = true;
            localStorage.setItem("isLoggedIn", "true");
        },

        logout() {
            this.isLoggedIn = false;
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("user");
            this.$router.push("/login");
        },
    },
};
</script>

<style>
.container {
    margin: 0 auto;
    padding: 20px;
}

.navbar-brand {
    font-size: 1.5rem;
}
</style>
