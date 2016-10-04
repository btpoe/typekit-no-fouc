;(function() {
    if (!window.MutationObserver) return;

    function nodeIsTypekitDeclaration(node) {
        return !!(node.tagName.toLowerCase() === 'style' && (/fonts\.typekit\.net/).test(node.innerHTML));
    }

    function captureTypekitDeclaration(node) {
        if (nodeIsTypekitDeclaration(node)) {
            window.localStorage.setItem('ts.fontFace', node.innerHTML);
            return true;
        }
        return false;
    }

    function nodeListHasTypekitDeclaration(nodeList) {
        return Array.prototype.some.call(nodeList, captureTypekitDeclaration);
    }

    function fontsAreLoaded() {
        return document.documentElement.classList.contains('wf-active');
    }

    function mutationHasTypekitDeclaration(mutation) {
        return fontsAreLoaded() && nodeListHasTypekitDeclaration(mutation.addedNodes);
    }

    function checkMutationsForTypekitDeclaration(mutations) {
        mutations.some(mutationHasTypekitDeclaration) && observer.disconnect();
    }

    var observer = new MutationObserver(checkMutationsForTypekitDeclaration);
    observer.observe(document.head, { childList: true });
    setTimeout(observer.disconnect.bind(observer), 10000);
})();
