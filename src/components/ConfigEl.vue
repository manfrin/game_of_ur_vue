<script>
import { mapState } from 'vuex'
export default {
  name: 'ConfigEl',
  props: ['field', 'parentKey'],
  render() {

  },
  computed: {
    fieldType() {
      switch (typeof this.field) {
        case "string":
          'text'
          break;
        case "number":
          'number'
          break;
        case "boolean":
          'checkbox'
          break;
        default:
          'text'

      }
    },
    ...mapState([])
  }
}
</script>
