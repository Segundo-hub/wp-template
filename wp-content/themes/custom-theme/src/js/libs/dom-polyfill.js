(function(w, d) {
    let HTML = Element.prototype;
    HTML.addClass = function(style) {
        this.classList.add(style);
    };

    HTML.removeClass = function(style) {
        this.classList.remove(style);
    };

    HTML.toggleClass = function(style) {
        this.classList.toggle(style);
    };

    HTML.hasClass = function(style) {
        return this.classList.contains(style);
    };

    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector;
    }
    if (!Element.prototype.closest) {
        Element.prototype.closest = function(s) {
            var el = this;

            do {
                if (el.matches(s)) return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);

            return null;
        };
    }
    [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(
        function(e) {
            e.hasOwnProperty("remove") ||
                Object.defineProperty(e, "remove", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function() {
                        this.parentNode.removeChild(this);
                    },
                });
        }
    );
})(window, document);