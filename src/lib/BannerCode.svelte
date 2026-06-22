<div
    class="rounded-lg overflow-hidden border border-ink-400 shadow-md shadow-ink-900 bg-ink-700 font-mono"
>
    <div id="title-bar" class="flex gap-6 px-4 py-2 border-b border-ink-400">
        <div id="window-buttons" class="flex items-center gap-2">
            <div class="size-3 rounded-full bg-error-500"></div>
            <div class="size-3 rounded-full bg-warning-500"></div>
            <div class="size-3 rounded-full bg-success-500"></div>
        </div>
        <div>
            <p class="text-sm text-ink-300">typeCrafters.js</p>
        </div>
    </div>
    <div id="viewport" class="p-4">
        <!-- DO NOT REMOVE COMMENTS INSIDE <pre></pre> -->
        <pre><code><!--
            --><span class="text-ink-300">// who we are</span>
<span class="text-keyword">export const</span><!--
            -->&nbsp;<span class="text-const">studio</span><!--
            -->&nbsp;<span class="text-operator">=</span><!--
            -->&nbsp;<span class="text-bracket">{"{"}</span>
    <span class="text-key">people</span><!--
    --><span class="text-punctuation">:</span><!--
    -->&nbsp;<span class="text-bracket">2</span><!--
    --><span class="text-punctuation">,</span>
    <span class="text-key">games</span><!--
    --><span class="text-punctuation">:</span><!--
    -->&nbsp;<span class="text-str">'shipping'</span><!--
    --><span class="text-punctuation">,</span>
    <span class="text-key">tools</span><!--
    --><span class="text-punctuation">:</span><!--
    -->&nbsp;<span class="text-str">'openSourced'</span><!--
    --><span class="text-punctuation">,</span>
    <span class="text-key">coffee</span><!--
    --><span class="text-punctuation">:</span><!--
    -->&nbsp;<span class="text-bracket">Infinity</span><!--
    --><span class="text-punctuation">,</span>
<span class="text-bracket">{"}"}</span><!--
--><span class="text-punctuation">;</span>

<span class="text-const">studio</span><!--
--><span class="text-punctuation">.</span><!--
--><span class="text-method">craft</span><!--
--><span class="text-bracket">(</span><!--
--><span class="text-key">everyDay</span><!--
--><span class="text-bracket">)</span><!--
--><span class="text-punctuation">;</span><!--
--><span class="cursor animate-cursor"></span><!--
        --></code></pre>
    </div>
</div>

<style>
    @keyframes cursor {
        0%, 100% { background-color: var(--color-info-500); }
        50% { background-color: transparent; }
    }
    .cursor {
        display: inline-flex;
        width: 2px;
        height: 23px;
        margin: -5px 0.25rem;
        padding: 0;
    }
    .animate-cursor {
        animation: cursor 1000ms step-end infinite;
    }
    .text-keyword {
        color: #c678dd;
    }

    .text-const {
        color: #e5c07b;
    }

    .text-operator {
        color: #56b6c2;
    }

    .text-punctuation {
        color: #abb2bf;
    }

    .text-bracket {
        color: #d19a66;
    }

    .text-key {
        color: #e06c75;
    }

    .text-str {
        color: #98c379;
    }

    .text-method {
        color: #61afef;
    }
</style>
