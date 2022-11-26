export default {
  data() {
    return {
      scrollIcon: true,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    handleScroll() {
      if (window.scrollY >= 650) {
        this.scrollIcon = false;
      } else {
        this.scrollIcon = true;
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
