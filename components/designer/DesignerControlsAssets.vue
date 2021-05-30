<template>
<div class="section-container">
    <div class="section">
        <h1>Fonts</h1>
        <div class="font-list">
            <div>
                <span>Arial</span>
                <button>&times;</button>
            </div>
            <div>
                <span>Arial Narrow Bold</span>
                <button>&times;</button>
            </div>
            <div>
                <span>Times New Roman</span>
                <button>&times;</button>
            </div>
        </div>
        <div class="uploader">
            <FormulateInput
                type="file"
                name="file"
                label="Upload Fonts"
                help="Select one or more fonts"
                validation="mime:application/pdf"
                multiple
            />
        </div>
    </div>
    <div class="seperator">&nbsp;</div>
    <div class="section">

        <h1>Colors</h1>
        <div class="colors-list">
            <div>
                <channel-color-picker 
                    class="color-item"
                    :color="color" 
                    @color-change="colorChanged" />
                <button>&times;</button>
            </div>
            <div>
                <channel-color-picker 
                    class="color-item"
                    :color="color" 
                    @color-change="colorChanged" />
                <button>&times;</button>
            </div>
            <div>
                <channel-color-picker 
                    class="color-item"
                    :color="color" 
                    @color-change="colorChanged" />
                <button>&times;</button>
            </div>
        </div>

    </div>
    <div class="seperator">&nbsp;</div>

</div>
</template>

<script>

export default {
    data () {
        return {
            color: { 
                type: "cmyk",
                channels: [5, 5, 5, 5]
            }
        }
    },
    methods: {
        colorChanged(color) {
            this.color = color;
            console.log(color)
            this.color.type = 'rgb'
            console.log(this.color)
        }
    }
}
</script>

<style scoped>

    .font-list {
        @apply flex flex-col border-t;
    }

    .font-list > div {
        @apply flex items-center justify-between p-4 border border-t-0;
    }

    .font-list > div > button, .colors-list > div > button {
        @apply outline-none text-red-500 p-4; 

    }

    .font-list > div > span {
        @apply text-xl py-2 pl-4;
    }

    .font-list div:nth-child(2) > span {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    .font-list div:nth-child(3) > span {
        font-family: 'Times New Roman', Times, serif;
    }

    .uploader {
        @apply p-4 my-4;
    }

    .uploader >>> .formulate-input .formulate-input-element {
        max-width: 100%;
    }

    .uploader >>> .formulate-input .formulate-input-label {
        font-size: 1.2em;
        padding-bottom: 12px;
    }

    .uploader >>> .formulate-input .formulate-input-help {
        font-size: 1em;
        margin-top: 1em;
    }

    .uploader >>> .formulate-input .formulate-input-error, .formulate-input .formulate-file-upload-error {
        @apply text-red-500;
        font-size: 1em;
        margin-bottom: 0.25em;
    }



    .colors-list > div {
        @apply flex items-center justify-between my-4;
    }

        div >>> .sb-color_picker-picker-list li.is-active {
        background: #2b6cb0;
        color: #FFF;
    }

    .colors-list >>> .sb-color_picker-picker {
        @apply shadow-lg; 
        border: 1px solid #DDD;
        padding: 2rem;
        z-index: 999;
    }

    .colors-list >>> .sb-color-values input { 
        @apply border;
    }





</style>