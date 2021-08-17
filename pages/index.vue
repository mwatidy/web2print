<template>
  <div>
    <div class="relative">
      <PdfView ref="pdf" file="/pdf.pdf" @width="width => parentWidth = width" @height="height => parentHeight = height" />
      <div class="absolute w-full h-full top-0 left-0">
        <div v-for="(text, i) of texts" @click="_ => { focused[i] = true; name += ' '; name = name.trim()}" :key="i"  :class="['absolute', { border: focused[i] }]" :style="{
          color: text.oc,
          textAlign: text.A,
          left: (text.x / width) * (parentWidth + (1/7 * parentWidth) ) + 'px',
          top: (text.y / height) * (parentHeight - (1/3 * parentHeight)) + 'px',
          width: text.w,
          fontSize: ((text.R[0].TS && text.R[0].TS[1] / height) * 2) + 'vw',
          fontWeight: text.R[0].TS && text.R[0].TS[2] ? 'bold' : 'regular',
          fontStyle: text.R[0].TS && text.R[0].TS[3] ? 'italic' : 'normal',
        }">
          <span v-if="i==2">
            {{ name }}
          </span>
          <span v-else>
            {{ decodeURIComponent(text.R[0].T) }}
          </span>
        </div>

        
        <!-- 
          fontFamily: texts.styles[text.fontName].fontFamily,
          fontSize: text.height+'px',
          backgroundColor: '#FFF',

          transform: `translate( ${(text.x / width) * parentWidth}px, ${(text.y / height) * parentHeight}px)`,

        -->
      </div>
    </div>
    <div>
      <input class="w-full p-8" type="text" placeholder="Enter Name" v-model="name">
    </div>
    <button class="w-full text-center p-8 border font-bold" @click="createPdf">
      CREATE PDF
    </button>
  </div>
</template>

<script>

// import 'pdfjs-dist/build/pdf.worker';
// import * as pdfjsLib from 'pdfjs-dist';

// import * as pdf from '~/assets/test.pdf'


//transform: 'matrix('+text.transform.join(',')+')'



import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { saveAs } from 'file-saver';
import fontkit from '@pdf-lib/fontkit'



export default {

  middleware ({ redirect }) {
    return redirect('/designer')
  },

  data() {
    return {
      texts: {},
      width: 0,
      height: 0,
      parentWidth: 1,
      parentHeight: 1,
      name: '',
      focused: [],
      update: false
    }
  },
  async created() {

    let pdfData = await fetch('http://localhost:3000/pdf.json')

    let pdf = await pdfData.json()
    let firstPage = pdf.formImage.Pages[0]

    this.width = pdf.formImage.Width
    this.height = firstPage.Height

    this.texts = firstPage.Texts
    this.name = decodeURIComponent(this.texts[2].R[0].T)

    window.elem = this

  },
  methods: {
    async createPdf() {

      let pdfData = await this.$refs.pdf.data.getData()
      const pdfDoc = await PDFDocument.load(pdfData)

      // const url = 'http://localhost:3000/card.pdf'
      // const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
      // const pdfDoc4 = await PDFDocument.load(arrayBuffer)
      
      const pages = pdfDoc.getPages()

      window.fonts = StandardFonts
      const Helvetica = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

      const fontUrl = '/arabic.ttf'
      const fontBytes = await fetch(fontUrl).then((res) => res.arrayBuffer())
      pdfDoc.registerFontkit(fontkit)
      const Nunito = await pdfDoc.embedFont(fontBytes)


      this.texts[2].R
      window.pages = pages

      pages[0].drawText(this.name, { 
        size: 8,
        x: 160,
        y: 145,
        font: Nunito,
        color: rgb(51/255, 56/255, 96/255)
      })


      const pdfBytes = await pdfDoc.save()
      // console.log(pdfBytes)
      // var dataView = new DataView(pdfBytes);

      // window.pdfBytes = pdfBytes

      var blob = new Blob([pdfBytes.buffer], { type: 'application/pdf' });

      //console.log(blob)
      saveAs(blob, 'editted.pdf')



      window.pdf = pdfDoc

      // console.log(pdfData)

    },
  },
  watch: {
    
  },
  computed: {
    // canvasWidth() {
    //   return this.parentWidth
    // }
  }
}
</script>

<style>
</style>
