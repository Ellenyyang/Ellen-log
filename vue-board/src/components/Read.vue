<template>
    <div>
        Read - ellen
        

        <p>게시판 리스트</p>

        
        <table>
        <thead>
            <tr>
                <th scope="col">글쓴이</th>
                <th scope="col">제목</th>
                <th scope="col">내용</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="index" v-for="(value, index) in data" @click="detail(index)">
                <td>
                    {{value.writer}}
                </td>
                <td>
                    {{value.title}}
                </td>
                <td>
                    {{value.content}}
                </td>
            </tr>
        </tbody>
        
        </table>
        <button type="button" @click="write">글쓰기</button>
        
 
   </div>
</template>


<script>
import data from '@/data'

export default {
    name:'Read',
    data(){
        return{
            data: data
        }
    },
    methods: {
        write() {
            this.$router.push({
                path:'create'
            })
        },
        detail(index){
            this.$router.push({
                name: 'Detail',
                params: {
                    contentId:  index
                } 
            })
        }
    }
}
</script>