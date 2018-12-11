export default {
  created() {
    this.$store.dispatch('robots/getParts');
  },
  computed: {
    robotParts() {
      return this.$store.state.robots.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
