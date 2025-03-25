<template>
    <b-container fluid class="bg-light p-3">
        <b-navbar variant="light" type="light" class="bg-light">
            <b-navbar-nav>
                <b-nav-item v-if="!isLoggedIn" to="/login" class="nav-link">Login</b-nav-item>

                <b-nav-item v-if="!isLoggedIn" to="/registration" class="nav-link">Register</b-nav-item>

                <b-nav-item v-if="isLoggedIn" to="/profile" class="nav-link">Profile</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </b-container>
</template>

<script>
export default {
    name: "NavBar",

    data() {
        return {
            isLoggedIn: false,
        };
    },
};
</script>

<style scoped>
.navbar {
    border-bottom: 2px solid #e4e4e4;
}

.navbar-nav {
    flex-direction: column;
}

.nav-link {
    font-size: 1.2rem;
}
</style>
