import { defineComponent, ref } from "vue";

const Comp = ({ value }) => <div>{value}</div>;

export default defineComponent(() => {
  const foo = ref(0);
  window.foo = foo;
  return () => <Comp onClick={() => foo.value++} value={`${foo.value}`} />;
});
