import Subject from "../../utils/objserver/subject";

const SpeechRecognition = SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent = SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
let recognition;
let speechRecognitionList;

const colors = ["aqua"];
const grammar =
    "#JSGF V1.0; grammar colors; public <color> = " +
    colors.join(" | ") +
    " ;";

let recognizing = false;

const setup = () => {
    speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition = new SpeechRecognition();
    // refact
    recognition.grammars = speechRecognitionList;
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.lang = "pt-PT";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
}

const handleResponse = (result, error) => {
    if (!error) {
        speechSubject.emit(result);
    } else {
        speechSubject.error(result);
    }
}

const handleEvents = (/* resolve, reject */) => {
    /**
     * The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
     * The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
     * It has a getter so it can be accessed like an array
     * The first [0] returns the SpeechRecognitionResult at the last position.
     * Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
     * These also have getters so they can be accessed like arrays.
     * The second [0] returns the SpeechRecognitionAlternative at position 0.
     * We then return the transcript property of the SpeechRecognitionAlternative object
     */

    recognition.onstart = () => {
        recognizing = true;
        recognizingSubject.emit(recognizing);
    };

    recognition.onresult = (event) => {
        handleResponse(event.results[0][0]);
    };

    recognition.onspeechend = () => {
        recognition.stop();
        recognizing = false;
        recognizingSubject.emit(recognizing);
    };

    recognition.onnomatch = (event) => {
        console.error("onnomatch: I didn't recognise that color.", event);
        handleResponse({});
    };

    recognition.onerror = (event) => {
        console.log("Error occurred in recognition: " + event.error);
        handleResponse({}, event.error);
    };
}

const speechSubject = new Subject();
const recognizingSubject = new Subject();

const subscribeRecognizing = (fns) => {
    return recognizingSubject.subscribe(fns);
}

const subscribe = (fns) => {
    setup();
    handleEvents();
    return speechSubject.subscribe(fns);
}

const unsubscribe = (successFn) => {
    speechSubject.unsubscribe(successFn);
}

const start = () => {
    if (!recognizing) {
        recognition.start();
    }
}

const speechToText = {
    subscribe,
    unsubscribe,
    start,
    subscribeRecognizing,
}

export default speechToText;
