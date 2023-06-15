import config from './config.js';

export function filterText(text) {
    if (!config.TagRemoval) {
        return text;
    }
    // Regular expressions go below this line
    const pruneRe = /&lt;prune&gt;[\s\S]*?&lt;\/prune&gt;/g;
    const summaryRe = /&lt;summary&gt;[\s\S]*?&lt;\/summary&gt;/g;
    const chatRe = /&lt;\/?CHAT&gt;/g;
    const modRe = /&lt;\/?mod&gt;/g;
    const threadRe = /&lt;\/?thread&gt;/g;
    const humanRe = /&lt;\/?human&gt;/g;
    const respondRe = /\[You respond here\]/g;
    const chrRe = /&lt;\/?CHR&gt;/g;
    const startNewChatRe = /\[Start a new chat\]/g;
    const humanNoteRe = /\[Human note: [^\]]*\]/g;
    const assistantNoteRe = /\[Assistant note: [^\]]*\]/g;
    const oocRe = /\(OOC:[\s\S]*?\)/g;
    const spaceoocRe = /\( OOC:[\s\S]*?\)/g;


    
    return text.replace(pruneRe, '').replace(summaryRe, '').replace(chatRe, '').replace(modRe, '').replace(threadRe, '').replace(humanRe, '').replace(respondRe, '').replace(chrRe, '').replace(startNewChatRe, '').replace(humanNoteRe, '').replace(assistantNoteRe, '').replace(oocRe, '').replace(spaceoocRe, '')
        .replace(/Assistant:/g, '')
        .replace(/Human:/g, '')
        .replace(/A:/g, '')
        // Replace text goes here
        .replace(/H:/g, '');
}
