<template>
    <div>
        <form style="text-align:left;">
            <div class="form-item">
                <label for="writer">글쓴이</label>
                <input v-model="writer" type="text" id="writer" placeholder="글쓴이를 입력해주세요." />
            </div>
            <div class="form-item">
                <label for="title">제목</label>
                <input v-model="title" type="text" id="title" placeholder="제목을 입력해주세요." />
            </div>
            <div class="form-item">
                <label for="content">내용</label>
                <textarea v-model="content" rows="5 "id="content" placeholder="글쓴이를 입력해주세요."></textarea>
            </div>
            <button type="submit" @click="index !== undefined ? update() : submit()">{{index !== undefined ? "저장" : "글 작성"}}</button>
        </form>
    </div>
</template>


<script>
import data from '@/data'
export default {
    name:"Create",
    data(){

        const index = this.$route.params.contentId;
        return{
            data: data,
            index: index,
            writer: index !== undefined ? data[index].writer : "",
            title: index !== undefined ? data[index].title : "",
            content: index !== undefined ? data[index].content : "",
        }
    },
    methods: {
        submit(){
            this.data.push({
                writer: this.writer,
                title: this.title,
                content: this.content
            }),
            this.$router.push({
                path: '/',
            })
        },
        update() {
            data[this.index].writer = this.writer
            data[this.index].title = this.title
            data[this.index].content = this.content
            this.$router.push({
                path: '/',
            })

        }
    },
}
</script>