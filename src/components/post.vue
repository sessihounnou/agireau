<template>
    <div class="grid grid-rows-2 bg-gray-100">
        <div class="border overflow-hidden shadow-sm bg-white rounded-lg  w-[640px] mx-auto sm:mt-[20px]">
            <form action="" method="post">
                <div class="flex mt-[-20px]">
                    <div
                        class="flex items-center justify-center w-[55px] h-[55px] rounded-full bg-primary sm:mt-[45px] sm:ml-[20px]">
                        <span class="text-white text-2xl">A</span>
                    </div>
                    <input type="text" v-model="textInput"
                        class="border-2 rounded-lg sm:mt-[47px] bg-gray-100 sm:h-[50px] sm:ml-[10px] sm:w-[400px] placeholder-slate-800 pl-4 sm:border-gray-400 border-opacity-0 "
                        placeholder="A quoi pensez vous ?">
                    <button @click="addItem"
                        class=" bg-blue-700  rounded-md text-white sm:text-[16px] sm:ml-[10px] sm:w-[130px] h-[50px] mt-[47px]">Publier</button>
                </div>
                <div class="">
                    <input type="file" name="" id="" @change="handleFileChange"
                        class="border sm:h-[42px] sm:w-[350px] border-gray-500 rounded-md file:text-[14px] file:cursor-pointer file:bg-blue-700 file:border-none file:text file:text-white file:h-[40px] sm:ml-[87px] mt-[12px] mb-3">
                </div>
            </form>

        </div>
        <div v-if="selectedImage || textInput" :src="selectedImage.url"
            class=" sm:mt-10  border overflow-hidden shadow-sm bg-white rounded-lg  w-[640px] mx-auto  ">
            <div class="flex ml-[50px]">
                <div
                    class="flex items-center justify-center w-[55px] h-[55px] rounded-full bg-primary sm:mt-[18px] sm:ml-[-20px]">
                    <span class="text-white text-2xl">A</span>
                </div>
                <div class="mx-4 pt-[24px]">
                    <!-- titre -->
                    <div>
                        <span class="font-bold">Ray Newman</span> est à
                        <span class="text-primary"> Porto-novo</span>
                    </div>
                    <!-- sous titre -->
                    <div><span class="italic text-[100%]">Jeudi 01 juin 2023</span></div>
                </div>

            </div>
            <hr class="mt-3  ">
            <p class="text-justify sm:text-[16px] italic mt-4 sm:ml-[40px]">{{ textInput }}</p>

            <img :src="selectedImage.url" alt="Uploaded Image" class="rounded w-full h-[440px] mt-[10px] mx-auto ">

        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            selectedImage: null,
            textInput: "",
            addedText: ""
        };
    },
    methods: {
        handleFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const url = URL.createObjectURL(file);
                this.selectedImage = { file, url };
            }
        },
        addItem() {
            // Logic to add the item using this.selectedImage and this.textInput
            // Reset selectedImage and textInput afterward
            this.selectedImage = null;
            // this.textInput = "";
            this.addedText = this.textInput;
        }
    }
};
</script>

<!-- <script>
// import { mapActions } from "vuex";
// import { v1 } from "uuid";
// import { mapGetters } from "vuex";
export default {
    // data() {
    //     return {
    //         todoText: " "
    //     };
    // },
    // methods: {
    //     ...mapActions(["addTodo"]),
    //     todoTextChange(e) {
    //         this.todoText = e.target.value;
    //     },
    //     addTodoI() {
    //         this.addTodo({
    //             id: v1(),
    //             title: this.todoText
    //         });
    //         this.todoText = " ";
    //     }  
    // },
    // computed: {
    //     ...mapGetters(["allPub"])
    // }
}


</script> -->