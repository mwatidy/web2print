<template>
    <canvas ref="pdf"></canvas>
</template>

<script>
export default {
  props: ['file'],
  head() {
    return {
      script: [
        { src: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js", async: true, callback: () => this.loaded.push(1) },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.min.js", async: true, callback: () => this.loaded.push(1) }
      ]
    }
  },
  data() {
    return {
      loaded: [],
      data: undefined
    }
  },
  created() {
    if(this.loaded.length == 2) this.onLoaded()
  },
    methods: {
    async onLoaded() {


    //GET PDF 
    var pdfjsLib = window['pdfjs-dist/build/pdf'];
    var loadingTask = pdfjsLib.getDocument(this.file);
    let pdf = await loadingTask.promise
    
    this.data = pdf 

    //RENDER ON PAGE 
    let page = await pdf.getPage(1)
    // this.texts = await page.getTextContent()
    // this.texts.items.reverse()

    

    var desiredWidth = this.$el.parentElement.clientWidth;
    var desiredHeight = this.$el.parentElement.clientHeight;

    this.$emit('width', desiredWidth)
    this.$emit('height', desiredWidth)

    var originalViewport = page.getViewport({ scale: 1, });
    var scale = desiredWidth / originalViewport.width;
    var viewport = page.getViewport({ scale: scale, });

    // console.log(scale)

    // var viewport = page.getViewport({ scale: 1, });

    // var scale = 1;
    // var viewport = page.getViewport({ scale: scale, });

    var canvas = this.$refs.pdf;
    var context = canvas.getContext('2d');

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };

    page.render(renderContext);

    
  

    //GET TEXT CONTEXT
    //CREATE DIV FOR EACH CONTEXT



    // const pdf = await PDFDocument.load(await pdfData.getData())
    // window.pdf = pdf




    }
  },
  watch: {
    loaded(val) {
      if(val.length == 2) return this.onLoaded()
    }
  }
}
</script>

<style>

</style>
