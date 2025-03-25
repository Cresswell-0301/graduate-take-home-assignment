<template>
    <div class="container profile-container">
        <h2 class="my-4">My Profile</h2>

        <div class="profile-info mb-4">
            <div class="user-details">
                <h3>{{ user.name }}</h3>
                <p>{{ user.email }}</p>
            </div>
        </div>

        <div class="about-me-section">
            <div class="about-me-header d-flex justify-content-between align-items-center mb-3">
                <h3>About Me</h3>

                <button @click="toggleEdit" class="btn btn-primary">
                    {{ isEditing ? "Cancel Edit" : "Edit" }}
                </button>
            </div>

            <div v-if="isEditing">
                <textarea v-model="editedAboutMe" class="form-control" placeholder="Write something about yourself..." rows="6"></textarea>

                <div class="action-buttons mt-3">
                    <button @click="saveAsDraft" class="btn btn-secondary">Save as Draft</button>
                    <button @click="submitAboutMe" class="btn btn-success">Submit</button>
                </div>
            </div>
            <div v-else class="about-me-content bg-light p-3 rounded">
                <p>{{ aboutMe || "No information provided yet." }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserProfile",

    data() {
        return {
            user: JSON.parse(localStorage.getItem("user")) || {},
            aboutMe: localStorage.getItem("aboutMeSubmitted") || "",
            editedAboutMe: "",
            isEditing: false,
            isSubmitted: false,
        };
    },

    methods: {
        toggleEdit() {
            this.isEditing = !this.isEditing;

            if (this.isEditing) {
                this.editedAboutMe = this.aboutMe || localStorage.getItem("aboutMeDraft") || "";
            }
        },

        saveAsDraft() {
            localStorage.setItem("aboutMeDraft", this.editedAboutMe);

            alert("Saved as draft!");
        },

        submitAboutMe() {
            this.aboutMe = this.editedAboutMe;
            localStorage.setItem("aboutMeSubmitted", this.editedAboutMe);
            localStorage.removeItem("aboutMeDraft");

            this.isSubmitted = true;
            this.isEditing = false;

            alert("About Me submitted successfully!");
        },
    },
};
</script>

<style scoped>
.profile-container {
    max-width: 800px;
    margin: 0 auto;
}

.profile-info {
    display: flex;
    align-items: center;
}

.about-me-section {
    margin-top: 2rem;
}

.about-me-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

textarea {
    width: 100%;
    margin-bottom: 1rem;
}

.action-buttons {
    display: flex;
    gap: 1rem;
}
</style>
