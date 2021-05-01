<template>
  <div class="wrap">
    <div class="button is-primary" ref="capture">OGPイメージを作成する</div>
  </div>
</template>

<script>
export default {
  // CSR後のwindowオブジェクトにhtml2canvasはアクセスするためmounted時にする
  mounted() {
    const elm = this.$refs.capture;
    const self = this;

    // nextTickは描画を待って実行される
    this.$nextTick(() => {
      // Nuxtのprocess.clientでクライアント実行かを判定する
      if (process.client) {
        const h2c = require("html2canvas");
        // clickイベント時
        elm.addEventListener("click", () => {
          self.$store.dispatch("setLoading", true);
          // html2canvasのバグでスクロールを上げないとページが長い場合に対応できない
          window.scrollTo(0, 0);
          // dom取得
          h2c(document.querySelector("#js_capture_ref"), {
            backgroundColor: "#fff",
          }).then((canvas) => {
            // canvasをblob(生データ)化する
            canvas.toBlob((blob) => {
              const reader = new FileReader();
              reader.readAsDataURL(blob);
              reader.onload = function () {
                const dataURI = this.result;
                self.handleClick(dataURI);
              };
            });
          });
        });
      }
    });
  },

  methods: {
    handleClick(dataURI) {
      // $emitで子から親に値を渡す
      this.$emit("click", dataURI);
    },
  },
};
</script>
<style scoped>
.wrap {
  text-align: center;
}
</style>
