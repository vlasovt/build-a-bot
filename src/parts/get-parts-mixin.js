export default {
  created() {
    this.$store.dispatch('getParts');
  },
  computed: {
    robotParts() {
      return this.$store.state.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
