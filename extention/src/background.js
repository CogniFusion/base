
import { pipeline, env } from '@xenova/transformers';
env.allowLocalModels = false;
env.backends.onnx.wasm.numThreads = 1
class PipelineSingleton {
    static task = 'text2text-generation';
    static model = 'Xenova/LaMini-Flan-T5-783M';
    static instance = null;

    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            env.cacheDir = './.cache';
            this.instance = await pipeline(this.task, this.model, { progress_callback });
        }

        return this.instance;
    }
}

const generate = async (text) => {
    // Get the pipeline instance. This will load and build the model when run for the first time.

    let model = await PipelineSingleton.getInstance();
    // Actually run the model on the input text
    let result = await model(text, { max_new_tokens: 100 });

    return result
};

chrome.runtime.onMessage.addListener((message,
    sender, sendResponse) => {
    console.log(message)
    if (message.action !== 'generate') return;
    (async function () {

        const result = await generate(message.text)
        sendResponse(result);
    })();
    return true;
});



