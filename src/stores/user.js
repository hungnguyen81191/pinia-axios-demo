import { defineStore } from "pinia";
import { getAllUsers } from "@/services/userServices";

export const useUserStore = defineStore("user",{
    state: () => ({
        users: [],
    }),
    getters: {
        getUsers(state){
            return state.users;
        }
    },
    actions: {
        async fetchUsers() {
            try {
                const data = await getAllUsers();
                this.users = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        }
    },


})