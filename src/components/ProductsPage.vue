<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center mb-0 pb-5">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in this.paginationObj.total_pages" :key="page">
        <a class="page-link" href="#" @click.prevent="updatePage(page)"
          :class="{ 'active': page === paginationObj.current_page}">
          {{page}}
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    props:['paginationObj'],
    methods: {
      updatePage(page) {
        this.$emit('postPage', page)
      }
    }
  }
</script>
