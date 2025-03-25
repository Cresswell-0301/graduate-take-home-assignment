<template>
    <div v-if="visible" class="toast-container position-absolute" style="top: 10px; right: 10px">
        <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">
                    <div :class="`alert alert-${type}`" role="alert">
                        {{ title }}
                    </div>
                </strong>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            type: "success",
            visible: false,
        };
    },

    methods: {
        showToast(type, title) {
            this.title = title;
            this.type = type;
            this.visible = true;

            clearTimeout(this.timer);

            this.timer = setTimeout(() => {
                this.visible = false;
            }, 1500);
        },
    },
};
</script>

<style scoped>
.toast-container {
    z-index: 1050;
}

.toast-header {
    padding: 0px;
    background-color: transparent;
    border: none;
}

.toast {
    width: fit-content;
}

.alert {
    margin: 0px;
}
</style>
